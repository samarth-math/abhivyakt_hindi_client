<template>
    <div>
        <home-page-header
         headerText="Copyright"
         />
        <title-content
            description="We respond to notices of alleged copyright infringement. If you think somone is violating your copyrights please notify us.
        To file a copyright infringement notification with us, you will need to send a written communication to us at our email address mentioned
        at the end of this page with all of the following information in it, using this format:
        Include a statement telling us that you have found content on Abhivyakt which you believe infringes your copyright
        (for instance, 'I hereby confirm that I believe the content identified below infringes my copyright').
        Tell us which country your copyright applies to.
        Give us the description and title of the Content concerned and the full URL for its access page.
        Explain to us how the content infringes your copyright (e.g. the poetry is a copy of an original work written by you, etc.)
        Identify the type (e.g. a film, a book, etc.) and details of (e.g. title, publisher, dates, etc.) the copyright work which you own the rights in,
        and which you believe has been infringed. If this information is available on the internet, it is helpful to send us a link.
        Let us have the contact information (including an email address) so that we can get in touch with you.
        Include the following statement: 'I have a good faith belief that use of the copyrighted work described above is not authorized by the copyright owner
        (or by a third party who is legally entitled to do so on behalf of the copyright owner) and is not otherwise permitted by law.'
        I swear that the information contained in this notification is accurate and that I am the copyright owner
        or have an exclusive right in law to bring infringement proceedings with respect to its use.
        Sign the notice. If you are providing notice by e-mail, a scanned physical signature or a valid electronic signature will be accepted.
        Make sure you know whether the content that you have seen on Abhivyakt infringes your copyright.
        If you are not sure what your rights are, or whether your copyright has been infringed, you should check with a legal adviser first.
        Please also note that the information provided in this legal notice may be forwarded to the person who provided the allegedly infringing content."
        />
        <title-content
         headerText="Copyright Contact Information:"
         description=""
        />
        <div class="row">
            <div class=col-12>
                <p>
                    To contact us via email, you may do so here:
                </p>
                <p>
                    Subject of the mail: Copyright Complaint
                </p>
                <p>
                    EMAIL: contact@abhivyakt.org
                </p>
            </div>
        </div>
    </div>
</template>

<style>
</style>

<script>
import HomePageHeader from "../BaseComponents/HomePageHeader"
import TitleContent from "../BaseComponents/TitleContent"

export default {
    name: "CopyrightPage",
    components: {
        HomePageHeader,
        TitleContent
    }
}
</script>

