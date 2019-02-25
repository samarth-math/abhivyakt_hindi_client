<template>
  <div class="row justify-content-center space-top-lg">
    <div class="col space-right-lg">
        <art-card
        title="Aaj ka Muhavara"
        from-location="featured/muhavare"
        object-field1="muhavara"
        object-field2="meaning"/>
    </div>

    <div class="col space-left-lg">
              <art-card
        title="Aaj ka Doha"
        from-location="featured/dohe"
        :is-light-box="false"
        object-field1="doha"
        object-field2=""/>
    </div>
  </div>
</template>

<script>
import ArtCard from "./ArtCard"

export default {
    name:"BaseLightBox",
    components: {
        ArtCard
    },
}
</script>

<style scoped>

</style>

