<template>
    <div>
        <home-page-header
        headerText="कहानी"
        description=" A collection of stories on various themes" />

        <page-section-with-tile
        section-header="Featured Stories"
        :num-rows="1"
        :row-size="5"
        :tile-type="1"
        :with-section-end="true"
        from-location="/api/featured/kahani" />
    </div>
</template>

<script>
import PageSectionWithTile from "../BaseComponents/PageSectionWithTile"
import HomePageHeader from "../BaseComponents/HomePageHeader"
export default {
    name:"KahaniHomePage",
    components: {
        HomePageHeader,
        PageSectionWithTile
    }
}
</script>

<style scoped>
</style>
