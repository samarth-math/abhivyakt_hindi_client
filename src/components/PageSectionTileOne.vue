<template>
    <div class="tile col">
        <span class="type">{{artType}}</span>
        <br>
        <span class="title">{{artTitle}}</span>
        <br>
        <span class="text">{{artText}}</span>
    </div>
</template>

<script>
export default {
    name: 'PageSectionTileOne',
    props: {
        artType: {
            type: String,
            required: true,
            /*validator: function(value) { // Can validate the type of objects tile can hold
                return('kavita')
            }*/
        },
        artTitle: {
            type: String,
            required: true
        },
        artText: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.tile {
    border-right: 1.5px solid var(--golden);
}
.tile .type {
    color: var(--pink);
    font-size: 1rem;
}
.tile .title {
    font-size: 1rem;
}
.tile .text {
    font-size: 0.8rem;
}

</style>


