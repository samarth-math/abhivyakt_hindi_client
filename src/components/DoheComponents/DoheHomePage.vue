<template>
<div>
    <home-page-header
    header-text="दोहे"/>
    <base-page-section
    sectionHeader="ब्राउज़ दोहे">
        <paginated-table
        from-location="dohejs"
        :object-column-table-column-mapping="{'दोहा':'doha', 'मतलब':'meaning'}"
        :page-size=10
        />
    </base-page-section>
    
</div>

</template>

<script>
import HomePageHeader from "../BaseComponents/HomePageHeader"
import PaginatedTable from "../BaseComponents/PaginatedTable"
import BasePageSection from "../BaseComponents/BasePageSection"

export default {
  name: "DoheHomePage",
  components: {
    HomePageHeader,
    PaginatedTable,
    BasePageSection
  }
}
</script>

<style>
</style>
