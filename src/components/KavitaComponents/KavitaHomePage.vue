<template>
    <div>
        <home-page-header 
        headerText="कविता" 
        description="विभिन्न विषयों पर कविताओं का संग्रह" />

        <page-section-with-tile 
        section-header="विशेष कवितायेँ"
        :num-rows="2"
        :row-size="3"
        :tile-type="1"
        from-location="featured/kavita" />

        <base-page-section
        section-header="अक्षरों से कविताएँ ब्राउज़ करें">
        <lettered-paginated-table
        from-location="kavita/startCharacter"
        link-rows-to="KavitaPage"
        :object-column-table-column-mapping="{'कविता':'title'}"/>
        </base-page-section>

        <page-section-with-tile
        section-header="विशेष रचनाकार"
        :row-size=5
        :num-rows=1
        :tile-type=3
        from-location="featured/rachnakar">
        </page-section-with-tile>

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
