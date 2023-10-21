export default{
    template:`<div v-if="loggedin">
                <div v-if="bookings.length == 0">No tickets booked yet</div>
                <div v-else>
                    <h1 class="mx-2">Your booked shows</h1>
                    <div v-for="venue in venues">
                    <div v-for="booking in bookings">
                    <div v-if="venue.id == booking.venue_id">
                    <div class="card">   
                        <div class="card-body">
                            <div>Venue name:{{ venue.name }}</div>
                            <div>Show name:{{ booking.sname }}</div>
                            <div>Timing:{{ booking.timing }}</div>
                            </div>
                        </div>
                    </div>            
                    </div>
                    </div>
                </div>
    </div>`,
    data: function(){
        return{
            venues:[],
            bookings:[],
            associations:[],
            loggedin:false
        }
    },
    mounted: function(){
        if(localStorage.getItem("access_token")){
            this.loggedin = true
        }
        fetch('/user/bookings', {
            method:"GET",
            headers:{ 'Authorization': 'Bearer ' + localStorage.getItem('access_token')},
        }).then(response => {
            if (response.status != 200){
                alert("please login first");
                this.loggedin = false;
            }
            return response.json()})
            .then(data => {
                console.log(data)
            this.venues = data.venues
            this.bookings = data.bookings
            this.associations = data.associations
        
        })
        .catch(error => { "Some error occured", error })
    }
}