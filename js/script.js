let elForm = document.querySelector('.form__container')
let elForm__input = document.querySelector('.form__input');
let elForm__btn = document.querySelector('.enter__btn');
let elResult = document.querySelector('.result__box');
let elName__inputTwo = document.querySelector('.form__input-two');
let elForm__btnTwo = document.querySelector('.enter__btn');
let elResult__heading = document.querySelector('.result__heading');


// Array 
const todos = [];
let counter = 0;


elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let inputValue = elForm__input.value;
    let inputValueTwo = elName__inputTwo.value;
    
    elResult__heading.textContent = `${inputValueTwo}ning bugungi rejalari:`

    let item = document.createElement("li");
    item.classList.add("result__li");

    item.textContent = inputValue;

    elResult.appendChild(item);

    let todo = {
        name: inputValue,
        id: counter++
    }

    todos.push(todo)
    elForm__input.value = null;
})  

