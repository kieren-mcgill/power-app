const urlPowerMix = 'https://api.carbonintensity.org.uk/generation'
let powerMix
let sortedPower

fetch(urlPowerMix).then((response) => response.json())
    .then((data) => {
        powerMix = data.data.generationmix
        sortedPower = powerMix.sort((a, b) => b.perc - a.perc)
    })


const urlCurrentIntensity = 'https://api.carbonintensity.org.uk/intensity'
// export let currentIntensity

fetch(urlCurrentIntensity).then((response) => response.json())
    .then((data) => {
        // currentIntensity = data.data.
        console.log(data)
    })






