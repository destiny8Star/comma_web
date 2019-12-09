<template>
    <div class="joinIn">
        <navigation/>

        <!--banner 开始-->
        <div class="bannerBox">
            <div class="banners">
                <!--<div class="imgBox" @mouseenter="stop" @mouseleave="goOn">-->
                <div class="imgBox">
                    <div class="box" v-for="(ele,i) in bannerList" :class="{boxAct:imgIndex===i}" :key="i">
                        <img :src="ele.imgUrl" alt="">
                        <div class="mask">
                            <h1>{{ele.title}}</h1>
                            <p>{{ele.text}}</p>
                            <div v-show="ele.btn">{{ele.btn}}</div>
                        </div>
                    </div>
                </div>
                <div class="pageBox">
                    <div @click="pageClick(k)" class="page" :class="{pageAct: imgIndex===k}"
                         v-for="(e,k) in bannerList.length"></div>
                </div>
            </div>
        </div>
        <!--banner结束-->

        <!-- 原因模块 start -->
        <div class="causeBox">
            <div class="cause">
                <h1>为什么要成为点击的合作伙伴</h1>
                <p>服务商<span>8大权益</span>，打造多维管道收益 </p>
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

        <!-- 计划 start -->
        <div class="planBox">
            <img class="planBg" src="http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-bj@2x.jpeg" alt="">
            <div class="maskBox">
                <div class="mask">
                    <h1>服务商扶持计划</h1>
                    <div class="itemBox">
                        <div class="item"
                             @mouseenter="planIndex=i"
                             v-for="(ele,i) in planList"
                             :key="i">
                            <img :src="[planIndex==i?ele.icon_select:ele.icon]" alt="">
                            <h4 :class="{planAct:planIndex==i}">{{ele.text}}</h4>
                        </div>
                    </div>
                    <p v-show="planIndex==i" v-for="(ele,i) in planTextList" :key="i">
                        {{ele.detail}}
                    </p>
                </div>
            </div>
        </div>
        <!-- 计划 end -->

        <!-- 条件 start -->
        <div class="condition">
            <img src="http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-tiaojian@2x.png" alt="">
        </div>
        <!-- 条件 end -->

        <!-- 区域 start -->
        <!--<div class="areaBox">-->
            <!--<div class="area">-->
                <!--<div class="title">-->
                    <!--<h1>区域招商负责人</h1>-->
                <!--</div>-->
                <!--<div class="itemBox">-->
                    <!--<div class="item" v-for="(ele,i) in areaList" :key="i">-->
                        <!--<p>{{ele.name}} {{ele.phone}}</p>-->
                        <!--<div class="imgBox">-->
                            <!--<img-->
                                    <!--:src="ele.qrCode"-->
                                    <!--alt=""-->
                                    <!--@mouseenter="ele.flag=true"-->
                                    <!--@mouseleave="ele.flag=false">-->
                        <!--</div>-->
                        <!--<div class="address" :class="{hide:ele.flag}">负责区域：{{ele.area}}</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <!-- 区域 end -->

        <!-- 申请 start -->
        <!--<div class="applyBox">-->
            <!--<h1>申请成为服务商</h1>-->
            <!--<div class="content">-->
                <!--<div class="item">-->
                    <!--<p>姓名<span>*</span></p>-->
                    <!--<el-input v-model="name"></el-input>-->
                <!--</div>-->
                <!--<div class="item">-->
                    <!--<p>电话<span>*</span></p>-->
                    <!--<el-input v-model="phone"></el-input>-->
                <!--</div>-->
                <!--<div class="item">-->
                    <!--<p>意向城市<span>&nbsp;</span></p>-->
                    <!--<el-select @change="choProvince" v-model="province" placeholder="省">-->
                        <!--<el-option-->
                                <!--v-for="item in options"-->
                                <!--:key="item.value"-->
                                <!--:label="item.label"-->
                                <!--:value="item.value">-->
                        <!--</el-option>-->
                    <!--</el-select>-->
                    <!--<el-select v-model="city" placeholder="市">-->
                        <!--<el-option-->
                                <!--v-for="item in cityList"-->
                                <!--:key="item.value"-->
                                <!--:label="item.label"-->
                                <!--:value="item.value">-->
                        <!--</el-option>-->
                    <!--</el-select>-->
                <!--</div>-->
                <!--<div class="item">-->
                    <!--<p></p><el-button type="primary" @click="submit">提交</el-button>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <!-- 申请 end -->


        <foot/>
    </div>
</template>

<script>
    import foot from '@/components/foot.vue'
    import navigation from '@/components/navigation.vue'

    import options from '@/assets/js/country-level2-data.js'

    export default {
        name: "joinIn",
        components: {
            navigation,
            foot,
        },
        data() {
            return {
                // 轮播图片
                "bannerList": [
                    {
                        id: 1,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-banner1@2x.jpg',
                        title: '点击生活服务商火热招募中',
                        text: '与代理商伙伴建立共赢发展模式，享受社交新零售红利 ',
                        btn: '申请成为服务商'
                    },
                    {
                        id: 2,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-banner2@2x.jpg',
                        title: '新零售',
                        text: '你身边的投资风口'
                    }
                ],
                "imgIndex": 0,
                "timer": '',//定时器
                // 原因
                "causeList": [
                    {
                        id: 1,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-xiaofei@2x.png',
                        title: '消费分佣',
                        text: '享受旗下所有用户在平台的消费分佣。'
                    },
                    {
                        id: 2,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-shengji@2x.png',
                        title: '升级奖励',
                        text: '享受所旗下所有用户升级会员PLUS的奖励。 '
                    },
                    {
                        id: 3,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-zhaoshang@2x.png',
                        title: '推荐佣金',
                        text: '享受推荐平级服务商佣金。'
                    },
                    {
                        id: 4,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-tuiguang@2x.png',
                        title: '推广补贴',
                        text: '服务商推荐商家、用户，享受推广补贴。'
                    },
                    {
                        id: 5,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-pingtai@2x.png',
                        title: '平台分红',
                        text: '服务商享受平台收益的分红。'
                    },
                    {
                        id: 6,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-quyu@2x.png',
                        title: '区域分红',
                        text: '城市服务商享受所在区域总收益分红。'
                    },
                    {
                        id: 7,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-huankuan@2x.png',
                        title: '还款分润',
                        text: '享受旗下所有用户还款分润。'
                    },
                    {
                        id: 8,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-shoukuan@2x.png',
                        title: '收款分润',
                        text: '享受旗下所有用户收款分润。'
                    }
                ],
                //    计划
                "planList": [
                    {
                        id: 1,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-chanpin@2x.png',
                        text: '产品支持',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-chanpin-xj@2x.png'
                    },
                    {
                        id: 2,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-jishu@2x.png',
                        text: '技术支持',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-jishu-xj@2x.png'
                    },
                    {
                        id: 3,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-tuiguang@2x.png',
                        text: '广告支持',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-tuiguang-xj@2x.png'
                    },
                    {
                        id: 4,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-xiaoshou@2x.png',
                        text: '运营支持',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-xiaoshou-xj@2x.png'
                    },
                    {
                        id: 5,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-peixun@2x.png',
                        text: '培训支持',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-peixun-xj@2x.png'
                    },
                    {
                        id: 6,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-wuliao@2x.png',
                        text: '物料支持',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-wuliao-xj@2x.png'
                    },
                    {
                        id: 7,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-fandian-wx@2x.png',
                        text: '会销支持',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-fandian@2x.png'
                    },
                    {
                        id: 8,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-shouhou@2x.png',
                        text: '客服支持',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-shouhou-xj@2x.png'
                    },
                    {
                        id: 9,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-zhudi@2x.png',
                        text: '驻地扶持',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-zhudi-xj@2x.png'
                    },
                    {
                        id: 10,
                        icon: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-quyu@2x.png',
                        text: '区域独享',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-fuchi-quyu-xj@2x.png'
                    },
                ],
                "planTextList": [
                    {id: 1, detail: '平台为服务商提供安全可靠的产品，迎合市场需求的优化和定期、稳定的更新，帮助服务商抓住客户资源。'},
                    {id: 2, detail: '为服务商户提供7×24小时在线技术服务，保障问题高效、及时的解决，让服务商、客户没有后顾之忧。'},
                    {id: 3, detail: '总部不定期在全国或者当地进行市场推广活动扩大知名度与影响力，包括：城市招商会，城市会议，公司沙龙等。'},
                    {id: 4, detail: '为服务商提供运营支持，帮助服务商建立完善运营体系，打造核心竞争力。'},
                    {id: 5, detail: '总部针对服务商需求开展相关培训，同时渠道经理会定期到服务商公司给予落地扶持，快速提高服务商团队的战斗力。'},
                    {id: 6, detail: '总部根据服务商的情况定期或者不定期给予各类广宣物料支持、企宣物料支持，帮助代理更专业、更稳健的在当地拓展业务，打开市场。'},
                    {id: 7, detail: '总部针对不同区域提供多种应用场景，不定期开展招商会、城市会议等帮助销售团队开拓市场。'},
                    {id: 8, detail: '打造智能化客服体系，多方位协助服务商解决问题，提供活动报备支持和服务商市场运营支持。'},
                    {id: 9, detail: '总部提供各地区人口数据、零售总额等市场数据分析支持，帮助服务商了解地区市场体量和发展前景。'},
                    {id: 10, detail: '每个市设立唯一城市服务商，享受区域分红和流水，保证市场的规范性和服务商的利益最大化。'}
                ],
                "planIndex": 0,
                //    区域负责人
                "areaList": [
                    {
                        id: 1,
                        name: '韩经理',
                        phone: '13357141334',
                        weChat: 'KBSH6012',
                        qrCode: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-han.png',
                        area: '华东',
                        flag: false
                    },
                    {
                        id: 2,
                        name: '丁经理',
                        phone: '13362893344',
                        weChat: 'ka555666999',
                        qrCode: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-ding.png',
                        area: '华南',
                        flag: false
                    },
                    {
                        id: 3,
                        name: '杨经理',
                        phone: '13396713545',
                        weChat: 'hxxyxf888',
                        qrCode: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-yang.png',
                        area: '华西',
                        flag: false
                    },
                    {
                        id: 4,
                        name: '雷经理',
                        phone: '18258476513',
                        weChat: 'LEIZHEN370713390',
                        qrCode: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-lei.png',
                        area: '华北',
                        flag: false
                    },
                    {
                        id: 5,
                        name: '张经理',
                        phone: '13396713449',
                        weChat: 'a724785955',
                        qrCode: 'http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-zhang.jpg',
                        area: '华中',
                        flag: false
                    }
                ],
                options: options,
                province: '',
                city: '',
                name: '',
                phone: '',
                cityList: [],
            }
        },
        methods: {
            //弹窗
            open(message) {
                this.$alert(message, '提示', {
                    confirmButtonText: '确定',
                });
            },
            /**
             * 提交按钮
             */
            submit(){
                if(this.name==''){
                    this.open('请输入姓名');
                    return false;
                }
                if(this.phone==''){
                    this.open('请输入电话');
                    return false;
                }
            },
            /**
             * banner按钮
             */
            pageClick(i) {
                console.log(i);
                this.imgIndex = i;
            },
            /**
             * 切换banner
             */
            move() {
                this.imgIndex++;
                if (this.imgIndex === this.bannerList.length) {
                    this.imgIndex = 0;
                }
                if (this.imgIndex < 0) {
                    this.imgIndex = this.bannerList.length - 1;
                }
            },
            /**
             * 停止轮播
             */
            stop() {
                console.log("停止");
                var that = this;
                clearInterval(that.timer);
            },
            /**
             * 继续轮播
             */
            goOn() {
                console.log("继续");
                var that = this;
                this.timer = setInterval(that.move, 3000);
            },
            /**
             * 选择省
             */
            choProvince(){
                console.log(this.province);
                this.cityList = this.options.filter(ele=>{
                    return ele.label === this.province;
                });
                this.cityList = this.cityList[0].children;
            }
        },
        created() {
            var that = this;
            this.timer = setInterval(that.move, 3000);
        },
        mounted() {
            document.documentElement.scrollTop = 0;
        },
        destroyed() {
            clearInterval(this.timer);　　// 清除定时器
            this.timer = null;
        },
    }
</script>

<style lang="scss">
    .joinIn {
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
                position: relative;
                .imgBox {
                    position: relative;
                    overflow: hidden;
                    .box {
                        overflow: hidden;
                        float: left;
                        display: none;
                        /*opacity: 0;*/
                        transition: all 1s;
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
                                background: rgba(77, 113, 243, 1);
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
                    .boxAct {
                        display: block;
                        /*opacity: 1;*/
                        animation: opacityWay 1s ease-in-out;
                    }
                    .box:after {
                        content: '';
                        height: 0;
                        overflow: hidden;
                    }
                    @keyframes opacityWay {
                        0% {
                            opacity: 0.6;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
                }
                .pageBox {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    z-index: 999;
                    display: flex;
                    align-items: center;
                    transform: translateX(-50%);
                    .page {
                        width: 14px;
                        height: 6px;
                        background: #888888;
                        border-radius: 2px;
                        margin: 0 5px;
                        transition: all .2s;
                    }
                    .pageAct {
                        background: #fff;
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
                    span {
                        color: #FF6551;
                        font-size: 20px;
                    }
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
        /* 计划 */
        .planBox {
            position: relative;
            .planBg {
                width: 100vw;
            }
            .maskBox {
                color: #fff;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(0, 0, 0, .4);
                .mask {
                    width: 1200px;
                    height: 100%;
                    margin: 0 auto;
                    padding: 30px 0 60px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    h1 {
                        font-size: 30px;
                        font-weight: 600;
                        line-height: 45px;
                    }
                    .itemBox {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .item {
                            img {
                                width: 68px;
                                height: 68px;
                            }
                            h4 {
                                font-size: 16px;
                                font-weight: 300;
                                line-height: 24px;
                                color: #CBCDD6;
                            }
                            .planAct {
                                color: #fff;
                            }
                        }
                    }
                    p {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                        text-align: left;
                        margin-top: 42px;
                    }
                }
            }
        }
        /* 条件 */
        .condition {
            img {
                width: 100vw;
            }
        }
        /* 区域 */
        .areaBox {
            .area {
                width: 1200px;
                margin: 0 auto;
                padding: 120px 0;
                .title {
                    width: 299px;
                    height: 56px;
                    background: url("http://prod.dianjishenghuo.cn/img/joinIn/FWSJM-zhaoshang-dianzhui@2x.png");
                    background-size: 100% 100%;
                    padding-top: 10px;
                    margin: 0 auto;
                    h1 {
                        font-size: 30px;
                        font-weight: 500;
                        line-height: 45px;
                    }
                }
                .itemBox {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 40px;
                    .item {
                        width: 230px;
                        padding: 32px 24px 12px;
                        font-size: 16px;
                        font-weight: 500;
                        color: rgba(127, 153, 245, 1);
                        background: #F3F5FD;
                        p {
                            line-height: 24px;
                            text-align: left;
                        }
                        .imgBox {
                            display: flex;
                            img {
                                width: 48px;
                                height: 48px;
                                transition: all 1s;
                            }
                            img:hover {
                                transform: scale(3, 3);
                                transform-origin: 0 0 0;
                                box-shadow: 0 0 12px 0 rgba(51, 51, 51, 0.2);
                            }
                        }

                        .address {
                            width: 182px;
                            line-height: 48px;
                            background: rgba(255, 255, 255, 1);
                            border-radius: 2px;
                            margin-top: 15px;
                        }
                        .hide {
                            opacity: 0;
                        }
                    }
                }
            }
        }
        /* 申请 */
        .applyBox {
            width: 1200px;
            margin: 0 auto;
            h1 {
                font-size: 30px;
                font-weight: 600;
                line-height: 45px;
            }
            .content {
                width: 640px;
                height: 244px;
                padding: 40px 0 24px 88px;
                box-shadow: 0 2px 30px 0 rgba(0,0,0,0.14);
                margin: 60px auto 72px;
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: center;
                .item {
                    font-size: 16px;
                    font-weight: 300;
                    line-height: 24px;
                    display: flex;
                    align-items: center;
                    margin: 24px 0;
                    p {
                        width: 78px;
                        margin-right: 15px;
                        text-align: right;
                        span {
                            color: #FF6551;
                            margin-left: 2px;
                        }
                    }
                    .el-input {
                        width: 364px;
                        height: 28px;
                        .el-input__inner {
                            height: 28px !important;
                            line-height: 28px !important;
                        }
                    }
                    .el-select {
                        margin-right: 12px;
                        .el-input {
                            width: 176px;
                            height: 28px;
                            .el-input__inner {
                                width: 176px;
                                height: 28px !important;
                                line-height: 28px !important;
                            }
                            .el-input__icon {
                                line-height: 28px;
                            }
                        }
                    }
                    .el-button {
                        width: 90px;
                        line-height: 24px;
                        background: rgba(55,149,255,1);
                        border-radius: 3px;
                        padding: 0;
                    }
                }
            }
        }
    }
</style>