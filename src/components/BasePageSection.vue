<template>
    <div class="row">
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
        },
        withPageEnd: {
            type: Boolean, 
            default: false
        }
    }
}
</script>

<style scoped>
.section-margin {
    margin: 1rem 0;
}

.section-heading {
    border-bottom: 1.5px solid var(--golden);
    border-top: 1.5px solid var(--golden);
    margin: 1rem 0rem;
    padding: 2px 0px;
    text-align: center;
}

.section-single-line-heading {
    border-bottom: 1.5px solid var(--golden);
    text-align: center;
    margin: 1rem 0rem;
    padding: 2px 0px;
}


.section-end {
    margin-top: 10px;
    height: 10px;
    border-bottom: 1.5px solid var(--golden);
    border-top: 1.5px solid var(--golden);
    margin-bottom: 10px;
}

</style>


