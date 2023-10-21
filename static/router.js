import Home from "./component/Home.js"
import Login_U from "./component/Login_U.js"
import Login_A from "./component/Login_A.js"
import Signup_U from "./component/Signup_U.js"
import Signup_A from "./component/Signup_A.js"
import Venue_show_details from "./component/Venue_show_details.js"
import Venue_show_user from "./component/Venue_show_user.js"
import Search from "./component/Search.js"
import Search_venue from "./component/Search_venue.js"
import Book_show from "./component/Book_show.js"
import User_bookings from "./component/User_bookings.js"
const routes=[
    {path:'/', component:Home},
    {path:'/user/login', component:Login_U},
    {path:'/user/new',component:Signup_U},
    {path:'/admin/new',component:Signup_A},
    {path:'/admin/login', component:Login_A},
    {path:'/admin/venue', component:Venue_show_details},
    {path:'/user/venue', component:Venue_show_user},
    {path:'/search', component:Search},
    {path:'/search/venue', component:Search_venue},
    {path:'/user/book/:id', component:Book_show, props:true},
    {path:'/user/bookings', component:User_bookings},
    
    
]

const router = new VueRouter({
    routes,
})

export default router