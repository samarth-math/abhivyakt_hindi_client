<template>
    <div>
        <home-page-header 
        headerText="रचनाकार" />

        <box-image-with-text
        text="Ramdhari Singh Dinkar was an Indian Hindi
            poet, essayist, patriot and academic, who is
            considered as one of the most important
            modern Hindi poets. He remerged as a poet of
            rebellion as a consequence of his nationalist
            poetry written in the days before Indian
            independence"
        title="Ramdhari Singh Dinkar"
        img-src="RamdhariDinkar.png"
        link-text="Explore his works" />

        <base-page-section sectionHeader="BROWSE BY NAME">
        <lettered-data-table/>
        </base-page-section>

    </div>
</template>

<script>
import PageSectionWithTile from "../BaseComponents/PageSectionWithTile"
import HomePageHeader from "../BaseComponents/HomePageHeader"
import BasePageSection from "../BaseComponents/BasePageSection"
import BoxImageWithText from "./BoxImageWithText"
import LetteredDataTable from "./LetteredDataTable"
import apiObject from "../../mixins/apiObject.js"

export default {
    name: "RachanakarHomePage",
    components: {
        HomePageHeader,
        PageSectionWithTile,
        BoxImageWithText,
        BasePageSection,
        LetteredDataTable,
    }
};
</script>

<style scoped>
.pagination-list {
    align-items: center
}
</style>
