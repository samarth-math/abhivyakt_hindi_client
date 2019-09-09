<template>
    <div class="row">
        <div class="col">
            अक्षरों से ढूंढें: <span
            v-for="(apiEndpoint, tab) in tabs"
            class="tabs"
            :class="{'active': isActive(tab)}"
            :key="tab + 'a'"
            @click="changeTable(tab)"> {{tab}} </span>

            <paginated-table
            v-for="(apiEndpoint, tab) in tabs"
            :key="tab"
            :class="{'hide' : tab!=currentTab }"
            :object-column-table-column-mapping = objectColumnTableColumnMapping
            :from-location="apiEndpoint"
            :link-to="rowLinkTo"/>
        </div>
    </div>
</template>

<script>
import featuredObject from "../../mixins/featuredObject.js"
import PaginatedTable from "./PaginatedTable"
import {ObjectEnglishEnum} from "../../mixins/staticVariables"

export default {
    name: "LetteredPaginatedTable",
    components: {
        PaginatedTable
    },
    mixins: [featuredObject],
    data() {
        return {
            currentTab:"",
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
            default: 'TAB'
        },
        objectColumnTableColumnMapping: {
            type: Object,
            required: true
        },
        tabs: {
            type: Object,
            default: function() {// the format of the return object is required
                return {
                    अ: "",
                    आ: "",
                    इ: "",
                    ई: "",
                    उ: "",
                    ऊ: "",
                    ऋ: "",
                  //  ऌ: "",
                    ए: "",
                    ऐ: "",
                    ओ: "",
                    औ: "",
                    क: "",
                    ख: "",
                    ग: "",
                    घ: "",
                  //  ङ: "",
                    च: "",
                    छ: "",
                    ज: "",
                    झ: "",
                 //   ञ: "",
                    ट: "",
                    ठ: "",
                    ड: "",
                    ढ: "",
                    ण: "",
                    त: "",
                    थ: "",
                    द: "",
                    ध: "",
                    न: "",
                  //  ऩ: "",
                    प: "",
                    फ: "",
                    ब: "",
                    भ: "",
                    म: "",
                    य: "",
                    र: "",
                   // ऱ: "",
                    ल: "",
                   //ळ: "",
                   // ऴ: "",
                    व: "",
                    श: "",
                    ष: "",
                    स: "",
                    ह: "",
                }
            }
        }
    },
    created() {
        this.changeTable(Object.keys(this.tabs)[0])//First key in tabs
    },
    computed: {
        'rowLinkTo' : function() {
            if (this.linkRowsTo=="TAB"){
                const englishWord = String(ObjectEnglishEnum[this.currentTab])
                return englishWord.charAt(0).toUpperCase() + englishWord.slice(1) + 'Page'
            }
            return this.linkRowsTo
        }
    },
    methods: {
        changeTable(tab) {
            this.currentTab = tab
            this.tabs[tab] = this.fromLocation + "/" + tab
        },
        isActive(tab) {
            return this.currentTab == tab
        }
    }
}
</script>

<style scoped>
.hide {
    display: none;
}

.tabs {
    padding: 3px;
    font-weight: bold;
}

.tabs:hover {
    color: #ffffff;
    background-color: var(--lightpink);
    cursor: pointer;
}

.tabs.active {
    color: #ffffff;
    background-color: var(--pink);
}
</style>
