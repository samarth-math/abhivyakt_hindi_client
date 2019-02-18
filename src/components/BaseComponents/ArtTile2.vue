<template>
    <div class="tile col" :class="{'no-border':isLastTile}">
        <div class="col-12 title align-self-start">
            <router-link v-if="artTitleLink" :to=artTitleLink>
                {{artTitle}}
            </router-link>
        </div>
        <br/>
        <div class="col-12 text align-self-end">
            <router-link v-if="artTextLink" :to=artTextLink>
                {{artText}}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArtTile2',
    props: {
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
    border-right: 1.75px solid var(--golden);
}
.tile:hover {
    background-color: var(--lightgrey)
}
.tile .title {
    font-size: 1rem;
    padding-bottom: 30px;
}
.tile .text {
    font-size: 0.8rem;
    position: absolute;
    bottom: 0px;
}
.no-border {
    border: 0px;
}

</style>


