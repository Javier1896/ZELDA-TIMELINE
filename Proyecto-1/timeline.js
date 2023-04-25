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
