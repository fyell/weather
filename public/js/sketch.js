var weatherJson

function setup() {
    createCanvas(windowWidth, windowHeight)
    
    fetch('http://api.openweathermap.org/data/2.5/weather?units=imperial&q=new%20york&appid=9ec36d4b5ead7355c23feb5e87f6432d')
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            weatherJson = json
            console.log(weatherJson)
        })
        .catch(function(error) {
            console.log(error)
        })
}

function draw() {
    background('black')
}