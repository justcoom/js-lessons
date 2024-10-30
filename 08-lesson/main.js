const list = document.querySelector('.list')

list.addEventListener('click', function (event) {
    const targerElement = event.target
    console.log(targerElement);
    
    if (targerElement.classList.contains('item')) {
        targerElement.classList.toggle('done')
    }

})


const form = document.querySelector('.form')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    
    const input = document.querySelector('.input')
    const text = input.value
    input.value = ''
    const list = document.querySelector('.list')

    const newItem = document.createElement('li')
    newItem.classList.add('item')
    newItem.textContent = text
    list.append(newItem)
}) 

const resetButton = document.querySelector('#reset-button')
let timeoutId // Хранение идентификатора таймера
let isTimerStarted = false // Флаг, указывающий на то, запущен ли таймер

resetButton.addEventListener('click', function () {
    if (isTimerStarted) {
        clearTimeout(timeoutId) // отмена таймера
        resetButton.textContent = "Сброс"
        isTimerStarted = false
    } else {
        resetButton.textContent = 'Отмена';
        isTimerStarted = true;

        timeoutId = setTimeout(function () {
            const items = document.querySelectorAll('.item')
            for (let i = 0; i < items.length; i++) {
                const element = items[i];
                element.classList.remove('done')
            }

            resetButton.textContent = 'Сброс'
            isTimerStarted = false;
        }, 3000)
    }
})