const hamMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.nav__list-container');


hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    navigation.classList.toggle('show');
    
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
