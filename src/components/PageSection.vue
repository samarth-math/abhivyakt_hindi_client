<template>
    <div class="row">
        <div class="col-12 section-heading">
            {{sectionHeader}}
        </div>
        <div class="col-12 ">
            <div v-for="(i, rowIndex) in numberOfRows" :key="rowIndex" class="row space-bottom-md">
                <page-section-tile-one
                v-for="(art, tileIndex) in ListOfArts.slice(rowIndex*rowSize, (rowIndex+1)*rowSize)"
                :key = tileIndex
                artType="kahani" 
                :artTitle="art.title" 
                :artText="art.authorName"/>

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
            required: true
        },
        totalListElementsDisplayed: {
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
            if (this.totalListElementsDisplayed!=-1) {
                return Math.ceil(Math.max(this.totalListElementsDisplayed*1.0/this.rowSize, 1))
                // Basically for 1,2,3 -> 1 row
                // for 4-6 -> 2 rows and so on
            }
            else {
                return Math.ceil(Math.max(this.artList.length*1.0/this.rowSize, 1))
            }
        }
    },
}
</script>

