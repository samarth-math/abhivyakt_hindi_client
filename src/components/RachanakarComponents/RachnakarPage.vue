<template>
    <div v-if="isContentLoaded">
        <home-page-header
         :headerText="authorName" />
        <img 
        v-if="loadedContent.image"
        :src="'data:image/jpeg;base64,' + imageHex"/>
        <br/>
        {{loadedContent.biography}}
        <base-page-section section-header="अक्षरों से रचनाकार ब्राउज़ करें">
        <lettered-paginated-table
        :from-location="rachnakarContentApiEndpoint"
        :tabs="tabObject"
        :object-column-table-column-mapping="{'नाम':'title'}"/>
        </base-page-section>
    </div>
</template>

<style>
</style>

<script>
import HomePageHeader from "../BaseComponents/HomePageHeader"
import featuredObject from '../../mixins/featuredObject.js'
import featuredImage from '../../mixins/featuredImage.js'
import BasePageSection from "../BaseComponents/BasePageSection"
import LetteredPaginatedTable from "../BaseComponents/LetteredPaginatedTable"
import {ObjectHindiEnum} from "../../mixins/staticVariables.js"

export default {
    name: "RachnakarPage",
    data(){
        return {
            tabObject: {
                [ObjectHindiEnum.kavita]:"",
                [ObjectHindiEnum.kahani]:"",
                [ObjectHindiEnum.dohe]:""
            }
        }
    },
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
                this.fetchImage(this.loadedContent.image.thumbnail)
            }
            return this.image
        },
        rachnakarContentApiEndpoint: function() {
            return "rachnakar/" + this.id + "/content"
        }
    },
    mixins:[featuredObject, featuredImage],
    components: {
        HomePageHeader,
        LetteredPaginatedTable,
        BasePageSection
    },
    created() {
        this.fetchContent("rachnakar/" + this.id)
    }
}
</script>

