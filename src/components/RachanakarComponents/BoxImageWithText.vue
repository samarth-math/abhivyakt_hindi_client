<template>
    <div class="row space-top-lg">
        <div class="col-md-5">
            <img :src="imgLoc" />
        </div>
        <div class="col-md-7 textbox background-pink  order-md-first">
            <span class="header">{{title}}</span>
            <hr/> {{text}}<br/><br/>
            <div class="link">
                <a :to="linkDestination">{{linkText}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BoxImageWithText",
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        linkText: {
            type: String
        },
        linkDestination: {
            type: String
        },
        imgSrc: {
            type: String,
            required: true
        }
    },
    computed: {
        imgLoc: function(){
            return require("../../assets/imgs/" + this.imgSrc)
        }
    }
}
</script>

<style scoped>
hr {
    height: 2px;
    background: white;
    padding-top: 0;
    margin-top: 0;
}
img {
    max-width: 500px;
    float: right;
    margin: 0px;
    padding:0px;
}

.link {
    float: right;
}

.link a{
    color:white;
    text-decoration: underline;
    font-weight: 500;
}

.background-pink {
    background: var(--pink);
}

.textbox {
    float: left;
    padding:45px;
    padding-right:50px;
    color:white;
    font-size: 20px;
}

.header {
    font-size: 20pt;
    margin-bottom: 0;
    padding-bottom: 0;
}
</style>


