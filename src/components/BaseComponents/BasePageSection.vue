<template>
    <div class="row space-top-lg">
        <div class="col-12 section-heading">
            {{sectionHeader}}
        </div>
        <div class="col-12 ">
            <slot></slot>
        </div>
        <div v-if="withSectionEnd" class="col-12 section-end">
            <!--Leave this empty, it's the section end-->
        </div>
    </div>
</template>

<script>
export default {
    name:'BasePageSection',
    props: {
        sectionHeader: {
            type: String,
            required:true
        },
        withSectionEnd: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

.section-heading {
    border-bottom: 1.75px solid var(--golden);
    border-top: 1.75px solid var(--golden);
    margin-bottom: 1rem;
    padding: 2px 0px;
    text-align: center;
}

.section-end {
    margin-top: 10px;
    height: 10px;
    border-bottom: 1.75px solid var(--golden);
    border-top: 1.75px solid var(--golden);
}

</style>


