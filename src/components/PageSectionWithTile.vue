<template>
    <base-page-section
        :section-header=sectionHeader
        :with-section-end=withSectionEnd
        >
            <div v-for="(i, rowIndex) in numberOfRows" :key="rowIndex" class="row" :class="{'space-bottom-md': isNotLastRow(rowIndex)}">
                <component
                v-for="(art, tileIndex) in loadedContent.slice(rowIndex*rowSize, (rowIndex+1)*rowSize)"
                :key="tileIndex"
                :is="tileComponent"
                v-bind="tileProperties(art, tileIndex)"/>
            </div>
            <div class="row justify-content-center">more poems here
            </div>
    </base-page-section>
</template>

<script>
import BasePageSection from './BasePageSection'
import featuredObject from '../mixins/featuredObject.js'

export default {
    name:'PageSection',
    data: function() {
        return {
            tileDef: {
                1:{
                    
                }
            }

        }

    },
    components: {
        BasePageSection
    },
    mixins:[featuredObject],
    props: {
        sectionHeader: {
            type: String,
            required:true
        },
        withSectionEnd: {
            type: Boolean,
            default: false
        },
        rowSize: {
            type: Number,
            default:3
        },
        numRows: {
            type: Number,
            default: Number.MAX_SAFE_INTEGER,
        },
        tileType: {
            type:Number,
            default: 2,
            validator: function(value) {
                return [1,2].indexOf(value) !== -1
            }
        },
        fromLocation: {
            type: String
        }
    },
    computed: {
        numberOfRows: function() {
            return Math.min(this.numRows, Math.ceil(this.loadedContent.length*1.0/this.rowSize))
        },
        sizeOfRow() {
            return Math.min(this.rowSize, Math.ceil(this.loadedContent.length))
        },
        tileComponent() {
            return () => import(`./ArtTile`+this.tileType)
        }
    },
    created() {
        this.fetchContent(this.fromLocation)
        console.log(this.loadedContent.length)
    },
    methods: {
        isNotLastRow: function(value) {
            return value!=this.numberOfRows-1
        },
        isLastTile: function(value) {
            return value==this.sizeOfRow-1
        },
        tileProperties: function(art, tileIndex) {
            switch(this.tileType) {
                case 1:
                    return {
                        artTitle: art.title,
                        artText: art.authorName,
                        artType: art.type,
                        isLastTile: this.isLastTile(tileIndex)
                    }
                    break;
                case 2:
                    return {
                        artTitle: art.title,
                        artText: art.authorName,
                        isLastTile: this.isLastTile(tileIndex)
                    }
            }
            
        }
    }
}
</script>

<style scoped>

</style>
