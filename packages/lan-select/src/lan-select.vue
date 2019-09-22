<template>
    <select v-model="value" placeholder="请选择">
        <option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></option>
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

<style scoped>

</style>