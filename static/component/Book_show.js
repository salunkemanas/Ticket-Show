export default {
    props: ['id'],
    template: `<div>
    <label>Enter the number of tickets:</label>
    <input type="number" v-model="tickets" />
    <button type="submit" @click="book(id)">Submit</button>
    </div>`,
    data: function () {
        return {
            tickets: '',
            loggedin:false,
        }
    },
    methods: {
        book: function (id) {
            const data = {
                tickets:this.tickets,
                
            }
            fetch(`/user/book/${id}`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token') },
                body: JSON.stringify(data)
            }).then(r => r.json())
            .then(data => {
                if(localStorage.getItem("access_token")){
                    this.loggedin = true
                }
                this.$router.push('/user/venue')
                console.log(data)}).catch((error) => console.error("Error:", error));
        }
    }
}