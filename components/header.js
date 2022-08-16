const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 60px;
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color:  grey;
    }

    ul {
      padding: 0;
      display: flex;
      flex-direction: row;
    }
    
    ul li {
      list-style: none;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <header>
    <nav>
      <img src="assets//wymbol v2@2x.png" alt="wymbol logo" width="95.52" height="66.72">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="submit.html">Submit Your Work</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('nav-header', Header);