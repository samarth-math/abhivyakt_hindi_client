<template>
    <div class="tile col-sm" :class="{'no-border':isLastTile}">
        <div class="col-sm title align-self-start">
            <router-link v-if="artTitleLink" :to=artTitleLink>
                {{artTitle}}
            </router-link>
        </div>
        <br/>
        <div class="col-sm text align-self-end">
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


