<template>
    <div>
        <prime-timed-section/>

        <page-section-with-tile
        section-header="मुख्य आकर्षण"
        :with-section-end="true"
        :num-rows="2"
        :tile-type="1"
        :row-size="3"
        from-location="spotlight"
        />

        <pink-ribbon>
            <subscribe-email/>
        </pink-ribbon>

        <page-section-with-tile
        section-header="विशेष कवितायेँ"
        :num-rows="1"
        :row-size="5"
        :tile-type="2"
        from-location="featured/kavita"/>
        
        <page-section-with-tile
        section-header="विशेष कहानियां"
        :num-rows="1"
        :row-size="3"
        :tile-type=4
        from-location="featured/kahani"/>

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
import PrimeTimedSection from "./PrimeTimedSection"
import BoxTextOnImage from "./BoxTextOnImage"
import PinkRibbon from "./PinkRibbon"
import BaseLightBox from "../BaseComponents/BaseLightBox"
import SubscribeEmail from "./SubscribeEmail"
export default {
    components: {
        PrimeTimedSection,
        PageSectionWithTile,
        BoxTextOnImage,
        PinkRibbon,
        BaseLightBox,
        SubscribeEmail
    },
    data() {
        return {
        }
    }
}
</script>
