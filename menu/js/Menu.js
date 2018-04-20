const Menu = function(items, opened) {
  let
  let menuOpen = document.createElement('div');
  let toggle = document.createElement('div');
  let sp = document.createElement('span');
  let navigation = document.createElement('nav');
  let list = document.createElement('ul');
  
  let home = document.createElement('li');                                  
  let about = document.createElement('li');       
  let contact = document.createElement('li');       
  
  let homeLink = document.createElement('a');                                  
  let aboutLink = document.createElement('a');       
  let contactLink = document.createElement('a');  
  
  menuOpen.className = 'menu';
  menuOpen.className = 'menu-open';
  toggle.className = 'menu-toggle';
  
  homeLink.href = '#home';
  aboutLink.href = '#about';
  contactLink.href = '#contact';
  
  homeLink.appendChild(document.createTextNode('Главная страница'));
  aboutLink.appendChild(document.createTextNode('О компании'));
  contactLink.appendChild(document.createTextNode('Контакты'));
  
  home.appendChild(homeLink);
  about.appendChild(aboutLink);
  contact.appendChild(aboutLink);
  
  list.appendChild(home);
  list.appendChild(about);
  list.appendChild(contact);
  navigation.appendChild(list);
  
  
  

  

}