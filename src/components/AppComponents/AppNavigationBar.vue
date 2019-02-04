<template>
    <span>
        <div id="header" class="container d-none d-md-block">
            <h3>
                <i class="fas fa-circle space-bottom-md color-pink"></i>
                <router-link to="/">अभिव्यक्त</router-link>
            </h3>
        </div>
        <div class="wide-nav sticky-top">
            <div class="container ">
                <nav class="navbar navbar-expand-md navbar-light">
                    <router-link class="navbar-brand d-block d-md-none" to="/">
                        <i class="fas fa-circle space-bottom-md color-pink"></i>अभिव्यक्त
                    </router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse  justify-content-center " id="navbarToggler">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/kavita">कविता</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/kahani">कहानी</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/rachanakar">रचनाकार</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/muhavare">मुहावरे</router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/dohe">दोहे</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </span>
</template>

<script>
export default {
    name: "navbar"
}
</script>

<style scoped>
/* ---Start Nav bar related Css ---*/
.navbar-brand {
    font-family: "Arya", sans-serif;
    font-size: 32px;
}

#header {
    padding-top: 1rem;
}

#header a {
    color: rgb(0, 0, 0, 0.9);
    text-decoration: none;
    font-size: 34px;
}

.wide-nav {
    border-bottom: 1.5px solid var(--golden);
    border-top: 1.5px solid var(--golden);
    background-color: #fff;
}

.navbar {
    padding: 2px;
}

.navbar-nav > li {
    padding: 0rem 1.5rem;
}

.navbar-light .navbar-nav .nav-link {
    font-size: 24px;
    padding: 0rem;
    color: rgb(0, 0, 0);
}

.navbar-light .navbar-nav .nav-link:hover {
    color: var(--grey);
    text-decoration: underline;
    text-decoration-color: var(--pink);
}

/* ---End Nav bar related Css ---*/
</style>
