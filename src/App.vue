<template>
    <div id="app">
        <NavigationBar/>
        <div class="container">

            <router-view/>
        </div>
    </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
export default {
    name: "App",
    components: {
        NavigationBar
    }
};
</script>

<style>
</style>
