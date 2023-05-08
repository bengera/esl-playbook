const hamMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.nav__list-container');
const overlay = document.querySelector('.overlay');
const modalContainer = document.getElementById('modal');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    navigation.classList.toggle('show');
    overlay.classList.toggle('show');
    

    if (navigation.classList.contains('show')) {
        navigation.classList.add('fade-in');
        setTimeout(() => {
            navigation.classList.remove('fade-in');
        }, 500);
    } else {
        navigation.classList.add('fade-out');
        setTimeout(() => {
            navigation.classList.remove('fade-out');
        }, 500);
    }
});

// MODAL BUTTON LISTENER


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('card__btn-more')) {  
        document.querySelector('.modal').style.visibility = 'visible';  
        document.querySelector('.modal__content').style.display = 'flex'; 
        overlay.classList.add('show');

    //   Get the value of the data-modal attribute
    //   const modalId = event.target.dataset.modal;
  
    //   // Find the corresponding modal object in modalGameData
    //   const modalData = modalGameData.find(modal => modal.title === modalId);
  
    //   // Create the modal HTML using the modalTemplate function
    //   const modalHtml = modalTemplate(modalData);
  
    //   // Add the modal HTML to the modal container element
    //   const modalContainer = document.getElementById('modal-container');
    //   modalContainer.innerHTML = modalHtml;
    }
  });
  
