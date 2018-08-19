<template>
    <div>
        <home-page-header
        headerText="कहानी"
        description=" A collection of stories on various themes" />

        <page-section-with-tile
        section-header="Featured Stories"
        :num-rows="2"
        :row-size="3"
        :tile-type="1"
        :with-section-end="true"
        from-location="/api/featured/kahani" />

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
import LetteredPaginatedTable from "../BaseComponents/LetteredPaginatedTable"
import BasePageSection from "../BaseComponents/BasePageSection"

export default {
    name:"KahaniHomePage",
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
