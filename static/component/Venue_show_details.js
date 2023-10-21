
export default {
    template: ` <div v-if="loggedin">
                    
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

                                                    <!-- Button trigger modal -->
                                                    <button type="button" class="card-link " data-bs-toggle="modal" :data-bs-target="'#staticBackdrop' + venue.id + venue.id + venue.id ">
                                                    Edit Show
                                                    </button>
                            
                                                    <!-- Modal -->
                                                    <div class="modal fade" :id="'staticBackdrop' + venue.id + venue.id + venue.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="'staticBackdropLabel' + venue.id + venue.id + venue.id" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" :id="'staticBackdropLabel' + venue.id +venue.id + venue.id">Edit Show</h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                                <div class="my-2">
                                                                <label>Enter Show Name : </label>
                                                                <input v-model="esname" type="text">
                                                                </div>
                                                                
                                                                <div class="my-2">
                                                                <label>Enter Show Rating : </label>
                                                                <input v-model="erating" type="number">
                                                                </div>
                                                    
                                                                <div class="my-2">
                                                                <label>Enter Show Timing : </label>
                                                                <input v-model="etiming" type="text">
                                                                </div>
                                                    
                                                                <div class="my-2">
                                                                <label>Enter show Ticket Price : </label>
                                                                <input v-model="eprice" type="number">
                                                                </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" @click = 'edit_show(sho.id)'  class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>


                                            <button @click="delshow(sho.id)" class="card-link ">Delete Show</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>


                                <!-- <button class="mx-1 my-1" @click = "trigger_celery_job(venue.id)"> Export venue </button> -->

                                                    <!-- Button trigger modal -->
                                                    <button type="button" class="card-link btn btn-primary mx-3 my-0" data-bs-toggle="modal" :data-bs-target="'#staticBackdrop' + venue.id + venue.id">
                                                    Create Show
                                                    </button>
                            
                                                    <!-- Modal -->
                                                    <div class="modal fade" :id="'staticBackdrop' + venue.id + venue.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="'staticBackdropLabel' + venue.id + venue.id" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" :id="'staticBackdropLabel' + venue.id +venue.id">Create Show</h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                                <div class="my-2">
                                                                <label>Enter Show Name : </label>
                                                                <input v-model="sname" type="text">
                                                                </div>
                                                                
                                                                <div class="my-2">
                                                                <label>Enter Show Rating : </label>
                                                                <input v-model="rating" type="number">
                                                                </div>
                                                    
                                                                <div class="my-2">
                                                                <label>Enter Show Timing : </label>
                                                                <input v-model="timing" type="text">
                                                                </div>
                                                    
                                                                <div class="my-2">
                                                                <label>Enter show Ticket Price : </label>
                                                                <input v-model="price" type="number">
                                                                </div>

                                                                <div class="my-2">
                                                                <label>Enter show tags : </label>
                                                                <input v-model="tags" type="text">
                                                                </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" @click = 'addshow(venue.id)'  class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div> 



                                                    <!-- Button trigger modal -->
                                                    <button type="button" class="card-link " data-bs-toggle="modal" :data-bs-target="'#staticBackdrop' + venue.id">
                                                    Edit Venue
                                                    </button>
                            
                                                    <!-- Modal -->
                                                    <div class="modal fade" :id="'staticBackdrop' + venue.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="'staticBackdropLabel' + venue.id" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" :id="'staticBackdropLabel' + venue.id">Edit Venue</h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="my-2">
                                                            <label>Enter Venue Name : </label>
                                                            <input v-model="ename" type="text">
                                                            </div>
                                                            
                                                            <div class="my-2">
                                                            <label>Enter Venue Place : </label>
                                                            <input v-model="eplace" type="text">
                                                            </div>
                            
                                                            <div class="my-2">
                                                            <label>Enter Venue Location : </label>
                                                            <input v-model="elocation" type="text">
                                                            </div>
                            
                                                            <div class="my-2">
                                                            <label>Enter Venue Capacity : </label>
                                                            <input v-model="ecapacity" type="number">
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" @click = 'edit_venue(venue.id)'  class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>      

                            <button @click="delvenue(venue.id)" class="card-link mx-1 my-1">Delete Venue</button>
                        </div>
                    </div>
                </div>
                
                
                
                        
                
                <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary mx-3 my-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Create Venue
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Create Venue</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="my-2">
                                <label>Enter Venue Name : </label>
                                <input v-model="name" type="text">
                                </div>
                                
                                <div class="my-2">
                                <label>Enter Venue Place : </label>
                                <input v-model="place" type="text">
                                </div>

                                <div class="my-2">
                                <label>Enter Venue Location : </label>
                                <input v-model="location" type="text">
                                </div>

                                <div class="my-2">
                                <label>Enter Venue Capacity : </label>
                                <input v-model="capacity" type="number">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" @click = 'addvenue'  class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                            </div>
                            </div>
                        </div>
                        </div>
                
                <button class="card-link mx-1 my-1" @click="logout">Log-out</button>
                        </div>`,
    data() {
        return {
            venues: [],
            shows: [],
            loggedin:false,
            // to create venue
            name: '',
            place: '',
            location: '',
            capacity: '',
            // to edit venue
            ename: '',
            eplace: '',
            elocation: '',
            ecapacity: '',
            // to create show
            sname: '',
            rating: '',
            timing: '',
            price: '',
            tags:'',
            // to edit show
            esname: '',
            erating: '',
            etiming: '',
            eprice: ''
        }
    },
    methods: {
        logout: function(){
            localStorage.removeItem('access_token');
            this.$router.push('/');
        },
        addvenue: function () {
            const data = {
                name: this.name,
                place: this.place,
                location: this.location,
                capacity: this.capacity
            };

            fetch('/admin/add_venue', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    if(localStorage.getItem("access_token")){
                        this.loggedin = true
                    }
                    document.title = "Venus"
                    fetch('/admin/venue',  {
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
                })
                .catch((error) => console.error("Error:", error));

        },
        delvenue: function (id) {
            fetch(`/admin/venue/delete/${id}`).then(r => r.json()).then(data => {
                console.log(data)
                if(localStorage.getItem("access_token")){
                    this.loggedin = true
                }
                document.title = "Venus"
                fetch('/admin/venue',  {
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

            })
        },
        edit_venue: function (id) {
            const data = {
                ename: this.ename,
                eplace: this.eplace,
                elocation: this.elocation,
                ecapacity: this.ecapacity
            };

            fetch(`/admin/edit_venue/${id}`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    if(localStorage.getItem("access_token")){
                        this.loggedin = true
                    }
                    document.title = "Venus"
                    fetch('/admin/venue',  {
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
                })
                .catch((error) => console.error("Error:", error));

        },

        addshow: function (id) {
            const data = {
                sname: this.sname,
                rating: this.rating,
                timing: this.timing,
                price: this.price,
                tags: this.tags
            };

            fetch(`/admin/add_show/${id}`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    if(localStorage.getItem("access_token")){
                        this.loggedin = true
                    }
                    document.title = "Venus"
                    fetch('/admin/venue',  {
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
                })
                .catch((error) => console.error("Error:", error));
        },
        delshow: function (id) {
            fetch(`/admin/show/delete/${id}`).then(r => r.json()).then(data => {
                console.log(data)
                if(localStorage.getItem("access_token")){
                    this.loggedin = true
                }
                document.title = "Venus"
                fetch('/admin/venue',  {
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

            })

        },
        edit_show: function(id){
            const data = {
                esname: this.esname,
                erating: this.erating,
                etiming: this.etiming,
                eprice: this.eprice
            };

            fetch(`/admin/edit_show/${id}`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    if(localStorage.getItem("access_token")){
                        this.loggedin = true
                    }
                    document.title = "Venus"
                    fetch('/admin/venue',  {
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
                })
                .catch((error) => console.error("Error:", error));
        },
        trigger_celery_job : function (id) {

            fetch(`/venue/export/${id}`).then(r => r.json()
            ).then(d => {
              console.log("Celery Task Details:", d);
              let interval = setInterval(() => {
                fetch(`/status/${d.Task_ID}`).then(r => r.json()
                ).then(d => {
                    if (d.Task_State === "SUCCESS") {
                      console.log("task finished")
                      clearInterval(interval);
                      window.location.href = "/download-file";
                    }
                    else {
                      console.log("task still executing")
                    }
                })
              }, 4000)
            })
          }
      
    },
    mounted: function () {
        if(localStorage.getItem("access_token")){
            this.loggedin = true
        }
        document.title = "Venus"
        fetch('/admin/venue',  {
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

}