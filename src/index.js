import loadPage from "./load";
import showMenu from "./menu";
import showAbout from "./about";

const highlight = {
  color: 'var(--accent)',
  backgroundColor: 'rgba(224, 217, 217, 0.1)',
  filter: 'drop-shadow(2px 2px 5px black)'
}

const buttonGenerator = (id) => {
  const element = document.getElementById(id);
  let btnOn = false;
  
  const on = () => {
    if(!btnOn) {
      element.style.color = highlight.color;
      element.style.backgroundColor = highlight.backgroundColor;
      element.style.filter = highlight.filter;
      btnOn = true;
    }
  }

  const off = () => {
    element.style.color = '';
    element.style.backgroundColor = '';
    element.style.filter = '';
    btnOn = false;
  }

  return { element, on, off }
}

const btnHome = buttonGenerator('home');
const btnMenu = buttonGenerator('menu');
const btnAbout = buttonGenerator('about');


function clearPage() {
  const content = document.getElementById('content');

  while(content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

btnMenu.element.addEventListener('click', () => {
  btnMenu.on();
  btnHome.off();
  btnAbout.off();
  clearPage();
  showMenu();
});

btnHome.element.addEventListener('click', () => {
  btnHome.on();
  btnMenu.off();
  btnAbout.off();
  clearPage();
  loadPage();
});

btnAbout.element.addEventListener('click', () => {
  btnAbout.on();
  btnHome.off();
  btnMenu.off();
  clearPage();
  showAbout();
});

btnHome.on();
loadPage();
