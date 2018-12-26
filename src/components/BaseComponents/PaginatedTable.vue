<template>
<div class="row">
    <div class="col">
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th v-for="(column, index) in columns" :key="index">{{column}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(art, rowIndex) in this.currentPageDataSlice" 
            :key="rowIndex"
            :class="{'bottom-border': isNotLastRow(rowIndex)}">
                <td>{{rowIndex+1}}</td>
<<<<<<< HEAD
                <td v-for="field in objectFields" :key="field"><router-link :to="linkTo + '/' + art._id.$oid">{{$_DataTable_generateObjectFields(art, field)}}</router-link></td>
=======
                <td v-for="field in objectFields" :key="field"><router-link :to="pointRecordToPath + '/' + art._id.$oid">{{$_DataTable_generateObjectFields(art, field)}}</router-link></td>
>>>>>>> master
            </tr>
            <tr v-for="i in this.currentPageRemainingEmptyRows" 
            :key="i + 'empty'">
                <td>-</td>
                <td v-for="field in objectFields" :key="field">-</td>
            </tr>
        </tbody>
    </table> 
  <ul class="pagination justify-content-center pagination-sm">
    <li class="page-item page-link"
    :class="{'hidden': this.currentPage==1}" 
    @click="prevPage()">
      &lt;
    </li>
    <li v-for="i in this.totalPages"
    :key="i"
    :class="{'active': isActive(i)}"
    @click="goToPage(i)"
    class="page-item page-link">
      {{i}}
    </li>
    <li class="page-item page-link"
    :class="{'hidden': this.currentPage==this.totalPages}"
    @click="nextPage()">
      &gt;
    </li>
  </ul>
  </div>
</div>

</template>

<script>
import featuredObject from "../../mixins/featuredObject.js"
export default {
    name: "PaginatedTable",
    data() {
        return {
            currentPage: 1
        }
    },
    mixins:[featuredObject],
    props:{
        columns: {
            type: Array,
            required: true
        },
        objectFields: {
            type: Array,
            required: true
        },
        pageSize: {
            type: Number,
            default: 5
        },
        dataArray: {
            type: Array,
            required: false
        },
        linkTo: {
            type: String
        }
    },
    computed: {
        totalPages: function(){
            return Math.ceil(this.dataArray.length*1.0/this.pageSize)
        },
        currentPageDataSlice: function() {
            return this.dataArray.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
        },
        currentPageRemainingEmptyRows() {
            return Math.max(0, this.pageSize - this.currentPageDataSlice.length)
        }
    },
    methods: {
        goToPage: function(page){
            this.currentPage = page;
        },
        isNotLastRow: function(value) {
            return value!=this.pageSize-1
        },
        nextPage: function() {
            if (this.currentPage+1 <= this.totalPages){
                this.currentPage++
            }
        },
        prevPage: function() {
            if (this.currentPage-1 > 0){
                this.currentPage--
            }
        },
        isActive(i) {
            return this.currentPage==i
        },
        $_DataTable_generateObjectFields(art, field) {
            return art[field]
        }
    },

}
</script>

<style scoped>
.pagination {
    margin-top: 0px;
}

.page-link:hover {
    color: var(--grey);
    background-color: var(--lightpink);
}

.page-link {
    color:inherit;
}

.page-link.active {
    color:#ffffff;
    background-color: var(--pink);
}

.table {
    margin-bottom: 2px;
}

.table th {
    padding:2px;
}

.table td {
    padding-top:4px;
}

.bottom-border {
    border-bottom: 1.54px solid #a3a3a4;
}

.table tbody {
    background-color: var(--golden);
    color: #5e5f5f;
}

.table thead {
    background-color: var(--grey);
    color:#ffffff;
}

</style>
