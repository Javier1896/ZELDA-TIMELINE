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

// Seleccionamos los nodos con los que vamos a trabajar.
const zeldaUl = document.querySelector('ul.prueba');
const zeldaForm = document.forms.juegos;
const zeldaInput = zeldaForm.elements.juego;
const zelda1Input = zeldaForm.elements.historia;

/// Obtenemos un array de tweets del local storage. Si no existe, inicializamos con un
// array vacío.
/*let historia = JSON.parse(localStorage.getItem('historia')) || [];*/

/**
 * ##################################################
 * ## Agregamos un evento de submit al formulario. ##
 * ##################################################
 */

zeldaForm.addEventListener('submit', (event) => {
  // Prevenimos el comportamiento por defecto del evento submit.
  event.preventDefault();
  //  Creamos el li.
  const li = document.createElement('li');

  // Agregamos el contenido al li.
  li.innerHTML = `
      <article>                      
        <p class="a1">${zeldaInput}</p>
        <p class="a3">${zelda1Input}</p>
      </article>
     `;

  // Agregamos el li como hijo del ul.
  zeldaUl.append(li);

  // Vaciamos el input.
  zeldaInput.value = '';

  /*// Actualizamos el array de tweets en el local storage.
  localStorage.setItem('historia', JSON.stringify());

  // Llamamos a la función render para que se liste el nuevo tweet que acabamos de agregar.
  render();*/
});
/* enviar*/
/*
zeldaUl.addEventListener('click', (event) => {
  // Seleccionamos de forma inequívoca el elemento sobre el cuál hemos hecho click.
  const { target } = event;

  // Comprobamos si el nodo clickado es el botón con clase "delete".
  if (target.matches('button.delete')) {
    // Preguntamos a la persona si desea eliminar el tweet.
    if (confirm('¿Estás seguro de que deseas eliminar el tweet?')) {
      // Seleccionamos el li más cercano al botón.
      const li = target.closest('li');

      // Obtenemos el index del tweet que queremos eliminar.
      const tweetId = Number(li.getAttribute('data-index'));

      // Eliminamos el tweet del array de tweets. Para ello filtramos los tweets cuya
      // propiedad id sea distinta del id que queremos eliminar.
      tweets = tweets.filter((tweet) => tweet.id !== tweetId);

      // Actualizamos el array de tweets en el local storage.
      localStorage.setItem('tweets', JSON.stringify(tweets));

      // Eliminamos el li.
      li.remove();

      // Renderizamos la página para que el tweet eliminado desaparezca.
      render();
    }
  }
});*/
