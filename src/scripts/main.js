
const displayContainer = document.querySelector("#display-container")


const parkListToDom = (park) => {
    const newArticle = document.createElement("article")
    let parkValue = park.visited
    let displayHtml = `<h3>${park.name}</h3>
    <p>${park.state}</p>`
    newArticle.classList= parkValue
    newArticle.innerHTML = displayHtml
    displayContainer.appendChild(newArticle)
}



getParks()