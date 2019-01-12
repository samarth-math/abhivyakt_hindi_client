<template>
    <div class="tile col-sm" :class="{'no-border':isLastTile}">
        <span class="type">{{artType}}</span>
        <br>
        <span class="title">
            <router-link v-if="artTitleLink" :to=artTitleLink>
                {{artTitle}}
            </router-link>
        </span>
        <br>
        <span class="text">
            <router-link v-if="artTextLink" :to=artTextLink>
                {{artText}}
            </router-link>
        </span>
    </div>
</template>

<script>
export default {
    name: 'ArtTile1',
    props: {
        artType: {
            type: String,
        },
        artTitle: {
            type: String,
            required: true
        },
        artTitleLink: {
            type: String
        },
        artText: {
            type: String,
        },
        artTextLink: {
            type: String
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


