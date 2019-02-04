<template>
<div class="row">
    <div class="col">
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th v-for="(value, column, index) in columnObjectFieldMapping" :key="index">{{column}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(art, rowIndex) in currentPageDataSlice" column
            :key="rowIndex"
            :class="{'bottom-border': isNotLastRow(rowIndex)}"
            @click="rowClicked(art._id.$oid)">
                <td>{{rowIndex+1}}</td>
                <td :class="{'look-like-link':linkTo}" v-for="field in columnObjectFieldMapping" :key="field">
                        {{$_DataTable_generateObjectFields(art, field)}}
                </td>
            </tr>
            <tr v-for="i in currentPageRemainingEmptyRows"
            :key="i + 'empty'">
                <td>-</td>
                <td v-for="field in columnObjectFieldMapping" :key="field">-</td>
            </tr>
        </tbody>
    </table> 
  <ul class="pagination justify-content-center pagination-sm">
      <!--using class hidden instead of v-show because v-show toggles the
      display property which affects spacing, hidden still renders but hides-->
    <li class="page-item page-link"
    :class="{'hidden': currentPage==1}"
    @click="prevPage()">
      &lt;
    </li>
    <li v-for="i in totalPages"
    :key="i"
    :class="{'active': isActive(i)}"
    @click="goToPage(i)"
    class="page-item page-link">
      {{i}}
    </li>
    <li class="page-item page-link"
    :class="{'hidden': !isNextPagesShown}"
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
            currentPage: 1,
            hasMoreData: false,
            nextItemURL:"",
            dataArray: []
        }
    },
    mixins:[featuredObject],
    props:{
        columnObjectFieldMapping: {
            type: Object
        },
        pageSize: {
            type: Number,
            default: 5
        },
        linkTo: {
            type: String
        },
        fromLocation: {
            type: String
        }
    },
    created() {
        if (this.fromLocation!=null && this.fromLocation!=""){
            this.fetchContent(this.fromLocation)
        }
    },
    computed: {
        totalPages: function(){
            return Math.ceil(this.dataArray.length*1.0/this.pageSize)
        },
        currentPageDataSlice: function() {
            return this.dataArray.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
        },
        isNextPagesShown: function() {
            return (this.currentPage!=this.totalPages || this.hasMoreData)
        },
        currentPageRemainingEmptyRows() {
            return Math.max(0, this.pageSize - this.currentPageDataSlice.length)
        }
    },
    watch : {
    // We need to use a watcher here than computed, because Vue can't really see that
    // fetchContent modifies it's array, and koi return value daal kar use karna padega for it to recompute
        fromLocation: function(newVal) {
            if (newVal!=null && newVal!="") {
                this.fetchContent(this.fromLocation)
            }
        }
    },
    methods: {
        handleFetchedContent: function(responseData) {
            this.hasMoreData = responseData.hasMore
            this.nextItemURL = responseData.nextItem
            this.dataArray = this.dataArray.concat(responseData.content)
            this.isContentLoaded = true
        },
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
            else {
                this.fetchContent(this.nextItemURL)
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
        rowClicked: function(recordId) {
            if (this.linkTo){
                this.$router.push(this.linkTo + '/' + recordId)
            }
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
    flex-wrap: wrap;
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

.table tbody tr:hover {
    background-color: var(--lightgrey)
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
