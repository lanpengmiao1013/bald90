<template>
    <!--<div>-->
    <a :href="links" :disabled="disabled" :style="disabled?'pointer-events:none;':underlinex" :class="['lan-link','lan-link--' + linkType]"@mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <slot></slot><!--插槽，用户输入使用-->               <!--pointer-events:none;css3新属性，a标签禁用-->
    </a>
    <!--</div>-->

</template>

<script>
    export default {
        name: "lan-link-text",
        data(){
            return{
                underlinex:""//控制是否有下划线
            }
        },
        props: {
            linkType: {
                type: String,
                default: "default"
            },
            links:{
                type: String,
                default: "#"
            },
            underline:{//111
                type: Boolean,
                default: true
            },
            disabled:Boolean
        },
        methods:{
            mouseEnter:function () {
                if (this.underline && !this.disabled){
                    // console.log(this.disabled)
                    this.underlinex='text-decoration: underline'
                }else {
                    this.underlinex = '';
                }

            },
            mouseLeave: function () {
                this.underlinex = '';
            },
        }
    }
</script>

<style lang="scss" scoped>
    .lan-link {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        position: relative;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        padding: 0;
        font-size: 14px;
        font-weight: 500;
    }
    .lan-link.lan-link--default {
        color: #606266;
    }
    .lan-link.lan-link--default:hover{
        color: #409eff;
        /*text-decoration: underline;*/
    }
    .lan-link.lan-link--primary {
        color: #409eff;
    }
    .lan-link.lan-link--primary:hover {
        color: #66b1ff;
        /*text-decoration: underline;*/
    }
    .lan-link.lan-link--success {
        color: #67c23a;
    }
    .lan-link.lan-link--success:hover {
        color: #85ce61;
        /*text-decoration: underline;*/
    }
    .lan-link.lan-link--warning {
        color: #e6a23c;
    }
    .lan-link.lan-link--warning:hover {
        color: #ebb563;
        /*text-decoration: underline;*/
    }
    .lan-link.lan-link--danger {
        color: #f56c6c;
    }
    .lan-link.lan-link--danger:hover {
        color: #f78989;
        /*text-decoration: underline;*/
    }
    .lan-link.lan-link--info {
        color: #909399;
    }
    .lan-link.lan-link--info:hover {
        color: #a6a9ad;
        /*text-decoration: underline;*/
    }
    /*.underlinex{*/
    /*    text-decoration: underline;*/
    /*}*/
</style>