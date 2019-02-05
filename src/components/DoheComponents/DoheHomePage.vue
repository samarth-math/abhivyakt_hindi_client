<template>
<div>
    <home-page-header
    header-text="Dohe"/>
    <base-page-section
    sectionHeader="Browse Dohe">
        <paginated-table
        from-location="dohejs"
        :column-object-field-mapping="{'doha':'doha', 'matlab':'meaning'}"
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
