const displayContainer = document.querySelector("#display-container")
let weatherDisplayHTML = ""
let displayHTML = ""

const getWeather = (weather) => {
    const currently = weather.currently.summary
    const hourly = weather.hourly.summary
    const daily = weather.daily.summary
    weatherDisplayHTML = `
   <p>Weather:</p>
   <ul>
     <li>Currently: ${currently}</li>
     <li>Today: ${hourly}</li>
     <li>Week: ${daily}</li>
   </ul>
`
}

const parkListToDom = (park) => {
    const newArticle = document.createElement("article")
    let parkValue = park.visited
    let displayHtml = `<h3>${park.name}</h3>
    <p>${park.state}</p>
    <p>Weather:</p>
      <ul>
        <li>Currently: Summary from currently in API Data</li>
        <li>Today: Summary from hourly in API Data</li>
        <li>Week: Summary from daily in API Data</li>
      </ul>`

    newArticle.classList= parkValue
    newArticle.innerHTML = displayHtml
    displayContainer.appendChild(newArticle)
    // getDarkSky(park.latitude, park.longitude)
    //         .then(() => {
    //             newArticle.innerHTML = displayHTML + weatherDisplayHTML;
    //         })
}
