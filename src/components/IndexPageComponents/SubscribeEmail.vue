<template>
<div class="row">
    <div v-if="!isSubscribed" class="col">
        हमें सब्सक्राइब करें 
            <input type="text" v-model="email" placeholder="आपका ईमेल यहाँ लिखें...">
            <input type="button" value="सब्सक्राइब" @click="subscribe()">
    </div>
    <div v-else class="col">
        सब्सक्राइब करने के लिए धन्यवाद्!
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