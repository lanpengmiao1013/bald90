<template>
    <div class="slider_box">
        <div class="su" :style="{left:+hValue*juli+'%'}" v-if="xy">
            <span>{{hValue}}</span>
        </div>
        <input :disabled="disabled" @mouseover="XY" @mouseout="XY"
               type="range" v-model="hValue" :max="sliderMax"
               :style="disabled?'pointer-events:none;background: -webkit-linear-gradient(#c0c4cc, #ddd) no-repeat, #ddd;'
               :{background:' -webkit-linear-gradient(#409eff, #ddd) no-repeat, #ddd',backgroundSize:+hValue*juli+'% 100%'}">
    </div>
</template>

<script>
    export default {
        name: "lan-select",
        data(){
            return{
                hValue:this.sliderValue,/*设置中间值，避免直接在子组件中修改报错的问题*/
                juli:100/this.sliderMax,
                xy:false,
                xyjs:this.xyjsValue
            }
        },
        props: {
            sliderValue: {
                type: String,
                svdefault: "0"
            },
            sliderMax:{
                type: String,
                smdefault: "100",
            },
            xyjsValue:{
                type: String,
                xyjsdefault: "",/*控制数字显示，xyjsValue为显示，否则不显示*/
            },
            disabled:Boolean
        },
        methods:{
            XY(){
                // console.log(this.xyjs)
                if (this.xyjs=="xyjsValue"){
                    this.xy=!this.xy
                }else {
                    this.xy = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .slider_box{
        width: 570px;
        position: relative;
    }
    input[type=range] {
        -webkit-appearance: none;/*清除系统默认样式*/
        width:570px;
        background: -webkit-linear-gradient(#409eff, #ddd) no-repeat, #ddd;/*设置左边颜色为#61bd12，右边颜色为#ddd*/
        background-size: 10% 100%;/*设置左右宽度比例*/
        height: 6px;/*横条的高度*/
        border-radius: 30px;
        outline: none;
    }
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;/*清除系统默认样式*/
        height: 20px;/*拖动块高度*/
        width: 20px;/*拖动块宽度*/
        background: #fff;/*拖动块背景*/
        border-radius: 50%; /*外观设置为圆形*/
        border: 2px solid #409eff; /*设置边框*/
    }
    input[type=range]::-webkit-slider-thumb:hover{
        width: 23px;
        height: 23px;
        cursor:pointer;
    }
    .su{
        position: absolute;
        left: 0;
        top: -30px;
    }
    .su span{
        background:#303133;
        color: #fff;
        border-radius: 4px;
        padding: 10px;
        z-index: 2000;
        font-size: 12px;
        line-height: 1.2;
        min-width: 10px;
        word-wrap: break-word;
    }
</style>