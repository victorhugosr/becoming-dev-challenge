const totalDays = 210;
const datesData = window.localStorage.getItem('datesData') || {}
const dayContainer = document.querySelector('#days-container')

function renderSquare(day, container) {
    const squareElement = document.createElement('div')
    squareElement.classList.add('day')
    squareElement.setAttribute('id', day.date)

    if (day.hasStudied && day.hasPractice) {
        squareElement.classList.add('complete-day')
    } else if (day.hasStudied || day.hasPractice) {
        squareElement.classList.add('half-day')
    }
    container.appendChild(squareElement)
}

function renderSquares(startDay, totalMonths, dayContainer) {
    // data atual
    let currentDate = dayjs(startDay)
    // data final do desafio
    let endDate = currentDate.add(totalMonths, 'days')

    while (currentDate.isBefore(endDate)) {
        // obtém a data atual no formato yyyy-mm-dd
        const dateAsIso = currentDate.toISOString().slice(0, 10);
        // dado do dia
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
