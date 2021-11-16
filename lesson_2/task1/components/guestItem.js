const guestItem = {
    name: 'guestItem',
    props: {
        guest:{
            type: Object,
            required: true,
        }
    },
    data(){
        return{
            defaultData: ""
        }
    },
    computed:{
        checkboxStatement(){
            let result = false
            if(this.guest.isPresent){
                result = true
            }
            return result
        }
    },

    template: `<div class="item">
                    </label><label v-bind:class="{present: guest.isPresent}">
                    <input type="checkbox"
                    v-bind:checked="checkboxStatement"
                    @change="guest.isPresent = !guest.isPresent" 
                    >
                    <span class="name">{{ guest.name }}</span>   ({{guest.company}} {{guest.email}} {{guest.phone}} {{guest.adress}})
                    </label>
                </div>`
}