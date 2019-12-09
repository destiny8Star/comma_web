<template>
    <div class="newDetail">
        <navigation/>
        <div class="headImg">
            <img src="http://prod.dianjishenghuo.cn/img/news/XWZX-xwt@2x.jpeg" alt="">
            <div class="mask">
                <h1>新闻资讯</h1>
                <p>每一条资讯都是热点</p>
            </div>
        </div>
        <div class="detailContent">
            <div class="crumbs">
                <span class="far">新闻资讯</span>
                <img src="http://prod.dianjishenghuo.cn/img/news/XWYM-yjt@2x.png" alt="">
                <span>行业资讯</span>
            </div>
            <div class="content">

            </div>
        </div>


        <foot/>
    </div>
</template>

<script>
    import foot from '@/components/foot.vue'
    import navigation from '@/components/navigation.vue'

    export default {
        name: "newDetail",
        components: {
            navigation,//头部
            foot,//站点尾部

        },
    }
</script>

<style scoped lang="scss">
    .newDetail {
        color:rgba(62,62,77,1);
        .headImg {
            position: relative;
            img {
                width: 100vw;
            }
            .mask {
                width: 100%;
                height: 100%;
                background:rgba(40,40,52,.56);
                position: absolute;
                top: 0;
                left: 0;
                color:rgba(255,255,255,1);
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                h1 {
                    font-size: 72px;
                    font-weight: 600;
                    line-height: 108px;
                }
                p {
                    font-size: 36px;
                    font-weight: 300;
                    line-height: 54px;
                    margin-top: 8px;
                }
            }
        }
        .detailContent {
            width: 1200px;
            margin: 0 auto;
            .crumbs {
                margin-top: 32px;
                font-size: 12px;
                font-weight: 500;
                line-height: 18px;
                display: flex;
                align-items: center;
                .far {
                    color: #4A90E2;
                }
                img {
                    width: 12px;
                    height: 12px;
                    margin: 0 3px;
                }
            }
            .content {
                padding: 72px 46px;
            }
        }
    }
</style>