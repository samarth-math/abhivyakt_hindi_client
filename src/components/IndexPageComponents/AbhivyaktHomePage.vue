<template>
    <div>
        <div class="row">
            <box-text-on-image
            img-src="RabindranathTagore.png"
            img-text="Gitanjali 65"
            img-art-type="kavita"
            img-artist="Rabindranath Tagore"/>

            <div class="col-sm-4 order-sm-first">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="no-padding-margin">
                            <span class="header3  color-pink"> चुनिंदा कविताएँ</span>
                            <br/>
                            <span class="sub-heading">चाँद रोज़ और मेरी जान</span>
                            <br/>
                            <span class="sub-heading2">फ़ैज़ अहमद फ़ैज़</span>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="no-padding-margin">
                            <span class="header3 color-pink"> प्रमुख रचनाकार </span>
                            <br/>
                            <span class="sub-heading">रामधारी सिंघ दिन्कर</span>
                            <br/>
                        </div>
                    </div>
                    <div class="col-sm-12">
                    </div>
                </div>
            </div>
        </div>
        <page-section-with-tile
        section-header="SpotLight"
        :with-section-end="true"
        :num-rows="2"
        :tile-type="1"
        :row-size="3"
        from-location="spotlight"
        />
        <pink-ribbon>
            Some stuff here
        </pink-ribbon>

        <page-section-with-tile
        section-header="Featured Poems"
        :num-rows="1"
        :row-size="5"
        :tile-type="2"
        from-location="featured/kavita"/>
        
        <page-section-with-tile
        section-header="Featured Kahaniyaan"
        :num-rows="1"
        :row-size="5"
        :tile-type="2"
        from-location="featured/kahani"/>
        
    </div>
</template>

<script>
import PageSectionWithTile from "../BaseComponents/PageSectionWithTile"
import BoxTextOnImage from "./BoxTextOnImage"
import PinkRibbon from "./PinkRibbon"
export default {
    components: {
        PageSectionWithTile,
        BoxTextOnImage,
        PinkRibbon
    },
    data() {
        return {
        }
    }
}
</script>
