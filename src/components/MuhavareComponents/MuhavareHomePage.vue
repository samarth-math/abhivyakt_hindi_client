<template>
<div>
    <home-page-header
    header-text="Muhavare"/>
    <base-page-section
    sectionHeader="Browse Muhavare">
        <paginated-table
        from-location="muhavarejs"
        :column-object-field-mapping="{'muhavara':'muhavara', 'matlab':'meaning'}"
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
  name: "MuhavareHomePage",
  components: {
    HomePageHeader,
    PaginatedTable,
    BasePageSection
  }
}
</script>

<style>
</style>
