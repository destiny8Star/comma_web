<template>
    <div class="localService">
        <!-- 话费充值 start -->
        <div class="telephoneBox">
            <div class="telephone">
                <div class="textBox">
                    <h1><span>八折</span>话费充值</h1>
                    <div class="line"></div>
                    <p class="detail">点击生活app具有话费充值功能，VIP还可享8折充值优惠， 省钱即赚钱</p>
                </div>
                <img src="http://prod.dianjishenghuo.cn/img/product/BDFW-huafei@2x.png" alt="">
            </div>
        </div>
        <!-- 话费充值 end -->
        <!-- 观影 start -->
        <div class="movieBox">
            <h1>五折购票观影</h1>
            <p class="movieText">电影购票享优惠，智能定位，自动导航，就近影院随意选，会员享受五折观影优惠。</p>
            <img src="http://prod.dianjishenghuo.cn/img/product/movie.png" alt="">
        </div>
        <!-- 观影 end -->
        <!-- 住宿 start -->
        <div class="telephoneBox">
            <div class="telephone">
                <img src="http://prod.dianjishenghuo.cn/img/product/BTFW-zhusu@2x.png" alt="">
                <div class="textBox hotelText">
                    <div>
                        <h1><span>三折</span>就能住宿</h1>
                        <div class="line"></div>
                    </div>
                    <p class="hotel">出差办公、外出旅游，酒店住宿不可少，环境条件优先知晓。还 可享三折住宿，你是住呢还是住呢？帮你省钱，还省心</p>
                </div>
            </div>
        </div>
        <!-- 住宿 end -->

        <!-- 场景 start -->
        <div class="sceneBox">
            <div class="scene">
                <h1>多场景都适用的本地便民APP</h1>
                <div class="itemBox">
                    <div class="item" v-for="(ele,i) in itemList" :key="i">
                        <img :src="ele.icon" alt="">
                        <span>{{ele.text}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 场景 end -->
    </div>
</template>

<script>
    export default {
        name: "localService",
        data(){
            return {
                itemList: [
                    {id:1,icon:'http://prod.dianjishenghuo.cn/img/product/BDFW-CZ@2x.png',text: '八折充值'},
                    {id:2,icon:'http://prod.dianjishenghuo.cn/img/product/BDFW-yy@2x.png',text: '五折影院'},
                    {id:3,icon:'http://prod.dianjishenghuo.cn/img/product/BDSH-zs@2x.png',text: '三折住宿'},
                    {id:4,icon:'http://prod.dianjishenghuo.cn/img/product/BDFW-xy@2x.png',text: '信用查询'},
                    {id:5,icon:'http://prod.dianjishenghuo.cn/img/product/BDFW-sb@2x.png',text: '社保查询'},
                    {id:6,icon:'http://prod.dianjishenghuo.cn/img/product/BDSH-gjj@2x.png',text: '公积金查询'},
                    {id:7,icon:'http://prod.dianjishenghuo.cn/img/product/BDSH-gs@2x.png',text: '个税查询'}
                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    .localService {
        color: #3E3E4D;
        h1 {
            font-size: 30px;
            font-weight: 500;
            line-height: 45px;
            span {
                color: #FF6551;
            }
        }
        p {
            font-size: 16px;
            line-height: 24px;
        }
        .telephoneBox {
            width: 100vw;
            background: #fff;
            padding: 40px 0 20px;
            .telephone {
                width: 1200px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .line {
                    width: 88px;
                    height: 4px;
                    background: #7F99F5;
                    margin: 24px 0 48px;
                }
                .detail {
                    width: 412px;
                }
                img {
                    width: 538px;
                    height: 538px;
                }
                .hotel {
                    width: 448px;
                }
                .hotelText {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
            }

        }
        .movieBox {
            background: #F1F4FF;
            text-align: center;
            padding: 48px 0 54px;
            .movieText {
                margin: 32px auto 60px;
            }
            img {
                width: 722px;
            }
        }
        .sceneBox {
            width: 100vw;
            background: #F1F4FF;
            padding: 48px 0 54px;
            .scene {
                width: 1200px;
                text-align: center;
                margin: 0 auto;
                .itemBox {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .item {
                        display: flex;
                        flex-direction: column;
                        img {
                            width: 80px;
                            height: 80px;
                            margin: 68px 0 8px;
                        }
                        span {
                            font-size: 16px;
                            font-weight: 300;
                            line-height: 24px;
                        }
                    }
                }
            }
        }

    }
</style>