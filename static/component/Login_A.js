export default{
    template:`<div>
    <h2 class="mx-2 my-2">Admin login</h2>
   <form @submit.prevent="admin_login">
     <label class="mx-2 my-2">
       Email:
       <input type="email" v-model="username" required>
     </label>
     <label class="mx-2 my-2">
       Password:
       <input type="password" v-model="password" required>
     </label>
     <button type="submit">Login</button>
   </form>
 </div>`,
 data(){
  return{
    username:"",
    password:"",
  }
 },
   methods: {
        admin_login() {
            fetch('/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('access_token', data.access_token);
                this.$router.push("/admin/venue")
                
            })
						// don't forget to take care of bad credentials
            // ...
        }
    }
}
