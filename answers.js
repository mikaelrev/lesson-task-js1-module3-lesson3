// Question 1

const greet = name => `Hello ${name}!`;

greet("Mikael");

const add = (a, b) => a + b;

add(7, 8);



// Question 2

fetch("https://cat-fact.herokuapp.com/facts")
  .then(function (response) {
    return response.json();
  })
  .then(function (results) {
    console.log(results.length);
  })
  .catch(function (error) {
    console.log(error);
  });


function getCatFacts() {
    fetch("https://cat-fact.herokuapp.com/facts")
        .then(function (response) {
            return response.json();
        })
        .then(function (results) {
            console.log(results.length);
        })
        .catch(function (error) {
            console.log(error);
        });
}

getCatFacts();


function getCatFacts2() {
    fetch("https://cat-fact.herokuapp.com/facts")
        .then((response) => response.json())
        .then((results) => console.log(results.length))
        .catch((error) => console.log(error));
}

getCatFacts2();

