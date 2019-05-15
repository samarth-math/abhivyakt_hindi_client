<template>
    <div>
        <home-page-header
         headerText="About Abhivyakt"
         />
        <title-content
            description="अभिव्यक्त भारतीय कला और साहित्य को लोकप्रिय बनाने का एक मंच है।
            आज यह दावा करना गलत नहीं होगा कि हम जो भी किताबें पढ़ते हैं, उनमें से अधिकांश कविताएँ हम उद्धृत करते हैं, जिन महान चित्रों को हम जानते हैं वे पश्चिमी हैं और हमारी बातचीत - अंग्रेजी।
            इसका मतलब यह नहीं है कि पश्चिमी कृतियों की वैश्विक अपील उचित नहीं है, लेकिन साथ ही हम साहित्य और भारतीय कला के प्रति अनजान हैं।
            यही इस उद्यम का उद्देश्य है – भारतीय संस्कृति के छिपे हुए रत्नों को हमारे भारतीयों तथा दुनिया के सामने लाने में मदद करने के लिए।"
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

