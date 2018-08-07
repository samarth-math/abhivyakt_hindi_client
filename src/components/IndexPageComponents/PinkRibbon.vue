<template>
    <div class="row">
        <div class="center-it pink-break">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'PinkRibbon',
}
</script>


<style scoped>
.pink-break {
    margin-top: 5px;
    height: 40px;
    background-color: var(--pink);
    color: #fff;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    width: 100vw;
}
</style>

