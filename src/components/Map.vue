<template>
    <div class="h-100vh" >
        <h1>sizning joylashgan o'rningiz</h1>
        <p>{{coordinates.lat }}  uzunlik, {{coordinates.lng}} kenglik </p>
        <GmapMap
            :center="{lat:10, lng:10}"
            :zoom="7"
            map-type-id="terrain"
            style="width:650px; height: 365px"
            />
    </div>
</template>
<script>
export default {
    data() {
        return {
            coordinates:{
                lat:0 ,
                lng:0
            }
        }
    },
    created(){
            this.$getLocation(options)
                .then(coordinates => {
            console.log(coordinates);
        })
        
    }
}
</script>
<style scoped>
    
</style>