const button = document.querySelector('.body .btn');
const image = document.querySelector('.image img');
const url = 'https://aws.random.cat/meow';

async function asyncFn() {
   const result = await fetch(url);
   const json = await result.json();
   image.src = json.file
}






button.addEventListener('click', () => asyncFn())