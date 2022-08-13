let url = 'http://localhost:8080/nasa/apod'

const xhr = new XMLHttpRequest()

xhr.open("GET", url)

xhr.send()

xhr.onload = () => {
    jsonData = JSON.parse(xhr.response)
    document.getElementById('date').innerHTML = jsonData.date
    document.getElementById('copyright').innerHTML = jsonData.copyright
    document.getElementById('explanation').innerHTML = json.Data.explanation

    addImage = () => {
        var img = new Image()
        img.src = jsonData.url
        img_home.appendChild(img)
    }
    addImage()
    
}