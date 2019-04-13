<template>
    <div id="app">
        <app-navigation-bar/>
        <div class="container min-height space-top-lg">
        <keep-alive>
            <router-view/>
        </keep-alive>
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
.min-height {
    min-height: 66vh;
}
</style>
