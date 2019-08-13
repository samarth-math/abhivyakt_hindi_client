<template>
    <div>
        <home-page-header 
        headerText="रचनाकार" />

        <box-image-with-text
        text="रामधारी सिंह दिनकर एक भारतीय हिंदी कवि, निबंधकार, देशभक्त और अकादमिक थे, 
            जिन्हें सबसे महत्वपूर्ण आधुनिक हिंदी कवियों में से एक माना जाता है। 
            वह भारतीय स्वतंत्रता के पहले के दिनों में लिखी गई अपनी राष्ट्रवादी कविता के 
            परिणामस्वरूप विद्रोह के कवि के रूप में प्रतिष्ठित हुए।"
        title="रामधारी सिंह दिनकर"
        img-src="RamdhariDinkar.png"
        link-text="इनकी कृतियां देखें"
        link-destination="/kahani" />

        <base-page-section section-header="अक्षरों से रचनाकार ब्राउज़ करें">
        <lettered-paginated-table
        from-location="rachnakar/startCharacter"
        link-rows-to="RachnakarPage"
        :object-column-table-column-mapping="{'नाम':'name'}"/>
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
import BoxImageWithText from "./BoxImageWithText"
import LetteredPaginatedTable from "../BaseComponents/LetteredPaginatedTable"
import apiObject from "../../mixins/apiObject.js"

export default {
    name: "RachanakarHomePage",
    components: {
        HomePageHeader,
        PageSectionWithTile,
        BoxImageWithText,
        BasePageSection,
        LetteredPaginatedTable,
    }
};
</script>

<style scoped>
.pagination-list {
    align-items: center
}
</style>
