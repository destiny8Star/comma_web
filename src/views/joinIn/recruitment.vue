<template>
    <div class="recruitment">
        <navigation/>
        <!--banner 开始-->
        <div class="bannerBox">
            <div class="banners">
                <div class="imgBox">
                    <div class="box" v-for="(ele,i) in bannerList">
                        <img :src="ele.imgUrl" alt="">
                        <div class="mask">
                            <h1>{{ele.title}}</h1>
                            <p>{{ele.text}}</p>
                            <div>{{ele.btn}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--banner结束-->

        <!-- 权益模块 start -->
        <div class="causeBox">
            <div class="cause">
                <h1>点击生活，诚邀入驻</h1>
                <p>一个平台解决商家开店的所有问题</p>
                <div class="itemBox">
                    <div class="item" v-for="(ele,i) in causeList" :key="i">
                        <img :src="ele.icon" alt="">
                        <h3>{{ele.title}}</h3>
                        <p>{{ele.text}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 原因模块 end -->

        <!-- 指南-如何加入 start -->
        <div class="guideBox">
            <div class="guide">
                <h1>如何加入点击生活</h1>
                <div class="itemBox">
                    <div class="item" v-for="(ele,i) in guideList" :key="i">
                        <img :src="ele.icon" alt="" class="item">
                        <p v-html="ele.text"></p>
                    </div>
                </div>
                <!--<div class="addBox">-->
                    <!--<div class="add">-->
                        <!--<h2>为商家提供全行业应用场景</h2>-->
                        <!--<p>包括但不限于零售、餐饮、休娱、美业、酒店等行业，支持一键下单、扫码点餐、在线购票、会员锁定、预约入住等应用 场景。</p>-->
                        <!--<p class="detail">成为平台商家需要符合以下条件：<br>1. 有实体门店且能长期稳定经营 <br>2. 拥有良好的商业信誉、口碑 <br>3. 符合国家相关法律、法规规定，具有正规商家资质 <br>4. 拥有正规营业许可，包括但不限于经营许可证、特许证件等 <br>5. 接受平台商家入驻相关协议和管理规范 </p>-->
                        <!--<div class="btn">立即加入</div>-->
                    <!--</div>-->
                    <!--<img src="http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-rhjr@2x.jpeg" alt="">-->
                <!--</div>-->
                <div class="sceneBox">
                    <h2>为商家提供全行业应用场景</h2>
                    <p>包括但不限于零售、餐饮、休娱、美业、酒店等行业，支持一键下单、扫码点餐、在线购票、会员锁定、预约入住等应用场景。</p>
                    <div class="sceneItemBox">
                        <div class="item" v-for="(ele,i) in secneList" :key="i">
                            <img :src="ele.imgUrl" alt="">
                            <p>{{ele.text}}</p>
                        </div>
                    </div>
                </div>
                <div class="condition">
                    <h2>入驻条件</h2>
                    <div class="eachBox">
                        <div class="each" v-for="(ele,i) in conditionList" :key="i">
                            <p>{{ele.text}}</p>
                        </div>
                    </div>
                </div>
                <div class="addBtn">立即加入</div>

            </div>
        </div>
        <!-- 指南-如何加入 end -->

        <!-- 优秀商家 start -->
        <div class="excellentBox">
            <div class="excellent">
                <h1>优秀商家</h1>
                <p>加入点击生活，与平台携手共赢、快速成长、共创未来</p>
                <div class="itemBox">
                    <div class="imgs" v-for="(ele,i) in excellentList" :key="i">
                        <img :src="ele.imgUrl" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 优秀商家 end -->

        <foot/>
    </div>
</template>

<script>
    import foot from '@/components/foot.vue'
    import navigation from '@/components/navigation.vue'
    export default {
        name: "recruitment",
        components: {
            navigation,
            foot,

        },
        data(){
            return{
                // 轮播图片
                "bannerList": [
                    {
                        id: 1,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-banner@2x.jpg',
                        title: '点击生活，诚邀入驻',
                        text: '一个平台解决商家开店的所有问题',
                        btn: '申请入驻'
                    }
                ],
                // 原因
                "causeList": [
                    {
                        id: 1,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-icon-xsbg@2x.png',
                        title: '线上曝光',
                        text: '平台提供免费广告位，增加商家曝光率。'
                    },
                    {
                        id: 2,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-icon-xszc@2x.png',
                        title: '销售支持',
                        text: '渠道推广机会，线上+线下联合促销。'
                    },
                    {
                        id: 3,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-icon-kjsy@2x.png',
                        title: '跨界收益',
                        text: '享受消费者离店后的消费流水，实现跨界收益。'
                    },
                    {
                        id: 4,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-icon-lrts@2x.png',
                        title: '利润提升',
                        text: '获得消费者消费后的平台返佣。'
                    },
                    {
                        id: 5,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-icon-pingtai@2x.png',
                        title: '客源裂变',
                        text: '用户自发社交裂变，让商家获得翻倍客源。'
                    },
                    {
                        id: 6,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-icon-quyu@2x.png',
                        title: '成本降低',
                        text: '节省商家人力、获客、宣传等运营成本。'
                    },
                    {
                        id: 7,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-icon-huankuan@2x.png',
                        title: '后台权限',
                        text: '获得点击生活商家版所有权限，轻松管理店铺。'
                    },
                    {
                        id: 8,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-icon-shoukuan@2x.png',
                        title: '在线客服',
                        text: '一对一客服，7×24小时处理商家问题。'
                    }
                ],
            //     指南
                "guideList": [
                    {id:1,icon: 'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-icon-zc@2x.png',text:'1. <span>注册</span>点击生活商家账号，并完成<span>企业实名认证</span>'},
                    {id:2,icon: 'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-icon-tj@2x.png',text:'2. 提交入驻申请'},
                    {id:3,icon: 'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-icon-wc@2x(1).png',text:'3. 完成业务沟通'},
                    {id:4,icon: 'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-icon-wc@2x.png',text:'4. 审核完成，成为点击生活合作伙伴'},
                ],
            //    优秀商家
                "excellentList": [
                    {id:1,imgUrl:'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-logo-sj1@2x.png'},
                    {id:2,imgUrl:'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-logo-sj2@2x.png'},
                    {id:3,imgUrl:'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-logo-sj3@2x.png'},
                    {id:4,imgUrl:'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-logo-sj4@2x.png'},
                    {id:5,imgUrl:'http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-logo-sj5@2x.png'},
                ],
            //    应用场景
                "secneList": [
                    {id:1,imgUrl:'http://prod.dianjishenghuo.cn/img/joinIn/SMDD@2x.png',text:'扫码点单'},
                    {id:2,imgUrl:'http://prod.dianjishenghuo.cn/img/joinIn/YYRZ@2x.png',text:'预约入住'},
                    {id:3,imgUrl:'http://prod.dianjishenghuo.cn/img/joinIn/ZXGP@2x.png',text:'在线购票'}
                ],
            //    入驻条件
                "conditionList": [
                    {id:1,text:'1.有实体门店且能长期稳定经营拥有良好的商业信誉、口碑'},
                    {id:2,text:'2.符合国家相关法律、法规规定，具有正规商家资质'},
                    {id:3,text:'3.拥有正规营业许可，包括但不限于经营许可证、特许证件等'},
                    {id:4,text:'4.接受平台商家入驻相关协议和管理规范'}
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .recruitment {
        width: 100%;
        color: #3E3E4D;
        background: #fff;
        text-align: center;
        /*轮播*/
        .bannerBox {
            /*width: 100%;*/
            position: relative;
            background: rgba(0, 0, 0, 0.6);
            background: linear-gradient(to right, #00039F 50%, #0242F4 100%);
            .banners {
                width: 100vw;
                height: auto;
                margin: 0 auto;
                .imgBox {
                    .box {
                        position: relative;
                        img {
                            width: 100vw;
                            height: auto;
                        }
                        .mask {
                            width: 100%;
                            height: 100%;
                            background: rgba(40, 40, 52, .56);
                            position: absolute;
                            top: 0;
                            left: 0;
                            color: #fff;
                            text-align: center;
                            display: flex;
                            justify-content: center;
                            flex-direction: column;
                            h1 {
                                font-size: 60px;
                                font-weight: 600;
                                line-height: 90px;
                            }
                            p {
                                font-size: 48px;
                                font-weight: 300;
                                line-height: 72px;
                                margin: 24px auto 28px;
                            }
                            div {
                                width: 216px;
                                line-height: 48px;
                                background: #FF6551;
                                border-radius: 5px;
                                margin: 0 auto;
                                font-size: 24px;
                                font-weight: 500;
                            }
                            div:hover {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
        /* 原因 */
        .causeBox {
            .cause {
                width: 1200px;
                padding: 120px 0 132px;
                margin: 0 auto;
                h1 {
                    font-size: 30px;
                    font-weight: 600;
                    line-height: 45px;
                }
                p {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    margin-top: 8px;
                }
                .itemBox {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    margin-top: -28px;
                    .item {
                        width: 25%;
                        margin-top: 82px;
                        border-right: 1px solid #CBCDD6;
                        img {
                            width: 70px;
                            height: 70px;
                        }
                        h3 {
                            font-size: 16px;
                            font-weight: 500;
                            line-height: 24px;
                            margin-top: 20px;
                        }
                        p {
                            width: 169px;
                            font-size: 12px;
                            font-weight: 300;
                            line-height: 16px;
                            margin: 7px auto 0;
                        }
                    }
                    .item:nth-child(4n) {
                        border: 0;
                    }
                }
            }
        }
        /* 指南 */
        .guideBox {
            .guide {
                width: 1200px;
                margin: 0 auto;
                color: rgba(0,0,0,1);
                padding-bottom: 72px;
                h1 {
                    font-size: 30px;
                    font-weight: 600;
                    line-height: 45px;
                }
                .itemBox {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-around;
                    margin: 35px 0 48px;
                    background: url("http://prod.dianjishenghuo.cn/img/joinIn/SJRZ-jiaru@2x.png") no-repeat -2px 107px;
                    background-size: 100% auto;
                    .item {
                        width: 25%;
                        img {
                            width: 106px;
                            height: 106px;
                            margin-bottom: 39px;
                        }
                        p {
                            font-size: 16px;
                            font-weight: 300;
                            color: rgba(0,0,0,1);
                            line-height: 24px;
                            margin: 0 auto;
                            span {
                                color: #7F99F5;
                            }
                        }
                        p:first-child {
                            width: 189px;
                        }
                    }
                }
                .sceneBox {
                    h2 {
                        font-size: 24px;
                        font-weight: 600;
                        line-height: 36px;
                    }
                    p {
                        font-size: 14px;
                        margin-top: 12px;
                        font-weight: 300;
                        line-height: 24px;
                    }
                    .sceneItemBox {
                        width: 710px;
                        margin: 48px auto;
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-around;
                        .item {
                            img {
                                width: 203px;
                                height: 190px;
                            }
                            p {
                                font-size: 16px;
                                line-height: 24px;
                            }
                        }
                    }
                }
                .condition {
                    h2 {
                        font-size: 24px;
                        font-weight: 600;
                        line-height: 36px;
                        margin-bottom: 4px;
                    }
                    .eachBox {
                        width: 774px;
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        margin: 0 auto;
                        .each {
                            width: 375px;
                            height: 52px;
                            padding: 0 16px;
                            font-size: 14px;
                            font-weight: 500;
                            border-radius: 2px;
                            border: 1px solid rgba(255, 166, 81, .5);
                            margin-top: 32px;
                            display: flex;
                            align-items: center;
                            justify-content: left;
                            text-align: center;
                        }
                        .each:hover {
                            border: 1px solid transparent;
                            color: #FFA651;
                            box-shadow: 7px 15px 24px 4px rgba(255, 166, 81, 0.08);
                            /*filter: blur(9px);*/
                        }
                    }
                }
                .addBtn {
                    width: 154px;
                    line-height: 42px;
                    background: rgba(255,166,81,1);
                    border-radius: 6px;
                    font-size: 24px;
                    font-weight: 500;
                    color: #fff;
                    letter-spacing: 3px;
                    margin: 48px auto 0;
                }
                .addBtn:hover {
                    cursor: pointer;
                }
                .addBox {
                    text-align: left;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    img {
                        width: 410px;
                        height: 310px;
                        margin-left: 48px;
                    }
                    .add {
                        h2 {
                            font-size: 24px;
                            font-weight: 500;
                            line-height: 36px;
                        }
                        p {
                            font-size: 14px;
                            font-weight: 300;
                            line-height: 24px;
                            margin: 8px 0 16px;
                        }
                        .detail {
                            font-size: 12px;
                            line-height: 23px;
                            letter-spacing: 1px;
                        }
                        .btn {
                            width: 154px;
                            line-height: 42px;
                            background: rgba(255,101,81,1);
                            border-radius: 6px;
                            font-size: 24px;
                            font-weight:500;
                            color: rgba(255,255,255,1);
                            letter-spacing: 3px;
                            text-align: center;
                            margin-top: 24px;
                        }
                    }
                }
            }
        }
        /* 优秀 */
        .excellentBox {
            background: #EFF2FC;
            padding: 72px 0 84px;
            color:rgba(0,0,0,1);
            .excellent {
                width: 1200px;
                background: #fff;
                margin: 0 auto;
                padding-top: 72px;
                h1 {
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 36px;
                }
                p {
                    font-size: 18px;
                    font-weight: 300;
                    margin: 24px 0 60px;
                }
                .itemBox {
                    display: flex;
                    .imgs {
                        width: 25%;
                        height: 146px;
                        /*padding: 0 70px;*/
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img {
                            width: 152px;
                            height: 45px;
                        }
                    }
                    .imgs:nth-child(2){
                        img {
                            width: 116px;
                            height: 98px;
                        }
                    }
                    .imgs:nth-child(3){
                        img {
                            width: 96px;
                            height: 109px;
                        }
                    }
                    .imgs:nth-child(4){
                        img {
                            width: 161px;
                            height: 55px;
                        }
                    }
                    .imgs:nth-child(5){
                        img {
                            width: 124px;
                            height: 42px;
                        }
                    }
                    .imgs:hover {
                        box-shadow: 0 7px 10px 0 rgba(0,0,0,0.14);
                    }
                }
            }
        }
    }
</style>