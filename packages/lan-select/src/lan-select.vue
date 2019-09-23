<template>
    <select v-model="value" placeholder="请选择">
    </select>
</template>

<script>
    export default {
        name: "lan-select",
        props: {
            lSelect:{
                type:Array,
                options:[]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>