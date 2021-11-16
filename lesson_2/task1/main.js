
for (let i = 0; i < guestsList.length; i++) {
    guestsList[i]["isPresent"] = false
}
console.log(guestsList)

const app = new Vue({
    el: '#app',
    components: {
        'guest': guestItem,
    },
    data: {
        search: "",
        guestsList,
        presentGuests: 0,
        absentGuests: guestsList.length,
        activeCategory: '',
        resultsWithLimit: [],
        limit: 10
    },
    methods: {
        showItems(value) {
            if (value === 'present') {
                this.limit = 10
                this.guestsList = guestsList.filter(guest => guest.isPresent)
            } else if (value === 'absent') {
                this.guestsList = guestsList.filter(guest => !guest.isPresent)
                this.limit = 10
            } else if (value === 'else') {
                this.limit += 10
            } else {
                this.guestsList = guestsList
                this.limit = guestsList.length
            }
        }
    },
    computed: {
        searchResults() {
            let obj = this.guestsList;
            let newArray = [];
            const search = this.search.toLowerCase();
                for (key in obj) {
                el = obj[key]
                    if (el.name.toLowerCase().indexOf(search) != -1) {
                        newArray.push(el)
                        this.activeCategory = 'name'
                    } else if(el.company.toLowerCase().indexOf(search) != -1){
                        newArray.push(el)
                        this.activeCategory = 'company'
                    } else if(el.email.toLowerCase().indexOf(search) != -1){
                        newArray.push(el)
                        this.activeCategory = 'email'
                    } else if(el.phone.toLowerCase().indexOf(search) != -1){
                        newArray.push(el)
                        this.activeCategory = 'phone'
                    } else if(el.address.toLowerCase().indexOf(search) != -1){
                        newArray.push(el)
                        this.activeCategory = 'address'
                    }
                    this.resultsWithLimit = []
                    for(let i=0; i<this.limit; i++){
                        if(newArray[i]){
                           this.resultsWithLimit[i] = newArray[i]  
                        }
                    }
                }
            return newArray;
          },
        countGuests(){
            this.presentGuests = guestsList.filter(guest => guest.isPresent).length
            this.absentGuests = guestsList.filter(guest => !guest.isPresent).length
        }
    }
})