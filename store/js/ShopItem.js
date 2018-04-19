const shopItem = function(item) {
  let content = document.createElement('div');

  let brandEl = document.createElement('h2');
  let titleEl = document.createElement('h1');
  let descrEl = document.createElement('h3');
  let descrFullEl = document.createElement('div');
  let highlightEl = document.createElement('div'); 
  let highOverlay = document.createElement('div'); 
  let dividerEl =  document.createElement('div'); 
  let purchaseEl = document.createElement('div');
  let priceEl = document.createElement('div');
  let addEl = document.createElement('button')

  content.className = 'main-content';
  descrFullEl.className = 'description';
  highlightEl.className = 'highlight-window';
  highlightEl.className = 'mobile';
  highOverlay.className = 'highlight-overlay';
  dividerEl.classname = 'divider';
  purchaseEl.className = 'purchase-info';
  priceEl.className = 'price';

  brandEl.appendChild(document.createTextNode(`${item.brand}`));
  titleEl.appendChild(document.createTextNode(`${item.title}`));
  descrEl.appendChild(document.createTextNode(`${item.description}`));
  descrFullEl.appendChild(document.createTextNode(`${item.descriptionFull}`));
  highlightEl.appendChild(highOverlay);
  purchaseEl.appendChild(priceEl);
  purchaseEl.appendChild(addEl);

  content.appendChild(brandEl);
  content.appendChild(titleEl);
  content.appendChild(descrEl);
  content.appendChild(descrFullEl);
  content.appendChild(highlightEl);
  content.appendChild(dividerEl);
  content.appendChild(purchaseEl);

  return content;
}