import paintings from "../data/paintings";
import selectedPaintings from "../data/selectedPaintings";
import Game from "./Game";
import AudioManager from "./audioManager";



let containeurPaintings = document.querySelector('#container-paintings');
let sceneReserve = document.querySelector('#scene-reserve');

containeurPaintings.addEventListener("click", (e) => {
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
    let title = document.createElement('p');
    let autor = document.createElement('p');
    let date = document.createElement('p');
    let description = document.createElement('p');
    let height = document.createElement('p');
    let descriptionContainer = document.createElement('div');

    title.innerText = paintingData.title;
    autor.innerText = paintingData.autor;
    date.innerText = paintingData.date;
    description.innerText = paintingData.description;
    height.innerText = paintingData.height;

    descriptionContainer.append(title, autor, date, description, height);
    parentImg.classList.add('selectMode');
    img.classList.add("selectModeImg");
    descriptionContainer.classList.add('descriptionContainer');

    let removeLink = createRemoveLink(parentImg, img);
    let pushLink = createPushLink(paintingData, parentImg, img);

    descriptionContainer.append(removeLink, pushLink);
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
            console.log('Cette peinture est déjà sélectionnée.');
        }
    });
    return pushLink;
}