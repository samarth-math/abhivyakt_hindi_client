<template>
    <div id="footer" class="row  space-top-lg">
        <div class="col-12 page-end">
        </div>
        <div class="container">
            <div class="col-12">
                <div class="row">
                    <div class="col">
                        <router-link class="nav-link" to="/about">About Abhivyakt</router-link>
                    </div>
                    <div class="col">
                         <router-link class="nav-link" to="/privacy-policy">Privacy Policy</router-link>
                    </div>
                    <div class="col">
                         <router-link class="nav-link" to="/terms-of-use">Terms of Use</router-link>
                    </div>
                    <div class="col">
                         <router-link class="nav-link" to="/copyright">Copyright</router-link>
                    </div>
                    <div class="col">
                         <router-link class="nav-link" to="/contact-us">Contact Us</router-link>
                    </div>
                    <div class="col">
                         <router-link class="nav-link" to="/sitemap">Sitemap</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>



<style scoped>
.page-end {
    height: 10px;
    border-bottom: 1.5px solid var(--footer-black);
    border-top: 1.5px solid var(--footer-black);
}

#footer a {
    text-decoration: none;
    color: var(--footer-black);
    font-weight: 600;
}
</style>
