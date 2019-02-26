<template>
    <div class="col-sm-8">
        <div class="img-box" :style="{'max-width':maxWidth+'px'}">
            <img :src="imgLoc" />
            <div class="text-box">
                <div class="row">
                    <div class="col-3 bold">
                        <span class="art-header">{{imgArtType}}</span><br/>
                        <span class="art-text"> {{imgText}} </span>
                    </div>
                    <div class="offset-5 col-4 align-self-end">
                        <span class="art-header">{{imgArtist}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BoxTextOnImage",
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        maxWidth: {
            default: 600
        },
        imgText: {
            type: String
        },
        imgArtType: {
            type: String
        },
        imgArtist : {
            type: String
        }
    },
    computed: {
        imgLoc: function(){
            return require("../../assets/imgs/"+this.imgSrc)
        }
    }
}
</script>



<style scoped>
.img-box {
    position: relative;
}

.img-box img {
    max-width: 100%;
    height: 188px;
    object-fit: cover
}

.img-box .text-box {
    padding-left: 5px;
    position: absolute;
    bottom: 0px;
    height: 2.85rem;
    background-color: black;
    color: white;
    width: 100%;
    opacity: 0.6;
    line-height: 1.3rem
}

.art-header {
    font-size: 16.5px;
    font-family:'Arya';
}

.art-text {
    font-size:16px;
    font-family: 'Laila';
}
</style>
