export default function showAbout() {
  const content = document.getElementById('content');

  const about = document.createElement('section');
  about.classList.add('about');

  const header = document.createElement('div');
  header.classList.add('about-header');
  const headerTitle = document.createElement('h1');
  headerTitle.innerHTML = 'ABOUT US';
  const headerP = document.createElement('p');
  headerP.innerHTML = `We're passionate about bringing people together over great food.<br> Our menu is inspired by classic American cuisine with a modern twist.`;
  header.appendChild(headerTitle);
  header.appendChild(headerP);

  const body = document.createElement('div');
  body.classList.add('about-body');

  const underline = document.createElement('div');
  underline.classList.add('underline');

  const underline2 = document.createElement('div');
  underline2.classList.add('underline');

  const bLeft = document.createElement('div');
  bLeft.classList.add('b-left');

  const leftList = document.createElement('ul');
  const bold1 = document.createElement('b');
  const title1 = document.createTextNode('Address:');
  bold1.appendChild(title1);

  const bold2 = document.createElement('b');
  const title2 = document.createTextNode('Phone:')
  bold2.appendChild(title2);

  const leftItem1 = document.createElement('li');
  leftItem1.appendChild(bold1);
  leftItem1.appendChild(document.createTextNode(' 456 Oak Street, New York, NY 10001'));

  const leftItem2 = document.createElement('li');
  leftItem2.appendChild(bold2);
  leftItem2.appendChild(document.createTextNode(' (212) 555-1234'));

  const bRight = document.createElement('div');
  bRight.classList.add('b-right');

  const rightList = document.createElement('ul');
  const bold3 = document.createElement('b');
  const title3 = document.createTextNode('Email:');
  bold3.appendChild(title3);

  const bold4 = document.createElement('b');
  const title4 = document.createTextNode('Website:')
  bold4.appendChild(title4);

  const rightItem1 = document.createElement('li');
  rightItem1.appendChild(bold3);
  rightItem1.appendChild(document.createTextNode(' info@therustictable.com'));

  const rightItem2 = document.createElement('li');
  rightItem2.appendChild(bold4);
  rightItem2.appendChild(document.createTextNode(' www.therustictable.com'));

  leftList.appendChild(leftItem1);
  leftList.appendChild(leftItem2);
  rightList.appendChild(rightItem1);
  rightList.appendChild(rightItem2);

  bLeft.appendChild(leftList);
  bRight.appendChild(rightList);

  body.appendChild(underline);
  body.appendChild(bLeft);
  body.appendChild(bRight);
  body.appendChild(underline2);

  const bottom = document.createElement('div');
  bottom.classList.add('about-bottom');

  const button = document.createElement('div');
  button.classList.add('button');

  const btnContent = document.createElement('h3');
  btnContent.innerHTML = 'CONTACT US';
  
  button.appendChild(btnContent);
  bottom.appendChild(button);

  about.appendChild(header);
  about.appendChild(body);
  about.appendChild(bottom);

  content.appendChild(about);
}