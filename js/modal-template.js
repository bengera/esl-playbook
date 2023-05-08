export function modalTemplate(modal) {
    return `
    
    
      <div class="modal__content">
         <div class="modal__top">
            <img src= "${modal.icon}" alt="icon" class="modal__icon">
            <p id="title" class="modal__title">${modal.title}</p>
            <button class="modal__btn-close"></button>
         </div>
         <p id="overview" class="modal__overview"><span class="bold-span">Overview: </span>${modal.overview}</p>
         <p id="preparation" class="modal__preparation"><span class="bold-span">Preparation: </span>${modal.preparation}</p>
         <p id="materials" class="modal__materials"><span class="bold-span">Materials: </span>${modal.materials}</p>
         <p id="size" class="modal__size"><span class="bold-span">Size: </span>${modal.size}</p>
         <p id="instructions" class="modal__instructions"><span class="bold-span">Intructions: </span>${modal.instructions}</p>
         <p id="tweaks" class="modal__tweaks"><span class="bold-span">Tweaks: </span>${modal.tweaks}</p>
          <div class="modal__buttons">
          <a href="${modal.downloadTemplate}" class="modal__btn-template" id="btn-template">Download template</a>
          <a href="${modal.downloadPowerpoint}" class="modal__btn-powerpoint" id="btn-template">Download powerpoint</a>
          </div>
      </div>
    
    
    `
}

  /* <button href="${modal.downloadTemplate} id="btn-template" class="modal__btn-template">Download template</button> */