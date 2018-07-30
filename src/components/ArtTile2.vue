<template>
    <div class="tile col-sm" :class="{'no-border':isLastTile}">
        <div class="col-sm title align-self-start">{{artTitle}}</div>
        <br/>
        <div class="col-sm text align-self-end">{{artText}}</div>
    </div>
</template>

<script>
export default {
    name: 'ArtTile2',
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


