<template>
    <div class="col tile">
        <div class="row justify-content-center">
            <router-link v-if="imageLink" :to=imageLink>
                <div class="col-12">
                    <img v-if="image" class="icon img-fluid" :src="'data:image/jpeg;base64,' + image"/>
                </div>
                <div class="col-12">
                    {{imgName}}
                </div>
            </router-link>
            <span v-else>
                <div class="col-12">
                    <img v-if="image" class="icon img-fluid" :src="'data:image/jpeg;base64,' + image"/>
                </div>
                <div class="col-12">
                    {{imgName}}
                </div>
            </span>
        </div>
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
.tile:hover {
    background-color: var(--lightgrey)
}

.tile {
    text-align: center;
}

img.icon {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
}

</style>
