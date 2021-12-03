const prewBtn = document.querySelector('[data-name="prew-btn"]');
const imgEl = document.querySelector('.img');
const nextBtn = document.querySelector('[data-name="next-btn"]');
const dogBtn = document.querySelector('[data-name="dog-btn"]');
const catBtn = document.querySelector('[data-name="cat-btn"]');
const header = document.querySelector('[data-name="header"]');
let number = 0;
const KEY = '24644022-4984203066fb287d0befab6c3';
let animal = '';
let page = 1;


prewBtn.addEventListener('click', onClickPrew);
nextBtn.addEventListener('click', onClickNext);
dogBtn.addEventListener('click', () => (animal = 'dog', header.innerHTML = animal));
catBtn.addEventListener('click', () => (animal = 'cat', header.innerHTML = animal));

header.innerHTML = animal;


function getFoto(number) {

  fetch(`https://pixabay.com/api/?key=${KEY}&q=${animal}&page=${page}&per_page=20&image_type=photo`)
    .then(response => response.json())
    .then(data => {
      imgEl.src = data.hits[number].webformatURL;
      number === 0 && page === 1 ? prewBtn.disabled = true : prewBtn.disabled = false;
      // animal === '' 
    })

}

function onClickNext() {
  number += 1;
  if (number === 19) {
    page += 1;
    number = 0;
  }
  console.log('page', page);
  console.log('number', number);

  getFoto(number)
}

function onClickPrew() {
  if (number === 0) {
    page -= 1;
    number = 20;
  }
  number -= 1;
  console.log('page', page);
  console.log('number', number);
  getFoto(number)
}

