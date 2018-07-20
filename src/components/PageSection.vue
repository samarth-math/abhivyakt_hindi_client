<template>
    <div class="row">
        <div class="col-12 section-heading">
            {{sectionHeader}}
        </div>
        <div class="col-12 ">
            <div class="row space-bottom-md">
                <page-section-tile-one
                v-for="(art, index) in ListOfArts"
                :key="index" 
                :artType="kahani" 
                :artTitle="art.title" 
                :artText="art.content">
                </page-section-tile-one>

            </div>
            <div class="row ">
                <div class="tile col">
                    <span class="type">कहानी</span>
                    <br>
                    <span class="title">Tobha Tek Singh</span>
                    <br>
                    <span class="text">Saadat Hasan Manto</span>
                </div>
                <div class="tile col">
                    <span class="type">कहानी</span>
                    <br>
                    <span class="title">Tobha Tek Singh</span>
                    <br>
                    <span class="text">Saadat Hasan Manto</span>
                </div>
                <div class="tile col no-border">
                    <span class="type">कहानी</span>
                    <br>
                    <span class="title">Tobha Tek Singh</span>
                    <br>
                    <span class="text">Saadat Hasan Manto</span>
                </div>
            </div>
        </div>
        <div v-if="withSectionEnd" class="col-12 section-end">
            <!--Leave this empty, it's the section end-->
        </div>
    </div>
</template>

<script>
import PageSectionTileOne from './PageSectionTileOne.vue'
export default {
    name:'PageSection',
    components: {
        PageSectionTileOne
    },
    props: {
        sectionHeader: {
            type: String,
            required:true
        },
        withSectionEnd: {
            type: Boolean,
            default: false
        },
        artList: {
            type:Array,
            //required: true
        },
        listLengthDisplayed: {
            type: Number,
            default: -1
        },
        rowSize: {
            type: Number,
            default:3
        }
    },
    data(){
        return {
            ListOfArts: this.artList
        }
    },
    computed: {
        numberOfRows: function() {
            if (this.listLengthDisplayed!=-1 && this.listLengthDisplayed>this.rowSize) {
                return this.listLength/this.rowSize
            }
        }
    },
}
</script>

<style scoped>
</style>


