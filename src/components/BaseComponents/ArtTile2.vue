<template>
    <div class="tile col-sm" :class="{'no-border':isLastTile}">
        <div class="row justify-content-center center-text">
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
    border-bottom: 0.1px solid var(--golden);
    margin-top: 10px;
}
.tile:hover {
    background-color: var(--lightgrey)
}
.tile .title {
    font-size: 1rem;
    padding-bottom: 50px;
}
.tile .text {
    font-size: 0.8rem;
    position: absolute;
    bottom: 10px;
}
.no-border {
    border: 0px;
}
/*Everything here is valid for sm -> full size screen*/
@media(min-width: 576px) {
    .tile {
        border-right: 1.75px solid var(--golden);
        border-bottom: 0px;
        margin-top: 0px;
    }
    .tile .text {
        font-size: 0.8rem;
        position: absolute;
        bottom: 0px;
    }
    .no-border {
        border: 0px;
    }
}
</style>


