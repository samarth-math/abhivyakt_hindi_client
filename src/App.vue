<template>
    <div id="app">
        <app-navigation-bar/>
        <div class="container space-top-lg">
            <router-view/>
        </div>
        <app-footer/>
    </div>
</template>

<script>
import AppNavigationBar from "./components/AppComponents/AppNavigationBar";
import AppFooter from "./components/AppComponents/AppFooter"
export default {
    name: "App",
    components: {
        AppNavigationBar,
        AppFooter
    }
};
</script>

<style>
</style>
