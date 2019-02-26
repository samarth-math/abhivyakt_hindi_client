<template>
    <div class="row">
        <div class="homeHeader col-12">
            <div class="row">
                <div class="col-12">
                    <span class="header">{{headerText}}</span>
                </div>
                <div class="col-12">
                    <span class="description">{{description}}</span>
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
    font-size: 40px;
    font-family: 'Arya';
    margin-bottom: 0;
    padding-bottom: 0;
}

.homeHeader .description {
    font-family: 'Sahitya';
    font-size: 19px;
    font-weight: 400px;
}

.homeHeader hr {
    padding-top: 0;
    margin-top: 0;
    border-top: 2px solid var(--heading-black);
}

</style>


