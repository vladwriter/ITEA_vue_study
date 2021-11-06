const ua = ['Kyiv', 'Kharkiv', 'Odesa']
const pl = ['Warsaw', 'Gdansk', 'Krakow', 'Lublin']
const de = ['Berlin', 'Cologne']

const app = new Vue({
    el: '#app',
    data: {
      ua, pl, de,
      activeCountry: [],
      bg: ''
    }
  })