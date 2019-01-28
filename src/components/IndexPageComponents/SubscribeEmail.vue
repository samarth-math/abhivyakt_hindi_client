<template>
<div class="row">
    <div v-if="!isSubscribed" class="col">
        Subscribe to keep in touch with us. 
            <input type="text" v-model="email" placeholder="Enter your email Id here..">
            <input type="button" value="Subscribe" @click="subscribe()">
    </div>
    <div v-else class="col">
        Thanks for Subscribing to our website!
    </div>
</div>
    
</template>
<script>
export default {
    name: "SubscribeEmail",
    data() {
        return {
            isSubscribed: false,
            email:""
        }
    },
    methods: {
        subscribe: function() {
            this.isSubscribed = true
        }
    }
}
</script>