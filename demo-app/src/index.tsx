import { observable, autorun } from 'mobx';


const person = observable({
  firstName: 'Bob',
  lastName: 'Smith',
});

autorun(() => {

  console.log('last name changed: ', person.lastName);

});


console.dir(person);

// const person = {
//   _firstName: '',
//   _lastName: '',

//   get firstName() {
//     return this._firstName;
//   },
//   set firstName(value) {
//     this._firstName = value;
//   },

//   get lastName() {
//     window.__ourMobx.someContext.dependencies.push('person.lastName')
//     return this._lastName;
//   },
//   set lastName(value) {


//     this._lastName = value;

//     findAllContexts(window.__ourMobx, 'person.lastName').forEach(context => context.doUpdate());

//   }

// }

// const autorun = (fn: () => void) => {

//   window.__ourMobx.someContext = { id: "first context", dependencies: [] }

//   fn();


// };