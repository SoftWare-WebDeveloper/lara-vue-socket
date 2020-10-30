<template>
    <div class="container">
        <div class="row justify-content-center vh-100">
            <div class="col-md-12">
                <line-chart :chart-data="data"
                            :height="100"
                            :option="{ responsive:true, maintainAspectRation: true }"
                />
            </div>
        </div>
        <button @click="test">HUI</button>
    </div>
</template>

<script>
    export default {
        components:{
          LineChart: require("./charts/LineChart").default,
          BarChart: require("./charts/BarChart").default
        },
        data: () => ({
           data:[]
        }),
        mounted() {
            let socket = io('http://localhost:3000');

            socket.on('news-action:App\\Events\\NewEvent',function(data){
                this.data = data;
            }.bind(this));
            this.fillData();
        },
        methods:{
           fillData(){
               axios.get("/get-data")
               .then((response) => {
                    this.data = response.data
               })
               .catch((error) => {
                   console.log(error)
               })
           },
            test(){
                axios.get("/event")
                    .then((response) => {
                        console.log("ok")
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }
</script>
