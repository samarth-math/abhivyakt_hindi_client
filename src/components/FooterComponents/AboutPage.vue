<template>
    <div>
        <home-page-header
         headerText="About Abhivyakt"
         />
        <title-content
            description="Abhivyakt is a free website abhivyakt.com with the objective of promoting and disseminating Hindi literature,
            to an audience beyond those conversant with the Devnagri script.
            The content is available in Devanagari and Roman scripts."
        />
        <title-content 
         description="This resource provides the works of the highest number of poets compared to any other site in this genre.
         The site is the largest online repository of Hindi poetry anywhere."
        />
        <title-content
        description="The site has recently been made responsive which would enable users across all platforms including desktop and laptop computers,
        tablets as well as mobile phones to view and navigate the site with equal ease which would enable users even in remote locations to access the website."
        />
    </div>
</template>

<style>
</style>

<script>
import HomePageHeader from "../BaseComponents/HomePageHeader"
import TitleContent from "../BaseComponents/TitleContent"

export default {
    name: "AboutPage",
    components: {
        HomePageHeader,
        TitleContent
    }
}
</script>

