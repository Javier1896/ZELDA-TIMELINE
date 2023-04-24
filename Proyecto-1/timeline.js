'use strict'

const getDates = async () => {
    try {
        const response = await fetch('./zelda-timeline.json');

        const date = await response.json();

        // A partir de aqui ya podriamos pushear o hacer cosas con el array.
        const fechas = date ;

        fechas.sort(); 

        fechas.sort((a, b) => b - a);

        console.log(date);
    } catch (err) {
        console.error(err);
    }
};

getDates();

/* const newFirstRound = firstRound.map((elem) => {
    elem.total = elem.scores.reduce((acc, totalScore) => acc + totalScore);
    return elem;
  });
  
  const clasif = newFirstRound.sort((a, b) => b.total - a.total);
  const win = clasif[0];
  const lose = clasif[clasif.length - 1];
  
  console.log(
    `El mejor equipo es ${win.team} con un total de ${win.total} puntos`
  );
  
  console.log(
    `El peor equipo es ${lose.team} con un total de ${lose.total} puntos`
  ); */
  

/*
  const newStudents = students.map((student) => {
    // Agregamos la nueva propiedad.
    student.isAdult = student.age > 17;

    // Retornamos al estudiante.
    return student;
});*/


//getDates.date.sort();

//console.log(getDates);


const fechas = date ;

fechas.sort(); 

console.log(fechas);


fechas.sort((a, b) => b - a);

console.log(fechas);

//const months = ['March', 'Jan', 'Feb', 'Dec'];
//months.sort();
//console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]
