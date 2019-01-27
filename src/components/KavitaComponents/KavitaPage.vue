<template>
    <div v-if="isContentLoaded">
        <home-page-header
         :headerText="title"
         :description="author" />
        <img 
        v-if="loadedContent.image"
        :src="'data:image/jpeg;base64,' + imageHex"/>
        <br/>
        <div class="pre-formatted">
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
    name: "KavitaPage",
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
            return this.loadedContent.content
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
        this.fetchContent("kavita/" + this.id)
    }
}
</script>
