<template>
    <div>
        <home-page-header 
        headerText="कविता" 
        description=" A collection of poems on various themes" />

        <page-section-with-tile 
        section-header="Featured Poems" 
        :num-rows="1" 
        :row-size="5" 
        :tile-type="1" 
        :with-section-end="true"
        from-location="/api/featured/kavita" />
    </div>
</template>

<script>
import PageSectionWithTile from "../BaseComponents/PageSectionWithTile"
import HomePageHeader from "../BaseComponents/HomePageHeader"
export default {
    components: {
        HomePageHeader,
        PageSectionWithTile
    }
}
</script>

<style scoped>
</style>
