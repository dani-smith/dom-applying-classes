// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()
  two()
  three()
  makeVisible()
    
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  one.classList.add('blue')
}

function two () {
  // First, we have to find the element:
  var two = document.getElementById('two')

  two.classList.add('green')
}

function three () {
  // First, we have to find the element:
  var three = document.getElementById('three')

  three.classList.add('purple')
}

function makeVisible () {
  // First, we have to find the element:
  var makeVisible = document.getElementsByClassName('invisible')[0]

  makeVisible.classList.add('visible')
}
