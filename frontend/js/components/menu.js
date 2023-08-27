

const CLASSES = {
  animIn: 'transparent-on',
  animOut: 'transparent-off',
  activeMenu: 'main-menu--down',
}

const SELECTORS = {
  component: '.js-menu'
}

const menuInstance = document.querySelector(SELECTORS.component)

var windowWidth = window.innerWidth;
const menuToggle = document.querySelector('#navbarNav');

window.onresize = function(event) {
  windowWidth = window.innerWidth;


  if($(window).width() < 992) {
    $('.main-menu__link').click(function() {
      $( ".main-menu__close" ).click();
    });
  }
};

class Navbar {
  constructor (context) {
    this.context = context
    this.bannerHeight = context.clientHeight
    this.offset = 0
    this.refoffset = 0
  }

  init () {
    this.subscribe()
  }

  subscribe () {
    window.addEventListener('scroll', () => {
      this.handleScroll()
    })
  }

  handleScroll () {
    this.offset = window.scrollY

    if (this.offset > 0) {
      // Menu out of view
      this.context.classList.remove(CLASSES.animIn)
      this.context.classList.add(CLASSES.animOut)
      this.context.classList.add(CLASSES.activeMenu)

    }
    else {
      this.context.classList.remove(CLASSES.animOut)
      this.context.classList.add(CLASSES.animIn)
      this.context.classList.remove(CLASSES.activeMenu)

    }
  }
}

if (menuInstance) {
  const mainMenu = new Navbar(menuInstance);
  mainMenu.init();
}

$(document).ready(function(){
  if($(window).width() < 992) {
    $('.main-menu__link').click(function() {
      $( ".main-menu__close" ).click();
    });
  }
})
