import { Modal } from "../../../commons/components/Modal";
import { descriptionPaintings } from "./descriptionPainting";
import paintings from "../data/paintings";
import selectedPaintings from "../data/selectedPaintings";
import Game from "./Game";
import AudioManager from "./audioManager";



let containerPaintings = document.querySelector('#container-paintings');

containerPaintings.addEventListener("click", (e) => {
    if (e.target.tagName !== "IMG") {
        return;
    }

    let img = e.target;
    let parentImg = img.parentElement;
    const paintingData = paintings.find((painting) => painting.src === img.getAttribute("src"));
    const descriptionContainer = parentImg.querySelector('.descriptionContainer');

    if (descriptionContainer) {
        removeBackgroundAndDescription(parentImg, img);
    } else {
        addbackgroundAndDescription(img, parentImg, paintingData);
    }
});

function addbackgroundAndDescription(img, parentImg, paintingData) {
    let descriptionContainer = document.createElement('div'); 
    let containerButton = document.createElement('div')
    const modal = new descriptionPaintings(paintingData.title, "", "selectModeDescription", descriptionContainer);
    const contentArray = [
        ` ${paintingData.autor}`,
        `${paintingData.date}`,
        `${paintingData.description}`,
        `${paintingData.height}`
    ];
    modal.showModalWithHtml(contentArray);


   

    parentImg.classList.add('selectMode');
    img.classList.add("selectModeImg");
    parentImg.classList.add('selectMode');
    containerButton.classList.add('containerButton')
    img.classList.add("selectModeImg");
    descriptionContainer.classList.add('descriptionContainer');

    let removeLink = createRemoveLink(parentImg, img);
    let pushLink = createPushLink(paintingData, parentImg, img);


    descriptionContainer.append(removeLink, pushLink, containerButton);
    containerButton.append(removeLink, pushLink)
    parentImg.append(descriptionContainer);
}

function removeBackgroundAndDescription(parentImg, img) {
    const descriptionContainer = parentImg.querySelector('.descriptionContainer');
    if (descriptionContainer) {
        descriptionContainer.remove();
    }

    parentImg.classList.remove('selectMode');
    img.classList.remove("selectModeImg");
}

function createRemoveLink(parentImg, img) {
    let removeLink = document.createElement('a');
    removeLink.href = "#";
    removeLink.classList.add('small', 'black', 'nextButton' ,'button')
    removeLink.innerText = "Retour";
    removeLink.style.marginRight = "10px";
    removeLink.addEventListener("click", (e) => {
        e.preventDefault();
        removeBackgroundAndDescription(parentImg, img);
    });
    return removeLink;
}

function createPushLink(paintingData, parentImg, img) {
    let pushLink = document.createElement('a');
    pushLink.href = "#";
    pushLink.classList.add('small', 'black', 'nextButton' ,'button')
    pushLink.innerText = "Valider";
    pushLink.addEventListener("click", (e) => {
        e.preventDefault();

        if (!selectedPaintings.includes(paintingData)) {
            selectedPaintings.push(paintingData);
            const index = paintings.findIndex(painting => painting.id === paintingData.id);
            if (index !== -1) {
                paintings.splice(index, 1); 
            }
            removeBackgroundAndDescription(parentImg, img);

            AudioManager.getInstance().canPlaySound = true;
            Game.getInstance().unloadScene("scene-reserve");
            Game.getInstance().loadScene("scene-exhibition");
            AudioManager.getInstance().canPlaySound = false;
        } else {
            console.error ('Cette peinture est déjà sélectionnée.');
        }
    });
    return pushLink;
}