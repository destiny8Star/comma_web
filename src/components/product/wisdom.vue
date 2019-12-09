<template>
    <div class="wisdom">
        <!-- APP功能介绍 -->
        <div class="skillBox">
            <h1>智慧商圈APP功能介绍</h1>
            <div class="itemBox">
                <div class="item" v-for="(ele,i) in skillList" :key="i">
                    <img :src="ele.icon" alt="">
                    <h2>{{ele.title}}</h2>
                    <p>{{ele.detail}}</p>
                </div>
            </div>
        </div>
        <!-- 扫码下载 -->
        <div class="qrCodeBox">
            <img src="http://prod.dianjishenghuo.cn/img/product/saomatu@2x.png" alt="">
            <!--<div class="maskBox">-->
                <!--<div class="mask">-->
                    <!--<div class="content">-->
                        <!--<div class="textBox">-->
                            <!--<p>Click on Life<br> Better Life</p>-->
                            <!--<span>点击一下 美好生活</span>-->
                        <!--</div>-->
                        <!--<div class="downBox">-->
                            <!--<div class="down">-->
                                <!--<img src="http://prod.dianjishenghuo.cn/img/product/icon.png" alt="">-->
                                <!--<span @click="showCode = true">下载APP</span>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div @click="showCode = false" class="qrCode" :class="{qrCodeAct:showCode}">-->
                            <!--<img src="http://prod.dianjishenghuo.cn/img/product/qrCode.png" alt="">-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        </div>
        <!-- 客+商  -->
        <div class="guestBox">
            <div class="guest">
                <h1>技术重构 客+商互联</h1>
                <h3>技术改写零售，商圈共享未来</h3>
                <div class="showBox">
                    <img src="http://prod.dianjishenghuo.cn/img/product/jishuchonggou@2x.png" alt="">
                    <p class="showText">1 商圈生态闭环系统，根据大数据5大特点：大量、高速、多样、高价值、真实性，对消费者行为与意向进行大数据分析。</p>
                    <p class="showText">2 拥有用户智能定位、商家地图导航等一体化技术性功能。</p>
                    <p class="showText">3 客商结构重新定义，让消费者与商家实现双向角色转换，助力商家高效准确引流。</p>
                </div>
            </div>
        </div>
        <!-- 咨询 -->
        <div class="refer">
            <p>立即咨询，即刻加入智慧商圈</p>
            <a class="referBtn" href="http://p.qiao.baidu.com/cps/chat?siteId=13334890&userId=25453446&cp=&cr=&cw=wz">免费咨询</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wisdom",
        data(){
            return {
                //功能介绍
                skillList:[
                    {id:1,icon:'http://prod.dianjishenghuo.cn/img/product/tuijian@2x.png',title:'就近推荐',detail:'基于用户定位和消费习惯就近推荐商圈商家，提高客流准确度，增加商家效益'},
                    {id:2,icon:'http://prod.dianjishenghuo.cn/img/product/daohang@2x.png',title:'商家导航',detail:'用户导航直达目标商家，提高用户寻店效率和商家引流效益'},
                    {id:3,icon:'http://prod.dianjishenghuo.cn/img/product/yuding@2x.png',title:'线上预订',detail:'避免用户枯等燥等，提升用户体验感，降低商家对接客户成本'},
                    {id:4,icon:'http://prod.dianjishenghuo.cn/img/product/diandan@2x.png',title:'扫码点单',detail:'省去服务员记单过程，节省餐厅菜单成本、沟通成本，提高用户点单率'},
                    {id:5,icon:'http://prod.dianjishenghuo.cn/img/product/jiezhang@2x.png',title:'自助结账',detail:'用户点单后自助结账，免排队，免等待，提高商家翻台率'}
                ],
                // 展示二维码
                showCode: false,
            }
        },
        methods:{

        }

    }
</script>

<style scoped lang="scss">
.wisdom {
    padding: 89px 0 0 0;
    color: #3E3E4D;
    text-align: center;
    background: linear-gradient(180deg,#FCFCFC 0%,#F8F8F8 100%);
    /* 功能介绍 */
    .skillBox {
        width: 1200px;
        margin: 0 auto;
        h1 {
            font-size: 30px;
            font-weight: 500;
            line-height: 45px;
        }
        .itemBox {
            display: flex;
            align-content: center;
            justify-content: space-between;
            margin-top: 48px;
            .item {
                width: 220px;
                height: 322px;
                padding: 0 8px;
                box-shadow: 0 2px 30px 0 rgba(0,0,0,0.07);
                img {
                    width: 70px;
                    height: 70px;
                    margin: 50px 0;
                }
                h2 {
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 18px;
                }
                p {
                    font-size: 16px;
                    font-weight: 300;
                    line-height: 20px;
                }
            }
        }
    }
    /* 扫码下载app */
    .qrCodeBox {
        margin: 100px 0;
        position: relative;
        img {
            width: 100vw;
        }
        .maskBox {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            .mask {
                width: 460px;
                height: 460px;
                background: rgba(0,0,0,.22);
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                border-radius: 50%;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                .content {
                    .textBox {
                        p {
                            font-size: 40px;
                            font-weight: bold;
                            line-height: 48px;
                            margin-bottom: 16px;
                        }
                        span {
                            font-size: 24px;
                            font-weight: bold;
                            line-height: 36px;
                        }
                    }
                    .downBox {
                        margin-top: 12px;
                        .down {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img {
                                width: 25px;
                                height: 25px;
                                margin-right: 10px;
                            }
                            span {
                                font-size: 16px;
                                font-weight: bold;
                                line-height: 24px;
                            }
                            span:hover {
                                color: #17a5ff;
                                cursor: pointer;
                            }
                        }
                    }
                    .qrCode {
                        width: 0;
                        height: 0;
                        background: #fff;
                        position: absolute;
                        margin: auto;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        opacity: 0;
                        transition: all 1s;
                        border-radius: 10px;
                        padding: 20px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .qrCodeAct {
                        width: 300px;
                        height: 300px;
                        opacity: 1;
                    }
                }

            }
        }
    }
    /* 客+商 */
    .guestBox {
        width: 1200px;
        margin: 0 auto;
        h1 {
            font-size: 30px;
            font-weight: 500;
            line-height: 45px;
        }
        h3 {
            font-size: 16px;
            font-weight: 300;
            line-height: 24px;
            margin-top: 12px;
        }
        .showBox {
            padding-top: 1px;
            overflow: hidden;
            img {
                width: 628px;
                float: left;
                margin-top: -53px;
            }
            .showText {
                margin-left: 51%;
                width: 45%;
                font-size: 14px;
                text-align: left;
                padding-left: 26px;
            }
            .showText:nth-child(1){
                margin-top: 142px;
            }
            .showText:nth-child(2){
                margin-top: 90px;
            }
            .showText:nth-child(3){
                margin-top: 56px;
            }
            .showText:nth-child(4){
                margin-top: 50px;
            }
        }
    }
    /* 咨询 */
    .refer {
        width: 100vw;
        padding: 10px 0;
        background: #5C32F2;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        .referBtn {
            display: block;
            color: #fff;
            width: 80px;
            line-height: 24px;
            border: 1px solid #fff;
            margin-left: 56px;
        }
        .referBtn:hover {
            background: #fff;
            color: #5C32F2;
            border: 1px solid #5C32F2;
        }
    }
}
</style>