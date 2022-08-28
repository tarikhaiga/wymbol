const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
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
      flex-direction: row-reverse;
      align-items: center;
    }
    
    ul li {
      list-style: none;
    }
    
    a.menu-links {
      font-weight: 700;
      margin: 0 20px;
      color: #fff;
      text-decoration: none;
    }
    
    a.menu-links:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }

    .icon {
        display:none;
    }

    @media screen and (max-width: 600px) {
        .topnav li {display: none;}
        .topnav a.icon {
          float: right;
          display: block;
        }
      }
      
      @media screen and (max-width: 600px) {
        .topnav.responsive {position: relative;}
        .topnav.responsive a.icon {
          position: absolute;
          right: 0;
          top: 0;
        }
        .topnav.responsive a {
          float: none;
          display: block;
          text-align: left;
        }
      }


  </style>
  <header>
    <nav>
      <img src="assets/wymbol v2@2x.png" alt="wymbol logo" width="95.52" height="66.72">
      <ul class="topnav" id="myTopnav>
        <li><a class="menu-links" href="index.html">Home</a></li>
        <li><a class="menu-links" href="submit.html">Submit Your Work</a></li>
        <li><a class="menu-links" href="about.html">About</a></li>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <img src="assets/menu-icon.png" alt="menu icon" width="32" height="32">
        </a>
      </ul>
    </nav>
    // <script>
    //     function myFunction() {
    //         var x = document.getElementById("myTopnav");
    //         if (x.className === "topnav") {
    //             x.className += " responsive";
    //         } else {
    //             x.className = "topnav";
    //         }
    //     }
    // </script>
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