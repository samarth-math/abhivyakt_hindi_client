<template>
    <div v-if="isContentLoaded">
        <home-page-header
         :headerText="title"
         :description="author" />
        <div class="center-text">
            <img 
            class="space-top-lg"
            v-if="loadedContent.image"
            :src="'data:image/jpeg;base64,' + imageHex"/>
        </div>
        <div class="content">
            {{content}}
        </div>
    </div>
</template>

<style>
</style>

<script>
import HomePageHeader from "../BaseComponents/HomePageHeader"
import featuredObject from '../../mixins/featuredObject.js'
import featuredImage from '../../mixins/featuredImage.js'

export default {
    name: "KahaniPage",
    props: { 
        'id': { // Getting this from the route, not defined manually
            type: String,
            required: true
        },
    },
    computed: {
        'author' : function() {
            return this.loadedContent.authorName
        },
        'title' : function() {
            return this.loadedContent.title
        },
        'content': function() {
            return this.loadedContent.kahaniText
        },
        'imageHex' : function() {
            if(this.loadedContent.image){
                this.fetchImage(this.loadedContent.image.thumbnail)
            }
            return this.image
        }
    },
    mixins:[featuredObject, featuredImage],
    components: {
        HomePageHeader
    },
    created() {
        this.fetchContent("kahani/" + this.id)
    }
}
</script>

<style scoped>
img {
    max-width: 400px;
    max-height: 400px;
    object-fit: cover;
}
</style>