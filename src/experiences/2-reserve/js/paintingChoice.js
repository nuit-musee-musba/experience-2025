import { Modal } from "../../../commons/components/Modal";
import { descriptionPaintings } from "./descriptionPainting";
import paintings from "../data/paintings";
import selectedPaintings from "../data/selectedPaintings";
import Game from "./Game";
import AudioManager from "./audioManager";
import reserveScene from "./reserveScene.js";


let containerPaintings = document.querySelector('#container-paintings');
let isSelectModeActive = false;
let reserveBackground = document.querySelector('#reserve-background')


containerPaintings.addEventListener("click", (e) => {
    if (e.target.tagName !== "IMG" || Game.getInstance().dialogue.modal.style.display !== "none") {
        return;
    }

    if (isSelectModeActive) {
        console.log("Une image est déjà en mode sélection.");
        return;
    }
    let img = e.target;
    let parentImg = img.parentElement;

    isSelectModeActive = true;
    const paintingData = paintings.find((painting) => painting.src + ".jpg" === img.getAttribute("src"));
    addPaintingDetails(img, parentImg, paintingData);
});

function addPaintingDetails(img, parentImg, paintingData) {
    let descriptionContainer = document.createElement('div'); 
    let containerButton = document.createElement('div')
    
    const modal = new descriptionPaintings(paintingData.title, "", "selectModeDescription", descriptionContainer);
    const contentArray = [
        ` ${paintingData.author}`,
        `${paintingData.date}`,
        `${paintingData.description}`,
        `${paintingData.size}`
    ];
    modal.showModalWithHtml(contentArray);

    containerPaintings.classList.add("containerPaintingsOnselectMode")
    reserveBackground.style.display ="none";
    parentImg.classList.add('selectMode');
    img.classList.add("selectModeImg","imageBorder","_large");
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

function removePaintingDetails(parentImg, img) {
    const descriptionContainer = parentImg.querySelector('.descriptionContainer');
    if (descriptionContainer) {
        descriptionContainer.remove();
    }

    containerPaintings.classList.remove("containerPaintingsOnselectMode")
    reserveBackground.style.display ="block";
    parentImg.classList.remove('selectMode');
    img.classList.remove("selectModeImg");
    isSelectModeActive = false;
}

function createRemoveLink(parentImg, img) {
    let removeLink = document.createElement('a');
    removeLink.href = "#";
    removeLink.classList.add('small', 'black', 'nextButton' ,'button')
    removeLink.innerText = "Retour";
    removeLink.style.marginRight = "10px";
    removeLink.addEventListener("click", (e) => {
        e.preventDefault();
        removePaintingDetails(parentImg, img);
    });
    return removeLink;
}

function createPushLink(paintingData, parentImg, img) {
    let pushLink = document.createElement('a');
    pushLink.href = "#";
    pushLink.classList.add('small', 'black', 'nextButton', 'button');
    pushLink.innerText = "Choisir";
    
    pushLink.addEventListener("click", (e) => {
        e.preventDefault();
        
    
        if (!selectedPaintings.some(p => p.id === paintingData.id)) {
            selectedPaintings.push(paintingData);
            
            // Supprime les détails de la peinture dans l'interface utilisateur
            removePaintingDetails(parentImg, img);

            // Gère les sons et la transition de scène
            AudioManager.getInstance().canPlaySound = true;
            Game.getInstance().unloadScene("scene-reserve");
            Game.getInstance().loadScene("scene-exhibition");
            AudioManager.getInstance().canPlaySound = false;
        } else {
            console.error('Cette peinture est déjà sélectionnée.');
        }
    });
    return pushLink;
}