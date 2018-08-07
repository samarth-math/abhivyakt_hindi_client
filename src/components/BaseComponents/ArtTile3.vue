<template>
    <div class="col center-it">
        <img class="icon img-fluid" :src="imgSrc" />
        <br/>{{imgName}}
    </div>
</template>

<script>
export default {
    name: 'ArtTile3',
    props: {
        imgName: {
            type: String
        },
        imgSrc: {
            type: String
        }
    }
}
</script>

<style scoped>

img.icon {
    border-radius: 50%;
    max-height: 120px;
}

</style>
