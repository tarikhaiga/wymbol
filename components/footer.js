const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    nav {
      height: 60px;
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    ul {
      padding: 0;
      display: flex;
      flex-direction: row;
      align-items: center;

    }
    
    ul li {
      list-style: none;
    }
    
    a.nav-link, .social-link {
      font-weight: 700;
      margin: 0 24px;
      color: #fff;
      text-decoration: none;
    }
    
    a.nav-link:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }

    .social-link {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .body-text {
        color: white;
        margin-left: 48px;
    }

  </style>
  <footer>
    <nav>
      <ul>
        <img src="assets/wymbol v2@2x.png" alt="wymbol logo" width="95.52" height="66.72">
        <li><a class="nav-link" href="index.html">Home</a></li>
        <li><a class="nav-link" href="submit.html">Submit Your Work</a></li>
        <li><a class="nav-link" href="about.html">About</a></li>
      </ul>
      <ul>
      <a class="social-link" href="https://www.instagram.com/wymbol" target="_blank"><img src="assets/instagram-white.png" alt="instagram logo" width="24" height="24" style="padding: 8px;"> <span style="color:#fff;">Instagram</span></img></a>
      </ul>
    </nav>
    <p class="body-text">© 2022 Wymbol – Made in Canada 🇨🇦</p>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('nav-footer', Footer);