<template v-if="loadedContent">
    <div>
        <home-page-header
         :headerText="authorName" />
        <img 
        v-if="loadedContent.image"
        :src="'data:image/jpeg;base64,' + imageHex"/>
        <br/>
        {{loadedContent.biography}}


    </div>
</template>

<style>
</style>

<script>
import HomePageHeader from "../BaseComponents/HomePageHeader"
import featuredObject from '../../mixins/featuredObject.js'
import featuredImage from '../../mixins/featuredImage.js'

export default {
    name: "RachnakarPage",
    props: { 
        'id': { // Getting this from the route, not defined manually
            type: String,
            required: true
        },
    },
    computed: {
        'authorName' : function() {
            return this.loadedContent.name
        },
        'imageHex' : function() {
            if(this.loadedContent.image){
                console.log(this.loadedContent.image)
                console.log(this.loadedContent.image.thumbnail)
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
        this.fetchContent("/api/rachnakar/" + this.id)
    }
}
</script>

