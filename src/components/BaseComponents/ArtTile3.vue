<template>
    <div class="col center-it">
        <router-link v-if="imageLink" :to=imageLink>
        <img v-if="image" class="icon img-fluid" :src="'data:image/jpeg;base64,' + image"/>
        <br/>{{imgName}}
        </router-link>
        <span v-else>
        <img v-if="image" class="icon img-fluid" :src="'data:image/jpeg;base64,' + image"/>
        <br/>{{imgName}}
        </span>
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
        },
        imageLink: {
            type: String
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
