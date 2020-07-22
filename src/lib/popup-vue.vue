<template>
    <div v-if="isShow" >
        <div class="vue-overlay" @click="close"></div>
        <div class="vue-popup" :style="{'width': w, 'height': h}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'popup-vue',
    data(){
        return {
            isShow: false
        }
    },
    props: {
        w: {
            type: String,
            default: '80%'
        },
        h: {
            type: String,
            default: '25%'
        }
    },
    methods: {
        close(){
            this.isShow = false
        }
    }
}
</script>
<style scoped>
    .vue-overlay{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2001;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }
    .vue-popup{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        z-index: 2002;
        overflow-y: auto;
        background-color: #fff;
        border-radius: 5px;
    }
</style>