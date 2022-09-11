const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
  nav {
        height: 60px;
        padding: 24px;
        margin-bottom: 24px;
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
        .topnav li {
            display: none;
        }
        nav a.icon {
            display: flex;
        }
    }

    @media screen and (max-width: 600px) {
        .topnav.mobile li {
            display: block;
            padding: 12px;
        }
        .topnav.mobile {
            position: absolute;
            left: 0;
            top: 5rem;
            margin: 0;
            width: 100%;
            height: 100vh;
            flex-direction: column;
            background-color: black;
        }
    }

  </style>
  <header>
    <nav>
        <img src="assets/wymbol v2@2x.png" alt="wymbol logo" width="95.52" height="66.72">
        <ul class="topnav" id="myTopnav">
            <li><a class="menu-links" href="index.html">Home</a></li>
            <li><a class="menu-links" href="submit.html">Submit Your Work</a></li>
            <li><a class="menu-links" href="about.html">About</a></li>
        </ul>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <img src="assets/menu-icon.png" alt="menu icon" width="32" height="32">
        </a>
    </nav>
  </header>
`;
class Header extends HTMLElement {
  constructor() {
    super();
    this.appendChild(headerTemplate.content);
    const script = document.createElement('script');
    script.textContent = 'function myFunction() { var navList = document.getElementById("myTopnav"); if (navList.className === "topnav") { navList.className += " mobile"; } else { navList.className = "topnav"; } }'
    this.appendChild(script);
  }
}
customElements.define('nav-header', Header);