const newsItem = {
    name: 'guestItem',
    props: {
        data:{
            type: Object,
            required: true,
        },
    },
    data(){
        return{
            someData: ''
        }
    },
    computed:{
    },
    template: `<div class="article">
                    <h2>{{ data.id }}. {{ data.title }}</h2>
                    <p>{{ data.body }}</p>
                </div>`
}