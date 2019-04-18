<template>
    <mt-header :title="title">
        <div @click="goBack" slot="left" v-if="show">
            <mt-button icon="back">返回</mt-button>
        </div>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    },
    props:['title','show']
}
</script>