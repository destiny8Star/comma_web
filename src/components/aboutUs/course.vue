<template>
    <div class="course">
        <div class="imgShow">
            <img src="http://prod.dianjishenghuo.cn/img/aboutUs/FZLL-fazhan@2x.png" alt="">
        </div>
        <div class="itemBox">
            <h1>荣誉资质+合规体系</h1>
            <p>做让用户、服务商、商家都放心的平台</p>
            <div class="item">
                <img :src="ele.imgUrl" alt="" v-for="(ele,i) in qualification" :key="i">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "course",
        data(){
            return {
                qualification: [
                    {id:1,imgUrl:'http://prod.dianjishenghuo.cn/img/aboutUs/FZLC-yingyezhizhao@2x.png'},
                    {id:2,imgUrl:'http://prod.dianjishenghuo.cn/img/aboutUs/FZLC-guojiyuming@2x.png'},
                    {id:3,imgUrl:'http://prod.dianjishenghuo.cn/img/aboutUs/FZLC-guojiayuming@2x.png'},
                    {id:4,imgUrl:'http://prod.dianjishenghuo.cn/img/aboutUs/FZLC-ruanzhu@2x.png'}
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
.course {
    .imgShow {
        padding: 0 33px;
        img {
            width: 100%;
        }
    }
    .itemBox {
        margin: 72px 0;
        color: #3E3E4D;
        text-align: center;
        h1 {
            font-size: 30px;
            font-weight: bold;
            line-height: 45px;
        }
        p {
            font-size: 16px;
            font-weight: 300;
            line-height: 24px;
            margin-top: 6px;
        }
        .item {
            margin-top: 48px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img {
                width: 227px;
                height: 315px;
            }
        }
    }
}
</style>