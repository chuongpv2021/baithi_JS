let names = ['Bach', 'Duy', 'Khiem', 'Vuong', 'Tung', 'Minh', 'Nam']
let para = document.querySelector('p');
function chooseName() {
  let randomNumber = Math.floor(Math.random() * names.length);
  let choice = names[randomNumber];
  para.textContent = choice
}
chooseName()