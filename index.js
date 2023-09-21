// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
 
function destructivelyAppendCat(name) {
  cats.push(name)
}


function destructivelyPrependCat(name) {
  cats.unshift(name)
}


function destructivelyRemoveLastCat() {
  cats.pop()
}


function destructivelyRemoveFirstCat() {
  cats.shift()
}


function appendCat(name) {
  const Arnold = [...cats, name];
  return Arnold
}


function prependCat(name) {
  const Ralph = [name, ...cats];
  return Ralph
}

function removeLastCat() {
  const Melo = cats.slice(0, -1);
  return Melo
}

function removeFirstCat() {
  const kenn = cats.slice(0, -1);
  return kenn
}
function removeFirstCat() {
    const Melo = cats.slice(1);
    return Melo
  }