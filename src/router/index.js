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
import MuhavareHomePage from "@/components/MuhavareComponents/MuhavareHomePage"
import DoheHomePage from "@/components/DoheComponents/DoheHomePage"
import AboutPage from "@/components/FooterComponents/AboutPage"
import PrivacyPolicyPage from "@/components/FooterComponents/PrivacyPolicyPage";
import TermsOfUsePage from "@/components/FooterComponents/TermsOfUsePage";
import CopyrightPage from "@/components/FooterComponents/CopyrightPage";
import ContactUs from "@/components/FooterComponents/ContactUs";


Vue.use(Router)

export default new Router({
  routes: [{
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
      path: "/rachnakar",
      name: "RachanakarHomePage",
      component: RachanakarHomePage
    },
    {
      path: "/rachnakar/:id",
      name: "RachnakarPage",
      component: RachnakarPage,
      props: true
    },
    {
      path: "/muhavare",
      name: "MuhavareHomePage",
      component: MuhavareHomePage
    },
    {
      path: "/dohe",
      name: "DoheHomePage",
      component: DoheHomePage
    },
    {
      path: "/about",
      name: "AboutPage",
      component: AboutPage,
    },
    {
      path: "/privacy-policy",
      name: "PrivacyPolicyPage",
      component: PrivacyPolicyPage,
      props: true
    },
    {
      path: "/copyright",
      name: "CopyrightPage",
      component: CopyrightPage,
      props: true
    },
    {
      path: "/terms-of-use",
      name: "TermsOfUsePage",
      component: TermsOfUsePage,
      props: true
    },
    {
      path: "/contact-us",
      name: "ContactUs",
      component: ContactUs,
      props: true
    }
  ]
})
