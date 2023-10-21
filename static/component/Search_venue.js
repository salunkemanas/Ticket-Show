// probably delete this

export default{
    template:`<div>
    {{ venues }}
    </div>`,
    data: function(){
        return{
            venues:[],
        }
    },
    mounted: function(){
        fetch('/search/venue').then(r => r.json()).then(data => this.venues= data.venues )
    }
}