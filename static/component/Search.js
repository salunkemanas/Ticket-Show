export default{
    template:`<div>
    <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary mx-3 my-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                        Search venue by location
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel2">Search venue by location</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="my-2">
                                <label>Enter Venue Location : </label>
                                <input v-model="location" type="text">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                            </div>
                            </div>
                        </div>
                        </div>
    
    <div v-if="location">
        <h3>Location</h3>
        <div v-for="venue in venues">
            <div v-if="venue.location == location ">
                <div class="card">   
                <div class="card-body">
                    <div>Name :{{ venue.name }}</div>
                    <div>Place :{{ venue.place }}</div>
                </div>
                </div>    
            </div>
        </div>
    </div>
    
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary mx-3 my-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Search show by rating
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Search show by rating</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="my-2">
                                <label>Enter Show Rating : </label>
                                <input v-model="rating" type="number">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                            </div>
                            </div>
                        </div>
                        </div>

                    <div v-if="rating">
                        <h3>Rating</h3>
                        <div v-for="venue in venues">
                            <div v-for="show in shows">
                                <div v-if="show.vid == venue.id">
                                <div v-for="sho in show.shows">
                                    <div v-if="sho.rating == rating ">
                                        <div class="card">   
                                        <div class="card-body">
                                            <div>Venue name :{{ venue.name }}</div>
                                            <div>Name :{{ sho.name }}</div>
                                            <div>Rating :{{ sho.rating }}</div>
                                            <div>Ticket Price :{{ sho.ticket_price }}</div>
                                            <div>Timing :{{ sho.timing }}</div>
                                        </div>
                                        </div>
                                    </div>        
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>     
                    
                    
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary mx-3 my-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
                    Search show by Tags
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel3" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel3">Search show by Tags</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="my-2">
                            <label>Enter Show Tags : </label>
                            <input v-model="tags" type="text">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div v-if="tags">
                        <h3>Tags</h3>
                        <div v-for="show in shows">
                            <div v-for="sho in show.shows">
                                <div v-if="sho.tags == tags">
                                    <div class="card">   
                                    <div class="card-body">
                                        <div>Name :{{ sho.name }}</div>
                                        <div>Rating :{{ sho.rating }}</div>
                                        <div>Ticket Price :{{ sho.ticket_price }}</div>
                                        <div>Timing :{{ sho.timing }}</div>
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
            shows:[],
            location:'',
            rating:'',
            tags:''
        }
    },
    mounted: function(){
        
            fetch('/search', {
                method: "GET",
            })
                .then((response) => response.json())
                .then((data) =>{ this.venues= data.venues;
                                 this.shows=data.shows
                console.log(data)
                })
                .catch((error) => console.error("Error:", error));
            

        
    }
}