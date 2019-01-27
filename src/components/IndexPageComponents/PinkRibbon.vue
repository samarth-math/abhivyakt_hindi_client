<template>
    <div class="row">
        <div class="pink-break">
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
    padding:10px 0 10px 0;
    background-color: var(--pink);
    color: #fff;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    width: 100vw;
    text-align: center;
}

.pink-break input[type="text"] {
    border-radius:15px;
    padding-left:10px;
    margin-left: 10px;
}

.pink-break input[type="button"] {
    border-radius:15px;
    padding-left:10px;
    margin-left: 10px;
    border: 2px solid white;
    background-color: var(--pink);
    color: white;
    cursor: pointer;
}
</style>

