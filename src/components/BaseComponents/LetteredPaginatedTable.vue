<template>
    <div class="row">
        <div class="col">
            Search by : <span
            v-for="(data, letter) in alphabets"
            class="alphabets"
            :class="{'active': isActive(letter)}"
            :key="letter + 'a'"
            @click="changeTable(letter)">{{letter}}</span>

            <paginated-table
            v-for="(data, letter) in alphabets"
            :key="letter"
            :class="{'hide' : letter!=currentLetter }"
            :columns="['name', 'birth', 'death', 'gender']"
            :objectFields="['name', 'birth', 'death', 'gender']"
            :data-array="data"
            linkTo="rachnakar"/>
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
            currentLetter:""
        }
    },
    props: {
        fromLocation: {
            type: String,
            required: true
        },
        alphabets: {
            type: Object,
            default: function() {// the format of the return object is required
                return {अ:[], छ: [], ग: [], द :[] }
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
            console.log("calling lettered paginated table handleFetchedContent")
            this.alphabets[this.currentLetter] = responseData.content
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
    padding: 5px;
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
