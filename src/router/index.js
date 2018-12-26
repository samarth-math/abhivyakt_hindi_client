<<<<<<< HEAD
import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld"
import AbhivyaktHomePage from "@/components/IndexPageComponents/AbhivyaktHomePage"
import KavitaHomePage from "@/components/KavitaComponents/KavitaHomePage"
import KahaniHomePage from "@/components/KahaniComponents/KahaniHomePage"
import RachanakarHomePage from "@/components/RachanakarComponents/RachanakarHomePage"
import RachnakarPage from "@/components/RachanakarComponents/RachnakarPage"
=======
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AbhivyaktHomePage from '@/components/IndexPageComponents/AbhivyaktHomePage'
import KavitaHomePage from '@/components/KavitaComponents/KavitaHomePage'
import KahaniHomePage from '@/components/KahaniComponents/KahaniHomePage'
import RachanakarHomePage from '@/components/RachanakarComponents/RachanakarHomePage'
import RachnakarPage from '@/components/RachanakarComponents/RachnakarPage'
>>>>>>> master

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
      path: "/kahani",
      name: "KahaniHomePage",
      component: KahaniHomePage
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
