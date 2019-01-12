import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld"
import AbhivyaktHomePage from "@/components/IndexPageComponents/AbhivyaktHomePage"
import KavitaHomePage from "@/components/KavitaComponents/KavitaHomePage"
import KavitaPage from "@/components/KavitaComponents/KavitaPage"
import KahaniHomePage from "@/components/KahaniComponents/KahaniHomePage"
import KahaniPage from "@/components/KahaniComponents/KahaniPage"
import RachanakarHomePage from "@/components/RachanakarComponents/RachanakarHomePage"
import RachnakarPage from "@/components/RachanakarComponents/RachnakarPage"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/hello",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/",
      name: "AbhivyaktHomePage",
      component: AbhivyaktHomePage
    },
    {
      path: "/kavita",
      name: "KavitaHomePage",
      component: KavitaHomePage
    },
    {
      path: "/kavita/:id",
      name: "KavitaPage",
      component: KavitaPage,
      props: true
    },
    {
      path: "/kahani",
      name: "KahaniHomePage",
      component: KahaniHomePage
    },
    {
      path: "/kahani/:id",
      name: "KahaniPage",
      component: KahaniPage,
      props: true
    },
    {
      path: "/rachanakar",
      name: "RachanakarHomePage",
      component: RachanakarHomePage
    },
    {
      path: "/rachnakar/:id",
      name: "RachnakarPage",
      component: RachnakarPage,
      props: true
    }
  ]
})
