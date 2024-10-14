document.addEventListener("DOMContentLoaded", function () {
    console.log("HTML разобран и DOM дерево построено.");
    
})

window.addEventListener('load', function () {
    console.log("Вся страница полностью загружена.");
    
})

const title = document.getElementById('course-title')
console.log(title);
title.textContent = 'Обновленное содержание курса 📘'
title.classList.remove('title')

const colorButton = document.querySelector('#color-button')
console.log(colorButton);
colorButton.style.padding = '5px 10px'
colorButton.style.color = 'gray'
colorButton.style.backgroundColor = 'lightblue'

colorButton.setAttribute('title', 'generate random color')
console.log(colorButton.getAttribute('title'))
colorButton.addEventListener('click', function() {
    const items = list.querySelectorAll('.item')
    for (const item of items) {
        item.style.color = RGB();
    }
})

function RGB() {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}

const list = document.querySelector('.list')
// console.log(list);
const domItem = document.querySelector('.list').querySelector('#dom')
console.log(domItem);
domItem.innerHTML = '<a href="https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model/Introduction">Взаимодействие с DOM ⬅</a>'
domItem.classList.add('current')

const items = list.querySelectorAll('.item')
console.log(items);








