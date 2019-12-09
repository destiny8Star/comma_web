<template>
    <div class="onlineShopping">
        <div class="show">
            <img src="http://prod.dianjishenghuo.cn/img/product/XSSC-GQXZ@2x.png" alt="">
        </div>
        <!-- 商业目标 start -->
        <div class="goalBox">
            <div class="goal">
                <h1>助您实现商业目标</h1>
                <div class="itemBox">
                    <div class="item" v-for="(ele,i) in goalList" :key="i" :style="{'backgroundImage': 'url(' + ele.bg + ')'}">
                        <div class="mask">
                            <h2>{{ele.title}}</h2>
                            <div class="line"></div>
                            <p>{{ele.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 商业目标 end -->

        <!-- 价值 start -->
        <div class="worthBox">
            <div class="worth">
                <h1>让消费更有价值  让商业更有智慧</h1>
                <div class="btnBox">
                    <p class="btn"
                       @mouseenter="worthIndex=0"
                       :class="{btnAct:worthIndex==0}">对于商家</p>
                    <p class="btn"
                       @mouseenter="worthIndex=1"
                       :class="{btnAct:worthIndex==1}">对于消费者</p>
                </div>
                <div class="showBox">
                    <div class="shows" :class="{showAct:i==worthIndex}" v-for="(ele,i) in worthList" :key="i">
                        <img class="bigImg" :src="ele.imgUrl" alt="">
                        <div class="content">
                            <h2>{{ele.title}}</h2>
                            <p class="detailText">{{ele.detail}}</p>
                            <div class="itemBox">
                                <div class="item" v-for="(val,v) in ele.children" :key="v">
                                    <img :src="val.icon" alt="">
                                    <p>{{val.text}}</p>
                                    <span>{{val.name}}</span>
                                </div>
                            </div>
                            <div class="iconBox">
                                <div class="icons" v-for="(item,n) in childIcon" :key="n">
                                    <img :src="item.icon" alt="">
                                    <span>{{item.text}}</span>
                                </div>
                            </div>
                            <div class="addBtn">{{ele.btnText}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 价值 end -->

        <!-- 线上商铺 start -->
        <div class="onlineBox">
            <div class="online">
                <h1>线上店铺</h1>
                <div class="itemBox">
                    <div class="item" v-for="(ele,i) in onlineList" :key="i">
                        <img :src="ele.imgUrl" alt="">
                        <h2>{{ele.name}}</h2>
                        <p>{{ele.text}}</p>
                        <div class="mask">
                            <img class="iconImg" :src="ele.icon" alt="">
                            <h3><span>{{ele.name}}</span></h3>
                            <p>{{ele.detail}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 线上商铺 end -->

        <!-- 咨询 -->
        <div class="refer">
            <p>立即入驻接轨社交电商新风口</p>
            <a class="referBtn" href="http://p.qiao.baidu.com/cps/chat?siteId=13334890&userId=25453446&cp=&cr=&cw=wz">免费咨询</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "onlineShopping",
        data(){
            return {
                //目标
                goalList: [
                    {id: 1,title:'行业数据透视',text:'汇聚用户购物能力、日常行为和区域经济等数据，进行数据处理分析，实现大数据计算、流计算、分布式计算等算法开发，使各行业数据多维价值得以挖掘，解决各行业面临的问题。',bg:'http://prod.dianjishenghuo.cn/img/product/XSSC-hysj@2x.png'},
                    {id: 2,title:'数字化服务商管理系统',text:'通过城市数据应用场景，对海量数据资源进行采集、 计算、存储、加工，形成标准化的城市的数据资产。 通过对城市业务流的分析和再造，形成城市数据平面 的核心能力层，为服务商、商家、用户提供数据服务 应用进行支撑。',bg:'http://prod.dianjishenghuo.cn/img/product/XSSC-shuzihua@2x.png'},
                    {id: 3,title:'城市综合数据链',text:'基于全面物联网连接与数字虚拟化技术，通过精准映射 、虚实交互，实现城市级的物理空间与虚拟空间之间虚 实交融、智能操控的映射关系，通过在实体世界以及数 字虚拟空间中记录、仿真、预测各行业对象全生命周期 的运行轨迹，实现系统内信息资源、物质资源的最优化 配置。',bg:'http://prod.dianjishenghuo.cn/img/product/XSSC-cszh@2x.png'}
                ],
            //    价值
                worthIndex: '0',
                worthList: [
                    {
                        id:1,
                        title: '让经营更高效',
                        detail: '用分佣激励用户主动宣传，让店铺真正实现裂变式销量增长，向昂贵的渠道和广告成本说再见。同时，平台通过智能识别技术，实现消费即锁客，让用户不再与商家只有一面之缘，让商家也能享受客户离店后的消费收益。',
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/product/XSSC-dsj@2x.png',
                        btnText: '商家入驻',
                        children: [
                            {id:1-1, icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-bnsce@2x.png',text: '9万亿+', name: '半年销售额' },
                            {id:1-2, icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-bngwze@2x.png',text: '4万亿+', name: '半年购物总额' },
                            {id:1-3, icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-wm@2x.png',text: '3600亿', name: '外卖交易额' },
                            {id:1-4, icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-rdd@2x.png',text: '2000亿', name: '日订单' }
                        ]
                    },
                    {
                        id:2,
                        title: '让消费更有价值',
                        detail: '消费者消费能得返利，分享就能升级，角色双向转变，既是消费者又是创收者，同时满足不同消费群体的不同需求。另外，平台通过GPS定位技术+大数据智能筛选技术，为用户选择意向度高，距离近的优选商户，实现零售智能化。',
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/product/XSSC-dsfz@2x.jpeg',
                        btnText: '下载APP',
                        children: [
                            {id:2-1, icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-XFZ-s11@2x.png',text: '2135亿', name: '双十一销售额' },
                            {id:2-2, icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-XFZ-nwgs@2x.png',text: '7.82亿', name: '年网购总人数' },
                            {id:2-3, icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-XFZ-rjwg@2x.png',text: '19.4次+', name: '人均网购数' },
                            {id:2-4, icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-XFZ-nrjwg@2x.png',text: '5000元+', name: '年人均网购值' }
                        ]
                    }
                ],
                childIcon: [
                    {icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-qyn@2x.png',text: '前一年'},
                    {icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-tn@2x.png',text: '同年'},
                ],
            //    线上商城
                onlineList: [
                    {
                        id:1,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/product/XSSC-fl@2x.png',
                        name: '芬兰GOLLA',
                        text: 'Golla是来 欧芬兰的设计品牌',
                        icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-FENLAN-logo@2x.png',
                        title: '芬兰GOLLA',
                        detail: 'Golla是来 欧芬兰的设计品牌，设计生产以包袋和服装配饰等产品。产品设计针对年轻族群日常工作休闲等各种场合的需求， 符合当今时尚现代的轻商务生活方式。产品在颜色，面 和细节的设计风格独树一帜。'
                    },{
                        id:2,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/product/nvwa.png',
                        name: '女娲',
                        text: '女娲线上产品包装设计',
                        icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-nw-logo@2x.png',
                        title: '女娲',
                        detail: '女娲线上产品包装设计 九歌设计-著名品 牌策划公司,著名标志设计、VI设计、实用 型微型VI设计、食品包装设计，饮料包装 设计，礼品盒包装设计，产品包装设计， 宣传品设计，海报设计，画册设计、展会 设计、会议策划以及极具优势的落地实施 创意品牌策划公司'
                    },{
                        id:3,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/product/XSSC-munchery@2x.png',
                        name: 'Munchery',
                        text: '帮助厨师兼职和用户订外卖的平台',
                        icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-MUNCH-logo@2x.png',
                        title: 'Munchery',
                        detail: 'Munchery是一个服务标准化，且聘用了不同厨师的订餐网站，帮助厨师兼职和用户订外卖的平台。CEO Tri Tran和CTO Conrad Chu于2010年春季成立了这家公司，他们的身份除了公司高管，工程师以外，也是两位希望找到健康，实惠的家常菜的年轻父亲，这也是他们成立这家公司的初衷。'
                    },{
                        id:4,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/product/XSSC-myzy@2x.png',
                        name: '蜂巢民谣之夜',
                        text: '在圈层社交平台party家首家线下实体party店',
                        icon: 'http://prod.dianjishenghuo.cn/img/product/XSSC-MINGYAO-logo@2x.png',
                        title: '蜂巢民谣之夜',
                        detail:'蜂巢音乐酒吧，武汉首家自助式酒吧消费，本周五、周六20:30-2:00，线上支付仅需100元，啤酒青岛、百威、喜力，红酒白金汉庄、甜乐斯全场任喝！全场畅饮！另含丰富果拼，小吃！现场购票120元哟！'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
.onlineShopping {
    background: #fff;
    color: #3E3E4D;
    .show {
        padding: 120px 0;
        img {
            width: 982px;
            height: 456px;
            margin: 0 auto;
            display: block;
        }
    }
    /* 商业目标 */
    .goalBox {
        .goal {
            width: 1200px;
            margin: 0 auto;
            text-align: center;
            h1 {
                font-size: 30px;
                font-weight: 500;
                line-height: 45px;
            }
            .itemBox {
                display: flex;
                align-items: center;
                margin: 48px 0 72px;
                .item {
                    width: 400px;
                    height: 400px;
                    color: #fff;
                    background-size: 100% 100%;
                    .mask {
                        width: 100%;
                        height: 100%;
                        background: rgba(0,0,0,.5);
                        padding: 52px 40px 0;
                        h2 {
                            font-size: 24px;
                            line-height: 36px;
                        }
                        .line {
                            width: 56px;
                            height: 2px;
                            background: rgba(127,153,245,1);
                            margin: 18px auto 60px;
                        }
                        p {
                            font-size: 14px;
                            line-height: 20px;
                        }
                    }
                }
            }
        }
    }
    /* 价值 */
    .worthBox {
        width: 100vw;
        height: 800px;
        background: linear-gradient(0deg,rgba(124,130,134,1) 0%,rgba(40,44,47,1) 100%);
        color: #fff;
        .worth {
            width: 1200px;
            margin: 0 auto;
            padding: 48px 0 104px;
            h1 {
                font-size: 30px;
                font-weight: 600;
                line-height: 45px;
                text-align: center;
            }
            .btnBox {
                margin: 30px auto 0;
                display: flex;
                align-items: center;
                justify-content: center;
                p {
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 42px;
                    border-bottom: 1px solid transparent;
                }
                p:first-child {
                    margin-right: 72px;
                }
                .btnAct {
                    border-bottom: 1px solid #fff;
                }
                p:hover {
                    cursor: pointer;
                }
            }
            .showBox {
                margin-top: 25px;
                background: blue;
                position: relative;
                .shows {
                    display: flex;
                    /*align-items: center;*/
                    opacity: 0;
                    position: absolute;
                    left: 0;
                    top: 0;
                    .bigImg {
                        width: 490px;
                        height: 530px;
                    }
                    .content {
                        width: 710px;
                        height: 530px;
                        background: rgba(0,0,0,.15);
                        padding: 62px 120px 24px 60px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        h2 {
                            font-size: 24px;
                            font-weight: 600;
                            line-height: 36px;
                        }
                        .detailText {
                            font-size: 12px;
                            line-height: 25px;
                            margin: 36px 0 20px;
                        }
                        .itemBox {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            text-align: center;
                            .item {
                                img {
                                    width: 58px;
                                    height: 120px;
                                }
                                p {
                                    font-size: 26px;
                                    line-height: 39px;
                                }
                                span {
                                    font-size: 12px;
                                    line-height: 18px;
                                }
                            }
                        }
                        .iconBox {
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            margin-top: 6px;
                            .icons {
                                margin-left: 19px;
                                display: flex;
                                align-items: center;
                                img {
                                    width: 28px;
                                    height: 38px;
                                    margin-right: 3px;
                                }
                                span {
                                    font-size: 14px;
                                    line-height: 20px;
                                }
                            }
                        }
                        .addBtn {
                            width: 120px;
                            line-height: 50px;
                            background: rgba(81,119,255,1);
                            border-radius: 4px;
                            font-size: 18px;
                            font-weight: 500;
                            text-align: center;
                        }
                        .addBtn:hover {
                            cursor: pointer;
                        }
                    }
                }
                .showAct {
                    opacity: 1;
                }
            }
        }
    }
    /* 线上商铺 */
    .onlineBox {
        width: 100vw;
        background: #fff;
        .online {
            width: 1200px;
            margin: auto;
            padding: 120px 0 72px;
            text-align: center;
            h1 {
                font-size: 30px;
                font-weight: 600;
                line-height: 45px;
            }
            .itemBox {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 72px;
                .item {
                    width: 280px;
                    height: 340px;
                    box-shadow: 0 2px 30px 0 rgba(0,0,0,0.07);
                    border-radius: 4px;
                    position: relative;
                    img {
                        width: 100%;
                        height: 260px;
                    }
                    h2 {
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 40px;
                    }
                    p {
                        font-size: 14px;
                        padding: 0 15px;
                        line-height: 16px;
                    }
                    .mask {
                        width: 100%;
                        height: 100%;
                        background: #fff;
                        opacity: 0;
                        position: absolute;
                        left: 0;
                        top: 0;
                        padding: 12px;
                        transition: all 1s;
                        .iconImg {
                            width: 224px;
                            height: 114px;
                        }
                        h3 {
                            margin-bottom: 16px;
                            span{
                                /*width: 0;*/
                                display: inline-block;
                                line-height:36px;
                                font-size: 16px;
                                font-weight: 600;
                                border-bottom: 2px solid #3E3E4D;
                            }
                        }
                        p {
                            font-size: 14px;
                            color: rgba(144,144,144,1);
                            line-height: 16px;
                            padding: 0;
                        }
                    }
                    .mask:hover {
                        opacity: 1;
                    }
                }
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
        text-align: center;
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