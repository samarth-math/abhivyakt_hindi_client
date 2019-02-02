<template>
    <div class="row">
        <div class="homeHeader col-12">
            <div class="row">
                <div class="col-6">
                    <span class="header">{{headerText}}</span>
                    <hr/> {{description}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePageHeader',
    props: {
        headerText: {
            type: String,
            required: true
        },
        description: {
            type: String,
        }
    }

}
</script>

<style scoped>
.homeHeader {
    padding: 20px;
    border-radius: 15px;
    background: var(--golden);
    color: var(--heading-black);
}

.homeHeader .header {
    font-size: 30pt;
    margin-bottom: 0;
    padding-bottom: 0;
    line-height: 1.1;
}

.homeHeader hr {
    padding-top: 0;
    margin-top: 0;
    border-top: 2px solid var(--heading-black);
}

</style>


