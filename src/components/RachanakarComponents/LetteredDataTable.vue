<template>
    <div class="row">
        <div class="col">
            Search by : <span
            v-for="(data, letter) in albhabets"
            class="alphabets"
            :class="{'active': isActive(letter)}"
            :key="letter + 'a'"
            @click="changeTable(letter)">{{letter}}</span>

            <paginated-table
            v-for="(data, letter) in albhabets"
            :key="letter"
            :class="{'hide' : letter!=currentLetter }"
            :columns="['type', 'title']"
            :objectFields="['type', 'title']"
            :data-array="data"/>
        </div>
    </div>
</template>

<script>
import featuredObject from "../../mixins/featuredObjectWithPromise.js"
import PaginatedTable from "./PaginatedTable"
export default {
    name: "LetteredDataTable",
    components: {
        PaginatedTable
    },
    mixins: [featuredObject],
    data() {
        return {
            currentLetter : "kavita",
            albhabets: {"kavita":[], "kahani":[], "dohe":[]},
        }
    },
    created() {
        this.changeTable("kavita")
    },
    methods: {
        changeTable(letter) {
            var prom = this.fetchContent("/api/featured/"+letter)
            this.currentLetter = letter
            prom.then(response => {
                this.albhabets[letter] = response.data.content;
            });
        },
        isActive(letter) {
            return this.currentLetter==letter
        }
    }
}
</script>

<style scoped>
.hide {
    display:none;
}

.alphabets{
    padding:5px;
    font-weight: bold;
}

.alphabets:hover {
    color: #ffffff;
    background-color: var(--lightpink);
    cursor: pointer;
}

.alphabets.active {
    color:#ffffff;
    background-color: var(--pink);
}

</style>
