<template>
    <div class="col center-it">
        <img v-if="image" class="icon img-fluid" v-bind:src="'data:image/jpeg;base64,' + image"/>
        <br/>{{imgName}}
    </div>
</template>

<script>
import featuredImage from '../../mixins/featuredImage.js'

export default {
    name: 'ArtTile3',
    mixins:[featuredImage],
    props: {
        imgName: {
            type: String
        },
        imageObject: {
            type: Object
        }
    },
    created() {
        if (this.imageObject) {
            this.fetchImage(this.imageObject.thumbnail)
        }
    }
}
</script>

<style scoped>

img.icon {
    border-radius: 50%;
    max-height: 120px;
}

</style>
