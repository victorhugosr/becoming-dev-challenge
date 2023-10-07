// Definição do número total de dias do desafio
const totalDays = 210;

// Recuperação dos dados das datas armazenadas no localStorage ou inicialização de um objeto vazio
const datesData = window.localStorage.getItem('datesData') || {}

// Seleciona o elemento com o ID "days-container" para posterior manipulação
const dayContainer = document.querySelector('#days-container')

// Função para rendereizar um quadrado no grid de acordo com o estado de cada dia
function renderSquare(day, container) {
    const squareElement = document.createElement('div')
    squareElement.classList.add('day')
    squareElement.setAttribute('id', day.date)

    // Define a classe CSS do quadrado com base no estado do dia
    if (day.hasStudied && day.hasPractice) {
        squareElement.classList.add('complete-day')
    } else if (day.hasStudied || day.hasPractice) {
        squareElement.classList.add('half-day')
    }

    // Adiciona o quadrado ao contêiner
    container.appendChild(squareElement)
}


// Função para rendereizar os quadrados do grid
function renderSquares(startDay, totalMonths, dayContainer) {
    // data atual
    let currentDate = dayjs(startDay)
    // data final do desafio
    let endDate = currentDate.add(totalMonths, 'days')

    // Loop para criar e renderizar os quadrados de cada dia
    while (currentDate.isBefore(endDate)) {
        // obtém a data atual no formato yyyy-mm-dd
        const dateAsIso = currentDate.toISOString().slice(0, 10);
        // Obtém os dados do dia ou cria um objeto vazio
        const dayData = datesData[dateAsIso]
        renderSquare(dayData || {date: dateAsIso}, dayContainer)

        currentDate = currentDate.add(1, 'day');
    }
}

function startChallenge() {
    dayContainer.innerHTML = ''
    if (!window.localStorage.getItem('startDay')) {
        window.localStorage.setItem('startDay', new Date().toISOString().slice(0, 10))
    }

    const startDay = dayjs(window.localStorage.getItem('startDay'))
    renderSquares(startDay, totalDays, dayContainer)
}

(() => {
    if(window.localStorage.getItem('startDay')){
        startChallenge()
        return
    }

    renderFakeDays()
})()

function renderFakeDays(){
    for(i = 0; i < totalDays; i++){
        renderSquare({date: dayjs().add(i, 'days').toISOString()},  dayContainer)
    }
}

function updateDayData(date, key, value){
    const daysData = getDayData()
    daysData[date][key] = value
    localStorage.setItem('datesData', JSON.stringify(daysData))
}

function makeDayAsStudied(){
    const today = new Date().toISOString().slice(0, 10)
    updateDayData(today, 'hasStudied', true)
    updateSquareStyle(today)
}

function makeDayAsPractice(){
    const today = new Date().toISOString().slice(0, 10)
    updateDayData(today, 'hasPractice', true)
    updateSquareStyle(today)
}

function getDayData(date){
    const daysData = JSON.parse(localStorage.getItem('datesData') || {})
    if(!date){
        return daysData
    }

    if(!daysData[date]){
        daysData[date] = {
            date: date,
        }
    }
    return daysData[date]
}

function updateSquareStyle(date){
    const squareElement = document.getElementById(date)
    const dayData = getDayData(date)
    
    if (day.hasStudied && day.hasPractice) {
        squareElement.classList.add('complete-day')
    } else if (day.hasStudied || day.hasPractice) {
        squareElement.classList.add('half-day')
    }
}
