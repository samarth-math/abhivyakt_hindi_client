<template>
    <div class="row">
        <div class="col">
            Search by : <span
            v-for="(data, letter) in alphabets"
            class="alphabets"
            :class="{'active': isActive(letter)}"
            :key="letter + 'a'"
            @click="changeTable(letter)"> {{letter}} </span>

            <paginated-table
            v-for="(data, letter) in alphabets"
            :key="letter"
            :class="{'hide' : letter!=currentLetter }"
            :columnObjectFieldMapping = columnObjectFieldMapping
            :data-array="data"
            :has-more-data="hasMore"
            :link-to="linkRowsTo"
            v-on:fetch-more="fetchMoreContent()"/>
        </div>
    </div>
</template>

<script>
import featuredObject from "../../mixins/featuredObject.js"
import PaginatedTable from "./PaginatedTable"
export default {
    name: "LetteredPaginatedTable",
    components: {
        PaginatedTable
    },
    mixins: [featuredObject],
    data() {
        return {
            currentLetter:"",
            hasMore: false,
            nextItemURL:""
        }
    },
    props: {
        fromLocation: {
            type: String,
            required: true
        },
        linkRowsTo: {
            type:String,
        },
        columnObjectFieldMapping: {
            type: Object,
            required: true
        },
        alphabets: {
            type: Object,
            default: function() {// the format of the return object is required
                return {
                    अ: [],
                    आ: [],
                    इ: [],
                    ई: [],
                    उ: [],
                    ऊ: [],
                    ऋ: [],
                    //ऌ: [],
                    ए: [],
                    ऐ: [],
                    ओ: [],
                    औ: [],
                    क: [],
                    ख: [],
                    ग: [],
                    घ: [],
                    //ङ: [],
                    च: [],
                    छ: [],
                    ज: [],
                    झ: [],
                    //ञ: [],
                    ट: [],
                    ठ: [],
                    ड: [],
                    ढ: [],
                    ण: [],
                    त: [],
                    थ: [],
                    द: [],
                    ध: [],
                    न: [],
                    //ऩ: [],
                    प: [],
                    फ: [],
                    ब: [],
                    भ: [],
                    म: [],
                    य: [],
                    र: [],
                    //ऱ: [],
                    ल: [],
                    //ळ: [],
                    //ऴ: [],
                    व: [],
                    श: [],
                    ष: [],
                    स: [],
                    ह: [],
                }
            }
        }
    },
    created() {
        this.changeTable(Object.keys(this.alphabets)[0])//First key in alphabets
    },
    methods: {
        changeTable(letter) {
            this.fetchContent(this.fromLocation + "/" + letter)
            this.currentLetter = letter
        },
        handleFetchedContent: function(responseData) {//Overriding original function
            this.alphabets[this.currentLetter] = this.alphabets[this.currentLetter].concat(responseData.content)
            this.hasMore = responseData.hasMore,
            this.nextItemURL = responseData.nextItem
        },
        fetchMoreContent: function() {
            this.fetchContent(this.nextItemURL)
        },
        isActive(letter) {
            return this.currentLetter == letter
        }
    }
}
</script>

<style scoped>
.hide {
    display: none;
}

.alphabets {
    padding: 3px;
    font-weight: bold;
}

.alphabets:hover {
    color: #ffffff;
    background-color: var(--lightpink);
    cursor: pointer;
}

.alphabets.active {
    color: #ffffff;
    background-color: var(--pink);
}
</style>
