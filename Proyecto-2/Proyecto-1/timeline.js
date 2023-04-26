'use strict';

const prueba = document.querySelector('ul.prueba');

const getDates = async () => {
  try {
    const response = await fetch('./zelda-timeline.json');

    const date = await response.json();

    console.log(date.sort((a, b) => a.date - b.date));

    const frag = document.createDocumentFragment();

    for (const titulos of date) {
      const fecha = titulos.date;
      const imagen = titulos.image;
      const titulo = titulos.title;
      const texto = titulos.text;

      const li = document.createElement('li');

      li.innerHTML = `
        <article>                      
          <p class="a1">${titulo} ${fecha}</p>
          <img src="${imagen}" >   
          <p class="a3">${texto} </p>
        </article>
         `;

      frag.append(li);
    }

    prueba.append(frag);
  } catch (err) {
    console.error(err);
  }
};

getDates();

(function () {
  // define variables
  var items = document.querySelectorAll('.zelda li');

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add('in-view');
      }
    }
  }

  // listen for events
  window.addEventListener('load', callbackFunc);
  window.addEventListener('resize', callbackFunc);
  window.addEventListener('scroll', callbackFunc);
})();
