class Footer extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `<footer class="footer">
    <div class="footer__content">
    <div class="footer__col-1">
      <img src="./img/logo.png" alt="logo" class="footer__logo">
      <p class="footer__title">ESL Playbook</p>
    </div>
    <div class="footer__col-2">
      <div class="footer__col-2-left">
        <ul class="footer__list">
          <li class="footer__list-item"><a href="#" class="footer__list-link">About</a></li>
          <li class="footer__list-item"><a href="#" class="footer__list-link">Games</a></li>
          <li class="footer__list-item"><a href="#" class="footer__list-link">Actvities</a></li>
          <li class="footer__list-item"><a href="#" class="footer__list-link">Management</a></li>
          <li class="footer__list-item"><a href="#" class="footer__list-link">Extras</a></li>
          <li class="footer__list-item"><a href="#" class="footer__list-link">Contact</a></li>
        </ul>
      </div>
    </div>

    <div class="footer__col-3">
      <small>&copy; ESL Playbook. All Rights Reserved</small>
    </div>
  </div><!--footer content end-->
  </footer>   
    `

  
  }

}


  customElements.define('footer-component', Footer);








