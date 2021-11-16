const preloader = {
    name: 'preloader',
    props: {
        countdown:{
            type: Number,
            default: null
        },
    },
    data(){
        return{
            someData: ''
        }
    },
    computed:{
    },
    template: `<div class="preloader">
                    <img src="https://acegif.com/wp-content/uploads/loading-78.gif">
                    <div class="countdown">Content will be downloaded after {{countdown}} secounds</div>
                </div>`
}