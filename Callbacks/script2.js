
 /**
  * More Callbacks
  */

//   const button = document.querySelector('button')

//   function toggle() {
//       button.classList.toggle('altColor')
//   }


// //   toggle()

// // button.addEventListener('click', toggle)
 
// // button.addEventListener('click', () => {
// //     button.classList.toggle('altColor')
// // })

// button.addEventListener('click', () => {
//     button.classList.toggle('altColor')
// })

function firstAction(callback){
    console.log('Im the first action')
    setTimeout(callback, 2000)
}

function secondAction(){
    console.log('Im the second action')
}

function thirdAction(){
    console.log('Im the third action')
}

setTimeout(() =>
 firstAction( () =>
  secondAction('Im the second action'), 'Im the first action', thirdAction),5000)
