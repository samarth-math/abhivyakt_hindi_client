<template>
    <div>
        <home-page-header
         headerText="Privacy Policy"
         />
        <div>
            <p>
            Abhivyakt’s privacy policy explains how we treat your personal data and protect your privacy when you use our Services.
            By using our Services, you agree that Abhivyakt can collect, retain and use such data in accordance with our privacy policy.
            </p>
        </div>
        <title-content
            headerText="Privacy Policy Statement"
            description="Abhivyakt Web App is developed with the objective of promotion, development and advancement of Hindi and Hindustani languages through various media.
            Our contact details are available at the Contact Us page. We are committed to protecting your privacy and the privacy of any personally identifiable
            information that we collect."
        />
         <title-content
            headerText="Information That We Collect"
            description="
                Our web server might automatically recognize your domain name, IP address and other ascertainable electronic information.
                We also collect any personal information, including any sensitive personal information, as volunteered by you as per the Terms of Service."
        />
         <title-content
            headerText="Use of This Information"
            description=" The information we collect is used to improve the content of our website and your experience.
                We do not rent, sell, or share your personal information with any unaffiliated third party or organization.
                If you supply us with your telephone, postal and/or email address online you may receive periodic updates from us
                with information on new services or upcoming events."
        />
         <title-content
            headerText="Correcting This Information"
            description="Upon a reasonable and genuine request and subject to our discretion we can provide you access to the personally identifiable information
            that we maintain about you. Upon request we also offer you the ability to have inaccuracies corrected in the information.
            You can access this information and/or have inaccuracies corrected in the information by emailing us at the email address mentioned at the end of this page."
        />
         <title-content
            headerText="Cookies"
            description="We might use cookies to store preferences and to record session information."
        />
        <title-content
            headerText="Updates to This Policy"
            description="If our privacy practices change at some time in the future we will post the policy changes to our website."
        />
        <div class="row">
            <div class=col-12>
                <p>
                     If you feel that this site is not following its stated privacy policy, or if you have any questions or concerns regarding the same,
                please contact our Grievance Officer, at the following email address:
                </p>
                <p>
                    EMAIL: contact@Abhivyakt.org
                </p>
                <p>
                    Subject: Grievance Related To Privacy Policy
                </p>
            </div>
        </div>>
    </div>
</template>

<style>
</style>

<script>
import HomePageHeader from "../BaseComponents/HomePageHeader"
import TitleContent from "../BaseComponents/TitleContent"

export default {
    name: "PrivacyPolicyPage",
    components: {
        HomePageHeader,
        TitleContent
    }
}
</script>

