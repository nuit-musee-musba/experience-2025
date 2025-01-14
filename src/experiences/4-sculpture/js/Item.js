import ITEMS from '../data/item.js';

export default class Item {
    constructor(item) {
        // Trouve l'objet correspondant dans les données
        const itemData = ITEMS.find(data => data.item === item);
        if (!itemData) {
            throw new Error(`Aucun objet trouvé pour l'item ${item}`);
        }

        this.id = itemData.id; // ID unique
        this.item = itemData.item;
        this.name = itemData.name;
        this.image = itemData.image;
        this.element = this.createHTMLElement();
    }

    createHTMLElement() {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.setAttribute('draggable', 'true');
      itemElement.setAttribute('data-item', this.item);
      itemElement.setAttribute('data-id', this.id); // Définit data-id
  
      console.log(`Création de l'élément : data-item = ${this.item}, data-id = ${this.id}`); // Log pour vérifier
  
      // Ajouter l'image
      const img = document.createElement('img');
      img.src = this.image;
      img.alt = this.name;
      img.style.width = '80px';
      img.style.height = '80px';
      img.style.objectFit = 'contain';
      img.style.display = 'block';
      img.style.margin = '0 auto';
  
      // Ajouter le texte du nom de l'objet
      const textElement = document.createElement('p');
      textElement.textContent = this.name;
      textElement.style.textAlign = 'center';
      textElement.style.marginTop = '5px';
  
      // Ajouter l'image et le texte au conteneur
      itemElement.appendChild(img);
      itemElement.appendChild(textElement);
  
      return itemElement;
  }
  
  
}

