<template>
        <div class="row">
            <box-text-on-image
            img-src="RabindranathTagore.png"
            img-text="गीतांजलि"
            img-art-type="कविता"
            img-artist="रबीन्द्रनाथ टैगोर"/>
            <box-time-based class="order-sm-first"/>
        </div>
</template>

<script>
import BoxTimeBased from "./BoxTimeBased"
import BoxTextOnImage from "./BoxTextOnImage"
export default {
    name: "PrimeTimedSection",
    components: {
        BoxTimeBased,
        BoxTextOnImage
    }

}
</script>



<style scoped>

</style>
