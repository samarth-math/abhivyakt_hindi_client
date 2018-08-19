<template>
    <div>
        <home-page-header 
        headerText="कविता" 
        description=" A collection of poems on various themes" />

        <page-section-with-tile 
        section-header="Featured Poems"
        :num-rows="2"
        :row-size="3"
        :tile-type="1"
        :with-section-end="true"
        from-location="/api/featured/kavita" />

        <base-page-section
        section-header="Browse Poems">
        <lettered-paginated-table
        from-location="/api/featured" />
        </base-page-section>

    </div>
</template>

<script>
import PageSectionWithTile from "../BaseComponents/PageSectionWithTile"
import HomePageHeader from "../BaseComponents/HomePageHeader"
import BasePageSection from "../BaseComponents/BasePageSection"
import LetteredPaginatedTable from "../BaseComponents/LetteredPaginatedTable"
export default {
    name:"KavitaHomePage",
    components: {
        HomePageHeader,
        PageSectionWithTile,
        BasePageSection,
        LetteredPaginatedTable
    }
}
</script>

<style scoped>
</style>
