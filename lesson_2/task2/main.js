const jsonUrl = 'https://jsonplaceholder.typicode.com/posts'

const getJsonDataFromUrl = (url) =>{
    let Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", url ,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

const data = JSON.parse(getJsonDataFromUrl(jsonUrl))

const app = new Vue({
    el: '#app',
    components:{
        'newsItem': newsItem,
        preloader
    },
    data:{
        'news': '',
        'isActivePreloader': true,
        'showContent': false,
        'countdown': 3
    },
    created(){
        this.news = data
    },
    mounted(){
        setInterval(()=>{
            this.countdown--
            }, 1000)
        setTimeout(()=>{
            this.isActivePreloader = false
            this.showContent = true  
        }, 3000)
    }
})