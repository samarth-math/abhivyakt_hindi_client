<template>
    <div class="tile col-sm" :class="{'no-border':isLastTile}">
        <div class="row">
            <div class="col-12">
                    <router-link v-if="artTitleLink" :to=artTitleLink>
                        <img class=".img-fluid" v-if="image" :src="'data:image/jpeg;base64,' + image"/>
                    </router-link>
            </div>
            <div class="col-12 title align-self-start">
                <router-link v-if="artTitleLink" :to=artTitleLink>
                    {{artTitle}}
                </router-link>
            </div>
            <br/>
            <div class="col-12 text align-self-end">
                <router-link v-if="artTextLink" :to=artTextLink>
                    {{artText}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import featuredImage from '../../mixins/featuredImage.js'
export default {
    name: 'ArtTile4',
    mixins:[featuredImage],
    props: {
        artTitle: {
            type: String,
            required: true
        },
        artTitleLink: {
            type: String
        },
        artText: {
            type: String,
        },
        artTextLink: {
            type: String
        },
        imageObject: {
            type: Object
        },
        isLastTile: {
            type: Boolean,
            default: false
        },
    },
    created() {
        if (this.imageObject) {
            this.fetchImage(this.imageObject.thumbnail)
        }
    }
}
</script>

<style scoped>
.tile {
    border-right: 1.75px solid var(--golden);
}
.tile:hover {
    background-color: var(--lightgrey)
}
.tile .title {
    padding-top: 5px;
    font-size: 1rem;
    font-family: 'Arya';
}
.tile .text {
    font-family: 'Sahitya';
    font-size: 0.8rem;
}
.no-border {
    border: 0px;
}
img {
    width: 100%;
    height: 180px;
    object-fit: cover
}
</style>

