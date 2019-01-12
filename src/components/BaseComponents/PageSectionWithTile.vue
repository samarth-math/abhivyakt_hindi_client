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
            <div class="row justify-content-center"><slot></slot>
            </div>
    </base-page-section>
</template>

<script>
import BasePageSection from './BasePageSection'
import featuredObject from '../../mixins/featuredObject.js'

export default {
    name:'PageSection',
    components: {
        BasePageSection
    },
    data() {
        return {
        artTypeToEnglish : {
                "रचनाकार" : "rachnakar",
                "कविता" : "kavita",
                "कहानी" : "kahani",
            }
        }
    },
    mixins:[featuredObject],
    props: {
        sectionHeader: {
            type: String,
            required:true
        },
        withSectionEnd: {// double hr at the bottom
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
                return [1,2,3].indexOf(value) !== -1
            }
        },
        overriddenArtTypeValue: {
            //This field is only valid for Tile 1
            type:String,
            default: "default",
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
    },
    methods: {
        isNotLastRow: function(value) {
            return value!=this.numberOfRows-1
        },
        isLastTile: function(value) {
            return value==this.sizeOfRow-1
        },
        $_pageSection_artTypeCalculation: function(art, inHindi= true){// convention for naming private funcs
        // This function returns either an overriden art type value, or simply the default art type for the object
        // It can also convert the value to english, which is useful for figuring out paths based on the art type
        // which is used for linking the tiles to pages
            if (this.overriddenArtTypeValue!="default" && this.tileType==1){ // if overridden, just return that
                return this.overriddenArtTypeValue
            }
            if (inHindi) {
                return art.type
            } else {
                return this.artTypeToEnglish[art.type]
            }
        },
        tileProperties: function(art, tileIndex) {// mapping of request object to tile properties
            switch(this.tileType) {
                case 1:
                    var artType = this.$_pageSection_artTypeCalculation(art)
                    return {
                        artTitle: art.title,
                        artText: art.authorName,
                        artType: artType,
                        artTitleLink: this.$_pageSection_artTypeCalculation(art, false) + '/' + art._id.$oid,
                        artTextLink: 'rachnakar' + '/' + art.authorId.$oid,
                        isLastTile: this.isLastTile(tileIndex)
                    }
                    break;
                case 2:
                    return {
                        artTitle: art.title,
                        artText: art.authorName,
                        artTitleLink: this.$_pageSection_artTypeCalculation(art, false) + '/' + art._id.$oid,
                        artTextLink: 'rachnakar' + '/' + art.authorId.$oid,
                        isLastTile: this.isLastTile(tileIndex)
                    }
                    break;
                case 3:
                    return {
                        imgName: art.name,
                        imageObject: art.image,
                        imageLink: this.$_pageSection_artTypeCalculation(art, false) + '/' + art._id.$oid
                    }
            }
            
        }
    }
}
</script>

<style scoped>

</style>
