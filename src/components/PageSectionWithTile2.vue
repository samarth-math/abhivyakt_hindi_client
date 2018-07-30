<template>
    <base-page-section
        :section-header=sectionHeader
        :with-section-end=withSectionEnd
        >
            <div v-for="(i, rowIndex) in numberOfRows" :key="rowIndex" class="row" :class="{'space-bottom-md': isNotLastRow(rowIndex)}">
                <art-tile2
                v-for="(art, tileIndex) in loadedContent.slice(rowIndex*rowSize, (rowIndex+1)*rowSize)"
                :key = tileIndex
                :artTitle="art.title"
                :artText="art.authorName"
                :is-last-tile="isLastTile(tileIndex)"/>
            </div>
            <div class="row justify-content-center">more poems here
            </div>
    </base-page-section>
</template>

<script>
import ArtTile2 from './ArtTile2'
import BasePageSection from './BasePageSection'
import featuredObject from '../mixins/featuredObject.js'

export default {
    name:'PageSection',
    components: {
        ArtTile2,
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
        fromLocation: {
            type: String
        }
    },
    computed: {
        numberOfRows: function() {
            return Math.min(this.numRows, Math.ceil(this.loadedContent.length*1.0/this.rowSize))
        },
        sizeOfRow: function() {
            return Math.min(this.rowSize, Math.ceil(this.loadedContent.length))
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
        }
    }
}
</script>

<style scoped>

</style>
