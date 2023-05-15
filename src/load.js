export default function loadPage() {
  const content = document.getElementById('content');

  const home = document.createElement('section');
  const homeTitle = document.createElement('h1');
  const homeDesc = document.createElement('p');
  
  home.classList.add('home');

  homeTitle.innerHTML = 'FRESH LOCAL FLAVOR';
  homeDesc.innerHTML = 'EMBARK ON A GASTRONOMIC JOURNEY UNLIKE ANY OTHER.';

  home.appendChild(homeTitle);
  home.appendChild(homeDesc);

  content.appendChild(home);
}

