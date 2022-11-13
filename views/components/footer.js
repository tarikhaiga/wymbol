const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      display: block;
      margin-top: 24px;
    }

    #footer-container {
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

    footer .body-text {
        color: white;
        margin-left: 48px;
    }

    .social-link img {
      width: 32px;
      height: 32px;
    }

    @media screen and (max-width: 700px) {
      #footer-container {
        flex-wrap: wrap;
        height: 100%;
      }
      .nav-link, .social-link {
        font-size: 14px;
      }
      footer .body-text {
        padding-top: 56px;
      }
    }
  </style>
  <footer>
    <div id="footer-container">
      <ul>
        <img src="../assets/wymbol v2@2x.png" alt="wymbol logo" width="95.52" height="66.72">
        <li><a class="nav-link" href="index.html">Home</a></li>
        <li><a class="nav-link" href="submit.html">Submit Your Work</a></li>
        <li><a class="nav-link" href="about.html">About</a></li>
      </ul>
      <a class="social-link" href="https://www.instagram.com/wymbol" target="_blank"><img src="../assets/instagram-white.png" alt="instagram logo" width="24" height="24" style="padding: 8px;"> <span style="color:#fff;">Instagram</span></img></a>
    </div>
    <p class="body-text">© 2022 Wymbol – Made in 🇨🇦 </p>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this.appendChild(footerTemplate.content);
  }
}
customElements.define('nav-footer', Footer);