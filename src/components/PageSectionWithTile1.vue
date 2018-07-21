<template>
    <base-page-section
        :section-header=sectionHeader
        :with-section-end=withSectionEnd
        >
            <div v-for="(i, rowIndex) in numberOfRows" :key="rowIndex" class="row" :class="{'space-bottom-md': isNotLastRow(rowIndex)}">
                <base-tile1
                v-for="(art, tileIndex) in artList.slice(rowIndex*rowSize, (rowIndex+1)*rowSize)"
                :key = tileIndex
                artType="kahani"
                :artTitle="art.title"
                :artText="art.authorName"
                :is-last-tile="isLastTile(tileIndex)"/>

            </div>
    </base-page-section>
</template>

<script>
import BaseTile1 from './BaseTile1'
import BasePageSection from './BasePageSection'
import featuredObject from '../mixins/featuredObject.js'
export default {
    name:'PageSection',
    components: {
        BaseTile1,
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
        artList: {
            type:Array,
        },
        rowSize: {
            type: Number,
            default:3
        },
        numRows: {
            type: Number,
            default: -1,
        },
        fromLocation: {
            type: String
        }
    },
    computed: {
        numberOfRows: function() {
            if(this.numRows>0) {
                return Math.min(this.numRows, Math.ceil(this.artList.length*1.0/this.rowSize))
            }
            return Math.ceil(this.artList.length*1.0/this.rowSize)
        }
    },
    methods: {
        isNotLastRow: function(value) {
            return value!=this.numberOfRows-1
        },
        isLastTile: function(value) {
            return value==this.rowSize-1
        }
    }
}
</script>

