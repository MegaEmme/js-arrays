const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

console.log(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];

for (let i = teachers.length - 1; i >=0 ; i--){
  reversedTeachers.push(teachers[i])
}

console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {

  const aTeacher = teachers[i];

  if (aTeacher.length >= 5) { 

    longNames.push(aTeacher)

  }  

}

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
const newTeachers = []

for (let i = 0; i <= teachers.length - 1; i++){

  const ciao = teachers[i];

  if (teachers[i] !== 'Ed'){
    newTeachers.push(ciao);
  }

}

console.log(newTeachers)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf('Fabio') > -1;
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join();
console.log(teachersString);