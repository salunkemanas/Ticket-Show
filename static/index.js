import router from "./router.js"

new Vue({
    el:'#app',
    delimiter:['${','}'],
    template:`<div>
    <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark"">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Ticket Show</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#/user/bookings">Bookings</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#/user/venue">Shows</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
    <router-view></router-view>
    </div>`,
    router,
    
})