<template>
  <div class="row box" v-bind:class="{ 'light-box': isLightBox, 'dark-box':!isLightBox }">
    <div class="col-12 text1">
      <i class="fas fa-circle space-bottom-md color-pink"></i>
      {{title}}
    </div>
    <div class="col-12 text2">
      {{text2}}
    </div>
    <div class="col-12 text3">
      {{text3}}
    </div>
  </div>
</template>

<script>
import featuredObject from "../../mixins/featuredObject.js"
export default {
    name:"ArtCard",
    mixins: [featuredObject],
    props:{
        isLightBox: {
            type: Boolean,
            default: true
        },
        fromLocation :{
            type: String
        },
        title: {
            type: String
        },
        objectField1: {
            type: String
        },
        objectField2: {
            type: String,
            default: "meaning"
        }
    },
    computed: {
        text2: function(){
            if (this.isContentLoaded && this.objectField1!="") {
                return this.loadedContent[0][this.objectField1]
            }
            return ""
        },
        text3: function(){
            if (this.isContentLoaded && this.objectField2!="") {
                return this.loadedContent[0][this.objectField2]
            }
            return ""
        }
    },
    created: function() {
        this.fetchContent(this.fromLocation)
    }
}
</script>

<style scoped>
.light-box {
    border: 8px solid var(--lightgrey);
    color: var(--grey);
}

.dark-box {
    background-color: var(--grey);
    color: #fff;
}

.box {
    text-align: center;
    height: 150px;
}

.text1 {
    font-weight: bold;
    font-size: 12px;
    margin-top: 0px;
}

.text2 {
    margin-top:15px;
    font-weight: bold;
    font-size: 18px;
}

.text3 {
    font-size: 14px;
    margin-bottom: 15px;
}
</style>
