<template>
    <div class="foot">
        <div class="footContentBox">
            <div class="showBox">
                <div class="contact">
                    <img class="icon" src="http://prod.dianjishenghuo.cn/img/components/contact.png" alt="">
                    <p>点击生活咨询热线</p>
                    <h1>400-9900-188</h1>
                    <div class="btn">在线QQ咨询</div>
                    <!--<div class="qrCode">-->
                        <!--<img src="http://prod.dianjishenghuo.cn/img/components/GW-sm@2x.png" alt="">-->
                    <!--</div>-->
                    <!--<p>扫码咨询点击生活</p>-->
                </div>
                <div class="line"></div>
                <div class="show">
                    <div class="item" v-for="(item,i) in list" :key="i">
                        <h1>{{item.title}}</h1>
                        <p v-for="(ele,k) in item.children" :key="k" :class="{hoverCss:item.id!==3}">
                            <span @click="goPage(ele,k)">{{ele.text}}</span><span>{{ele.content}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="copyrightBox">
                <p>
                    ©版权归浙江逗号信息技术有限公司所有 2016-2020<br>
                    工信部备案号：浙ICP备16115018-5
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "foot",
        data(){
            return {
                // 展示信息列表
                "list": [
                    {
                        id: 1,
                        title: '产品与应用',
                        children: [
                            // {
                            //     id: 1-1,
                            //     text: '点击生活APP',
                            //     link: '/product'
                            // },
                            {
                                id: 1-2,
                                text: '在线商城',
                                link: '/product?navIndexs=0'
                            },
                            {
                                id: 1-3,
                                text: '智慧商圈',
                                link: '/product?navIndexs=1'
                            },
                            {
                                id: 1-4,
                                text: '信用生活',
                                link: '/product?navIndexs=2'
                            },
                            {
                                id: 1-5,
                                text: '本地服务',
                                link: '/product?navIndexs=3'
                            },

                        ]
                    },
                    {
                        id: 2,
                        title: '关于我们',
                        children: [
                            {
                                id: 2-1,
                                text: '公司简介',
                                link: '/aboutUs?navIndexs=0'
                            },
                            {
                                id: 2-2,
                                text: '发展历程',
                                link: '/aboutUs?navIndexs=1'
                            },
                            {
                                id: 2-3,
                                text: '管理团队',
                                link: '/aboutUs?navIndexs=2'
                            },
                            {
                                id: 2-4,
                                text: '联系我们',
                                link: '/aboutUs?navIndexs=5'
                            }
                        ]
                    },
                    {
                        id: 3,
                        title: '帮助支持',
                        children: [
                            {
                                id: 3-1,
                                text: '服务热线：',
                                content: '400-9900-188'
                            },
                            {
                                id: 3-2,
                                text: '售后专线：',
                                content: '18958132601'
                            },
                            {
                                id: 3-3,
                                text: '工作时间：',
                                content: '09:00-18:00'
                            },
                            {
                                id: 3-4,
                                text: '公司地址：',
                                content: '浙江省杭州市萧山区宁一路与鸿宁路交叉口广孚联合国际中心11楼'
                            }
                        ]
                    },
                ],
            }
        },
        methods:{
            goPage(item,i){
                if(item.link){
                    document.documentElement.scrollTop = 0;
                    this.$router.push({path:item.link})
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.foot {
    width: 100%;
    /*min-height: 528px;*/
    background: #222;
    .footContentBox {
        margin: 0 auto;
        .showBox {
            width: 1400px;
            display: flex;
            align-items: flex-start;
            padding: 78px 30px 48px;
            margin: 0 auto;
            border-bottom: 1px solid #909090;
            .contact {
                min-width: 230px;
                padding-left: 70px;
                font-size: 16px;
                color: #fff;
                position: relative;
                .icon {
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                p {
                    color: #909090;
                    line-height: 36px;
                }
                h1 {
                    font-size: 24px;
                    /*line-height: 32px;*/
                }
                .btn {
                    width: 116px;
                    line-height: 34px;
                    border: 1px solid #fff;
                    text-align: center;
                    margin: 23px 0;
                }
                .qrCode {
                    width: 129px;
                    height: 129px;
                    background: #fff;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .line {
                width: 2px;
                height: 200px;
                background: rgba(144,144,144,.3);
                margin: auto 0 auto 130px;
            }
            .show {
                width: 1000px;
                padding: 0 30px;
                display: flex;
                align-items: flex-start;
                justify-content: space-around;
                .item {
                    text-align: left;
                    h1 {
                        font-size: 30px;
                        color: #fff;
                        margin-bottom: 48px;
                    }
                    p {
                        font-size: 16px;
                        font-family: 'SourceHanSansCN-ExtraLight';
                        font-weight: 200;
                        line-height: 34px;
                        display: flex;
                        align-items: baseline;
                        span {
                            color: #909090;
                            cursor: text;
                        }
                        span:last-child {
                            display: block;
                            max-width: 250px;
                        }
                    }
                    .hoverCss {
                        span:hover {
                            color: #fff;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
    .copyrightBox {
        height: 112px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #909090;
        p {
            line-height: 28px;
            font-size: 12px;
            text-size-adjust: none;
            -webkit-text-size-adjust: none;
            -moz-text-size-adjust: none;
            -ms-text-size-adjust: none;
            -webkit-transform: scale(0.75);
        }
    }
}
</style>