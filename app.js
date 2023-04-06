const baseUrl = 'https://api.carbonintensity.org.uk/'

const icons = {
    gas: ['fa-solid', 'fa-fire'],
    wind: ['fa-solid', 'fa-wind'],
    nuclear: ['fa-solid', 'fa-circle-radiation'],
    imports: ['fa-solid', 'fa-ship'],
    biomass: ['fa-solid', 'fa-tree'],
    hydro: ['fa-solid', 'fa-water'],
    solar: ['fa-solid', 'fa-sun'],
    coal: ['fa-solid', 'fa-smog'],
    other: ['fa-solid', 'fa-question']
}

const fetchPower = () => {
    fetch(`${baseUrl}generation`).then((response) => response.json())
        .then((data) => {
            data.data.generationmix.sort((a, b) => b.perc - a.perc)
                .forEach((source, i) => {
                    document.getElementById(`power-desc-${i + 1}`)
                        .textContent = `${source.fuel}: ${source.perc}%`
                    document.getElementById(`bar-${i + 1}`)
                        .style.setProperty("width", `${source.perc}%`)
                    document.getElementById(`icon-${i+1}`)
                        .classList.add(`${icons[source.fuel][0]}`, `${icons[source.fuel][1]}`)
                })
        })
}
fetchPower()

const indexIcon = {
    'very low': ['fa-regular', 'fa-smile', 'darkgreen'],
    'low': ['fa-regular', 'fa-smile', 'darkgreen'],
    'moderate': ['fa-regular', 'fa-meh', 'darkorange'],
    'high': ['fa-regular', 'fa-frown', 'red'],
    'very high': ['fa-regular', 'fa-frown', 'red']
}

fetch(`${baseUrl}intensity`).then((response) => response.json())
    .then((data) => {
        const indexToday = data.data[0].intensity
        document.getElementById('indexIcon')
            .classList.add(`${indexIcon[indexToday.index][0]}`, `${indexIcon[indexToday.index][1]}`)
        document.getElementById('indexWord')
            .innerText = `${indexToday.index}`
        document.getElementById('indexNumber')
            .innerText = `${indexToday.actual}g/kWh`
        document.getElementById('indexIcon')
            .style.color = `${indexIcon[indexToday.index][2]}`
        document.getElementById('indexWord')
            .style.color = `${indexIcon[indexToday.index][2]}`
    })


const infoBtn = document.getElementById('infoBtn')
infoBtn.onclick = () => {
    const infoBox = document.getElementById('infoBox')
        infoBox.classList.toggle('reveal')
    const infoText = document.getElementById('infoText')
    infoText.classList.toggle('show')
    const thisBtn  = document.getElementById('infoBtn')
    thisBtn.classList.toggle('on')
}






