const getParks = () => {
    fetch("http://localhost:9099/parks")
    .then(parks => parks.json())
    .then(parsedParks => {
       parsedParks.forEach(item =>{
           parkListToDom(item)
       })
    })
    }