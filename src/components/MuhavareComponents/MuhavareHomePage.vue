<template>
<div>
    <home-page-header
    header-text="मुहावरे"/>
    <base-page-section
    sectionHeader="मुहावरे देखें">
        <paginated-table
        from-location="muhavarejs"
        :object-column-table-column-mapping="{'मुहावरा':'muhavara', 'मतलब':'meaning'}"
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
