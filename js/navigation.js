class Navigation extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    <nav class="nav">
    <div class="nav__inner-container">
     <div class="nav__list-container">
    <ul class="nav__list">
      <li class="nav__list-item"><a href="#" class="nav__list-link">Home</a></li>
      <li class="nav__list-item"><a href="#" class="nav__list-link">About</a></li>
      <li class="nav__list-item"><a href="#" class="nav__list-link">Games</a></li>
      <li class="nav__list-item"><a href="#" class="nav__list-link">Activities</a></li>
      <li class="nav__list-item"><a href="#" class="nav__list-link">Management</a></li>
      <li class="nav__list-item"><a href="#" class="nav__list-link">Extras</a></li>

    </ul>
  </div>
  <div class="nav__left-content">
  <img src="./img/logo.png" alt="logo" class="logo">
  <p class="nav__title">ESL Playbook</p>
  </div>
  <button class="hamburger-menu" aria-label="Open menu"></button>
</div>
  </nav>
    `

  
  }

}


  customElements.define('navigation-component', Navigation);





