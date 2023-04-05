const urlPowerMix = 'https://api.carbonintensity.org.uk/generation'

let currentIntensity


const fetchPower = () => {
    fetch(urlPowerMix).then((response) => response.json())
        .then((data) => {
            data.data.generationmix.sort((a, b) => b.perc - a.perc)
                .forEach((source, i) => {
                    document.getElementById(`power-desc-${i+1}`)
                        .textContent = `${source.fuel}: ${source.perc}%`
                })
        })
}
fetchPower()

const urlCurrentIntensity = 'https://api.carbonintensity.org.uk/intensity'
// export let currentIntensity

fetch(urlCurrentIntensity).then((response) => response.json())
    .then((data) => {
        currentIntensity = data.data[0].intensity
    })






