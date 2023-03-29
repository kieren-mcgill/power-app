const urlPowerMix = 'https://api.carbonintensity.org.uk/generation'
const powerMix = []

// DOM elements
const powerData = document.getElementById('power-data')
    
fetch(urlPowerMix).then((response) => response.json())
    .then((data) => {
        powerMix.push.apply(powerMix, data.data.generationmix)
        console.log(powerMix)
    })


console.log(powerMix.sort((a, b) => a.perc - b.perc))


    // const powerText = document.createElement('p')
    // powerText.textContent = `${powerMix[0].perc}`
    // powerData.appendChild(powerText)





