<template>
    <div class="row">
        <div class=col-12>
            <h6 class="header3">
            {{headerText}}
            </h6>
            <p>
             {{description}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TitleContent',
    props: {
        headerText: {
            type: String,
        },
        description: {
            type: String,
        }
    }
}
</script>

<style scoped>
</style>


