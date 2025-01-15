import { Modal } from "../../../commons/components/Modal";

export class descriptionPaintings extends Modal{
    constructor(title, content, className = '', parentElement = null) {
        super(title, content, className, parentElement);
    }

    showModalWithHtml(contentArray) {
        if (!Array.isArray(contentArray)) {
            console.error('Le contenu doit être un tableau de chaînes de caractères.');
            return;
        }

        const containerContent = document.createElement('div');
        containerContent.className = 'containerContent';

        contentArray.forEach(content => {
            if (typeof content === 'string') {
                const paragraph = document.createElement('p');
                paragraph.textContent = content;
                containerContent.appendChild(paragraph);
            } else {
                console.error('Chaque élément du tableau doit être une chaîne de caractères.');
            }
        });

        this.contentElement.innerHTML = ''; 
        this.contentElement.appendChild(containerContent);

        this.show();
    }
}