<template>
    <div class="creditLife">
        <!-- 账单管理 start -->
        <div class="billBox">
            <div class="textBox">
                <h1>账单管理</h1>
                <div class="itemBox">
                    <div class="item" v-for="(ele,i) in billList" :key="i">
                        <img :src="ele.icon" alt="">
                        <div>
                            <h2>{{ele.text}}</h2>
                            <p>{{ele.detail}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <img class="billImg" src="http://prod.dianjishenghuo.cn/img/product/XYSH-zdgltupian@2x.png" alt="">
        </div>
        <!-- 账单管理 end -->

        <!-- 一站式 start -->
        <div class="oneStopBox">
            <img src="http://prod.dianjishenghuo.cn/img/product/XYSH-zhongtu@2x.png" alt="">
            <div class="mask">
                <div class="textBox">
                    <p>你贴心的信用生活管家</p>
                    <span>一站式服务解决方案</span>
                </div>
            </div>
        </div>
        <!-- 一站式 end -->

        <!-- 申卡 start -->
        <div class="bankBox">
            <img class="phone" src="http://prod.dianjishenghuo.cn/img/product/XYSH-banka@2x.png" alt="">
            <div class="textBox">
                <div class="itemBox">
                    <div class="item" v-for="(ele,i) in bankList" :key="i">
                        <img :src="ele.icon" alt="">
                        <div>
                            <h3>{{ele.title}}</h3>
                            <p>{{ele.text}}</p>
                        </div>
                    </div>
                </div>
                <div class="btnBox">
                    <div class="btn" v-for="(ele,i) in bankBtn" :key="i">{{ele.text}}</div>
                </div>
            </div>
        </div>
        <!-- 申卡 end -->

        <!-- 保障 start -->
        <div class="safeguard">
            <img src="http://prod.dianjishenghuo.cn/img/product/XYSH-zijbaozhang@2x.png" alt="">
        </div>
        <!-- 保障 end -->

        <!--&lt;!&ndash; 二维码 start &ndash;&gt;-->
        <!--<div class="qrCodeBox">-->
            <!--<div class="imgBox">-->
                <!--<img src="" alt="">-->
            <!--</div>-->
            <!--<h6>扫描下载点击生活</h6>-->
            <!--<p>为您的信用保驾护航</p>-->
        <!--</div>-->
        <!--&lt;!&ndash; 二维码 end &ndash;&gt;-->
    </div>
</template>

<script>
    export default {
        name: "creditLife",
        data(){
            return {
                // 账单管理
                billList: [
                    {id:1, icon: 'http://prod.dianjishenghuo.cn/img/product/XYSH-zhangdan@2x.png',text: '智能账单管理不怕多', detail: '管理多卡账单，明细清楚易辨识。'},
                    {id:2, icon: 'http://prod.dianjishenghuo.cn/img/product/XYSH-fuzhai@2x.png',text: '智能负债管理，算的清', detail: '账单随时查询，精准图表走势、数据分析，再多负债也能Hold的住。'},
                    {id:3, icon: 'http://prod.dianjishenghuo.cn/img/product/XYSH-tixing@2x.png',text: '到期及时提醒，不逾期', detail: '及时获得还款提醒，轻松还款告别逾期。'},
                    {id:4, icon: 'http://prod.dianjishenghuo.cn/img/product/XYSH-huangkuan@2x.png',text: '多种还款方式，真方便', detail: '支持储蓄卡，支付宝等主流还款通道，多种在线还款方式任你选。'}
                ],
                // 申卡
                bankList: [
                    {id:1,icon:'http://prod.dianjishenghuo.cn/img/product/XYSH-shengka@2x.png',title:'申卡不在麻烦',text:'适用各大主流银行，申办信用卡'},
                    {id:2,icon:'http://prod.dianjishenghuo.cn/img/product/XYSH-changjiu@2x.png',title:'申卡不在长久',text:'完成信息填写，根据审核，快速下卡'}
                ],
                bankBtn: [
                    {id: 1,text: '立即下载'},
                    {id: 2,text: '立即咨询'}
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
.creditLife {
    color: #3E3E4D;
    background: #fff;
    /* 账单管理 */
    .billBox {
        width: 1200px;
        padding: 72px 0;
        margin: 0 auto;
        display: flex;
        align-content: center;
        justify-content: space-between;
        .billImg {
            width: 360px;
            height: 360px;
            margin-left: 50px;
        }
        .textBox {
            width: 790px;
            height: 360px;
            h1 {
                font-size: 30px;
                font-weight: 600;
                line-height: 45px;
                margin-bottom: 44px;
            }
            .itemBox {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                flex-wrap: wrap;
                .item {
                    width: 50%;
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 20px;
                    img {
                        width: 56px;
                        height: 56px;
                        margin-right: 20px;
                    }
                    h2 {
                        font-size: 20px;
                        line-height: 30px;
                        margin-bottom: 24px;
                    }
                    p {
                        width: 280px;
                        font-size: 16px;
                        font-weight: 200;
                        line-height: 24px;
                    }
                }
            }
        }
    }
    /* 一站式 */
    .oneStopBox {
        width: 100vw;
        position: relative;
        img {
            width: 100vw;
        }
        .mask {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background:rgba(40,40,52,.56);
            .textBox {
                text-align: center;
                position: absolute;
                left: 56%;
                top: 38%;
                color: #fff;
                p {
                    font-size: 42px;
                    font-weight: 600;
                    line-height: 63px;
                }
                span {
                    font-size: 30px;
                    line-height: 45px;
                }
            }
        }
    }
    /* 申卡 */
    .bankBox {
        width: 1200px;
        height: 766px;
        overflow: hidden;
        padding-top: 72px;
        margin: 0 auto;
        .phone {
            width: 500px;
            float: left;
        }
        .textBox {
            margin: 206px 0 0 761px;
            .itemBox {
                .item {
                    display: flex;
                    align-items: flex-start;
                    margin: 42px 0;
                    img {
                        width: 32px;
                        height: 32px;
                        margin: 7px 14px 0 0;
                    }
                    h3 {
                        font-size: 28px;
                        font-weight: 600;
                        line-height: 42px;
                        margin-bottom: 12px;
                    }
                    p {
                        font-size: 18px;
                        font-weight: 200;
                        line-height: 26px;
                    }
                }
            }
            .btnBox {
                display: flex;
                align-items: center;
                text-align: center;
                margin-top: 102px;
                .btn {
                    width: 136px;
                    line-height: 44px;
                    background: rgba(255,141,33,1);
                    border-radius: 3px;
                    margin-right: 24px;
                    font-size: 20px;
                    font-weight: 600;
                    color: #fff;
                }
                .btn:hover {
                    cursor: pointer;
                }
            }
        }
    }
    /* 保障 */
    .safeguard {
        img {
            width: 100vw;
        }
    }
    /* 二维码 */
    .qrCodeBox {
        width: 1200px;
        padding: 72px 0;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        .imgBox {
            width: 250px;
            height: 250px;
            background: #fff;
            box-shadow: 0 0 16px 0 rgba(51, 51, 51, 0.2);
        }
        h6 {
            font-size: 24px;
            font-weight: 200;
            color: rgba(144,144,144,1);
            line-height: 36px;
            margin: 12px 0 24px;
        }
        p {
            font-size: 30px;
            font-weight: 300;
            line-height: 45px;
        }
    }
}
</style>