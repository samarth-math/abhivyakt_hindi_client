<template>
    <div class="tile col-sm" :class="{'no-border':isLastTile}">
        <span class="type">{{artType}}</span>
        <br>
        <span class="title">{{artTitle}}</span>
        <br>
        <span class="text">{{artText}}</span>
    </div>
</template>

<script>
export default {
    name: 'BaseTile1',
    props: {
        artType: {
            type: String,
        },
        artTitle: {
            type: String,
            required: true
        },
        artText: {
            type: String,
            required: true
        },
        isLastTile: {
            type: Boolean,
            default: false
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
.no-border {
    border: 0px;
}

</style>


