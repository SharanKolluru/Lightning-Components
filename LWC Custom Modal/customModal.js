import { LightningElement, track } from 'lwc';

export default class customModal extends LightningElement {
    @track numbers = [1, 2, 3]; // Sample numbers for tiles
    @track selectedNumber;

    handleTileClick(event) {
        this.selectedNumber = event.target.innerText;
    }

    closeExpandedView() {
        const closeButton = this.template.querySelector('.close-button');
        closeButton.classList.add('fade-out');
        setTimeout(() => {
          this.selectedNumber = null;
          closeButton.classList.remove('fade-out');
        }, 300); 
    }
}
