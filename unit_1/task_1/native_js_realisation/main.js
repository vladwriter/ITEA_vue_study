const ua = ['Kyiv', 'Kharkiv', 'Odesa']
const pl = ['Warsaw', 'Gdansk', 'Krakow', 'Lublin']
const de = ['Berlin', 'Cologne']

const cities = document.getElementById('cities')

const getList = (arr) => {
    cities.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        let newElem = document.createElement("li")
        newElem.innerText = arr[i]
        cities.appendChild(newElem)
    }
}

const addClass = (clsName) => {
    cities.className = clsName
}