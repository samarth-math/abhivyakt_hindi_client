<template>
    <div class="tile col-sm" :class="{'no-border':isLastTile}">
        <div class="row no-gutters justify-content-between">
            <div class="col">
                <span class="type">{{artType}}</span>
                <br>
                <span class="title">
                    <router-link v-if="artTitleLink" :to=artTitleLink>
                        {{artTitle}}
                    </router-link>
                </span>
                <br>
                <span class="text">
                    <router-link v-if="artTextLink" :to=artTextLink>
                        {{artText}}
                    </router-link>
                </span>
            </div>
            <div class="col">
                    <router-link v-if="artTitleLink" :to=artTitleLink>
                        <img class="img-fluid" v-if="image" :src="'data:image/jpeg;base64,' + image"/>
                    </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import featuredImage from '../../mixins/featuredImage.js'

export default {
    name: 'ArtTile1',
    mixins:[featuredImage],
    props: {
        artType: {
            type: String,
        },
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
        isLastTile: {
            type: Boolean,
            default: false
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
.tile {
    border-bottom: 0.1px solid var(--golden);
    margin-top: 10px;
}
.tile:hover {
    background-color: var(--lightgrey)
}
.tile .type {
    color: var(--pink);
    font-family: 'Arya';
    font-weight: bold;
    font-size: 18px;
}
.tile .title {
    font-size: 17px;
    font-family: 'Sahitya';
}
.tile .text {
    font-size: 14px;
    font-family: 'Sahitya';
}
.no-border {
    border-right: 0px;
}
img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    margin-bottom: 5px;
}
@media(min-width: 576px) {
    .tile {
        border-right: 1.75px solid var(--golden);
        border-bottom: 0px;
        margin-top: 0px;
    }
    .no-border {
        border-right: 0px;
    }
}
</style>


