const xhr = new XMLHttpRequest();

xhr.addEventListener('load',() => {
  console.log(xhr.response);
});

//GET POST PUT DELETE
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();