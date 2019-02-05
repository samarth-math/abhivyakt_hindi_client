<template>
    <div>
        <home-page-header
        headerText="कहानी"
        description="विभिन्न विषयों पर कहानियों का संग्रह" />

        <page-section-with-tile
        section-header="विशेष कहानियां"
        :num-rows="2"
        :row-size="3"
        :tile-type="1"
        from-location="featured/kahani" />

        <base-page-section
        section-header="अक्षरों से कहानियां ब्राउज़ करें">

        <lettered-paginated-table
        from-location="kahani/startCharacter"
        link-rows-to="kahani"
        :object-column-table-column-mapping="{'kahani':'title'}"/>
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
