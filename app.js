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
                    document.getElementById(`power-${i + 1}`)
                        .style.setProperty("--power-percentage", `${source.perc}%`)
                    document.getElementById(`icon-${i+1}`)
                        .classList.add(`${icons[source.fuel][0]}`, `${icons[source.fuel][1]}`)
                })
        })
}
fetchPower()


fetch(`${baseUrl}intensity`).then((response) => response.json())
    .then((data) => {
        data.data[0].intensity
    })






