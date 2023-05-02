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

const zeldaUl = document.querySelector('ul.prueba');
const zeldaForm = document.forms.juegos;
const zeldaInput = zeldaForm.elements.juego;
const zelda1Input = zeldaForm.elements.historia;
const zelda2Input = zeldaForm.elements.portada;

/// Obtenemos un array de tweets del local storage. Si no existe, inicializamos con un
// array vacío.
let historia = JSON.parse(localStorage.getItem('zeldaForm.value')) || [];

zeldaForm.addEventListener('submit', (event) => {
  event.preventDefault();

  historia.push({
    titulo: zeldaInput.value,
    imagen: zelda2Input.value,
    historia: zelda1Input.value,
  });

  const li = document.createElement('li');

  li.innerHTML = `
      <article>                      
        <p class="a1">${zeldaInput.value}</p>
        <img src="${zelda2Input.value}" > 
        <p class="a3">${zelda1Input.value}</p>
      </article>
     `;

  zeldaUl.append(li);

  zeldaInput.value = '';
  zelda1Input.value = '';
  zelda2Input.value = '';

  localStorage.setItem('historia', JSON.stringify(historia));

  render();
});
