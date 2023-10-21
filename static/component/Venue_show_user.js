export default{
    template:`<div v-if="loggedin">
    <div class="row">
    <div class="card mx-4 my-4 col-10" style="width: 18rem;" v-for="venue in venues">
        <div class="card-body">
            <h5 class="card-title">{{ venue.name }}</h5>                           
                <div v-for='show in shows'>
                <div v-if='show.vid == venue.id'>
                    <div class="row">
                    <div class="card mx-1 my-1 col-2" style="width: 18rem;" v-for="sho in show.shows">
                        <div class="card-body">
                            <h5 class="card-title">{{ sho.name }}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Timing :{{ sho.timing }}</h6>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Rating :{{ sho.rating }}stars</h6>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Price :{{ sho.ticket_price }}Rs</h6>
                            <button type="button" class="card-link mx-1 my-1" @click="bookshow(sho.id)">Book Show</button>
                            


                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
</div>
<button type="button" class="card-link mx-1 my-1" @click="bookings">Your Bookings</button>
<button type="button" class="card-link mx-1 my-1" @click="logout">Logout</button>
</div>`,
data: function(){
    return{
        venues:[],
        shows:[],
        loggedin:false,
    }
},
mounted: function () {
    if(localStorage.getItem("access_token")){
        this.loggedin = true
    }
    
    fetch('/user/venue',  {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token')}})
        .then(response => {
            if (response.status != 200){
                alert("please login first");
                this.loggedin = false;
            }
            return response.json();
            
        })
        .then(data => {
            this.venues = data.venues
            this.shows = data.shows
        })
        .catch(error => { "Some error occured", error })


},
methods:{
    bookshow: function(id){
        this.$router.push(`/user/book/${id}`)
            
    },
    bookings: function(){
        this.$router.push('/user/bookings')
    },
    logout: function(){
        localStorage.removeItem('access_token');
        this.$router.push('/');
    }
}


}