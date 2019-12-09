<template>
    <div class="home">
        <navigation/>
        <!--banner 开始-->
        <div class="bannerBox">
            <div class="banners">
                <div class="imgBox" @mouseenter="stop" @mouseleave="goOn">
                <!--<div class="imgBox">-->
                    <img @click="pageJump(ele)" v-for="(ele,i) in bannerList" :class="{imgAct:imgIndex===i}" :key="i" :src="ele.imgUrl" alt="">
                </div>
                <div class="pageBox">
                    <div @click="pageClick(k)" class="page" :class="{pageAct: imgIndex===k}" v-for="(e,k) in bannerList.length"></div>
                </div>
            </div>
        </div>
        <!--banner结束-->

        <!-- 应用场景  start -->
        <div class="scenarioBox">
            <div class="scenario">
                <!--<h1>在线商城、智慧商圈、本地服务</h1>-->
                <h1>在线商城、智慧商圈、本地服务、信用生活</h1>
                <!--<p class="intro">一个让商家流量共享、利润共享；让消费者消费省钱社交新零售电商平台</p>-->
                <p class="intro">一个让商家流量共享、利润共享；让消费者消费省钱、分享赚钱的社交新零售电商平台</p>
                <div class="itemBox">
                    <div class="item"
                         @click="pageJump(ele)"
                         v-for="(ele,i) in scenarioList"
                         :key="i">
                        <div class="mask">
                            <div class="titleBox">
                                <img :src="ele.imgUrl" alt="">
                                <h2 class="title">{{ele.title}}</h2>
                                <div class="line"></div>
                                <p class="hide">{{ele.hideText}}</p>
                            </div>
                            <p class="detail">{{ele.detail}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 应用场景  end -->

        <!-- 优势 start -->
        <div class="advantageBox">
            <div class="advantage">
                <ul class="itemBox">
                    <li class="item" @mouseenter="ele.flag = false" @mouseleave="ele.flag = true" v-for="(ele,i) in advantageList" :key="i">
                        <img class="icon" :src="[ele.flag ? ele.bg : ele.bg_select]" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <!-- 优势 end -->

        <!-- 展示数据 start -->
        <div class="showDataBox">
            <div class="showData">
                <div class="show" v-for="(ele,i) in showDataList" :key="i">
                    <span>{{ele.num}}</span>
                    <p>{{ele.text}}</p>
                </div>
            </div>
        </div>
        <!-- 展示数据 end -->

        <!-- 行业应用 start -->
        <div class="industryBox">
            <div class="industryBg">
                <div class="industry">
                    <img v-show="g==industryIndex" v-for="(img,g) in industryBg" :key="g" :src="img.url" alt="">
                    <div class="mask">
                        <div class="titleBox">
                            <h1>全行业广泛应用&emsp;&emsp;为你保驾护航</h1>
                            <span>提供零售、餐饮、休娱、丽人、酒店等全行业应用场景</span>
                        </div>
                        <div class="contentBox">
                            <div class="navBox">
                                <div class="nav"  v-for="(nav,n) in industryNav" :key="n" :class="{act:industryIndex==n}" @mouseenter="showContent(n)">
                                    {{nav.text}}
                                </div>
                            </div>
                            <div class="detailBox" v-show="i==industryIndex" v-for="(item,i) in industryContent" :key="i">
                                <h2>{{item.title}}</h2>
                                <p class="detailText">{{item.detail}}</p>
                                <div class="iconBox">
                                    <div class="icon" v-for="(icon,o) in item.icons" :key="o">
                                        <img :src="icon.imgUrl" alt="">
                                        <p>{{icon.text}}</p>
                                    </div>
                                </div>
                                <div class="btn">
                                    <a href="">咨询详情</a>
                                    <!--<a href="http://kefu.ziyun.com.cn/vclient/chat/?websiteid=145467&wc=315e43">咨询详情</a>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 行业应用 end -->

        <!-- 品牌 start -->
        <!--<div class="brandBox">-->
            <!--<div class="brand">-->
                <!--<h1>合作伙伴</h1>-->
                <!--<div class="itemBox">-->
                    <!--<div class="item" @mouseenter="ele.flag = false" @mouseleave="ele.flag = true" v-for="(ele,i) in brandList" :key="i">-->
                        <!--<img :src="[ele.flag ? ele.imgUrl : ele.imgUrl_select]" alt="">-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <!-- 品牌 end -->

        <!-- 新闻动态 start -->
        <div class="newBox">
            <div class="new">
                <h1>新闻动态</h1>
                <p class="more" @click="goNews">查看更多&nbsp;<span>›</span></p>
                <div class="newContent">
                    <div class="resale" @click="showVideo">
                        <h2>什么是新零售？</h2>
                        <div class="videoBtn" @click="showVideo"></div>
                        <h3>点击生活</h3>
                        <p>一个集线上商城、智慧商圈、本地服务、聚合支付等于一体的社交新零售平台。</p>
                        <!--<div class="videoBtnBox">-->
                            <!--<div @click="showVideo"><i>▶</i>&emsp;观看视频</div>-->
                        <!--</div>-->
                    </div>
                    <div class="videoBox" v-show="videoShow" @click="hideVideo">
                        <video controls controlslist="nodownload">
                            <source src="http://prod.dianjishenghuo.cn/video/djsh.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="itemBox">
                        <div class="item" :class="{pinkBg:i==0||i==4,itemBg:i==1}" v-for="(ele,i) in newList" :key="i">
                            <h3>{{ele.title}}</h3>
                            <p>{{ele.text}}</p>
                            <div class="source" v-if="ele.source">查看原文</div>
                            <div class="detail1" v-if="ele.detail">查看详情</div>
                            <!--<span class="detail" v-else-if="ele.detail">查看详情→</span>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 新闻动态 end -->


        <foot/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import foot from '@/components/foot.vue'
    import navigation from '@/components/navigation.vue'



    export default {
        name: 'home',
        components: {
            HelloWorld,
            navigation,
            foot,
        },
        data(){
            return {
                "now": '',
                "scrollState": '',
                "videoShow": false,
                "timestamp": new Date().getTime(),//测试接口所需--时间戳
                // 轮播图片
                "bannerList": [
                    // {id:1, imgUrl: 'http://prod.dianjishenghuo.cn/img/home/banner_new.png',link:'/joinIn'},
                    // {id:1, imgUrl: require('../assets/img/home/banner1@2x.jpg'),link:'/joinIn'},
                    {id:1, imgUrl: require('../assets/img/home/banner2@2x.jpg'),link:'/product?navIndexs=0'},
                    {id:2, imgUrl: require('../assets/img/home/banner3@2x.jpg'),link:'/product?navIndexs=1'},
                    {id:3, imgUrl: require('../assets/img/home/banner4@2x.jpg'),link:'/product?navIndexs=1'}
                ],
                "imgIndex": 0,
                "timer": '',//定时器
                // 应用场景
                "scenarioList": [
                    {
                        id: 1,
                        link: 'product?navIndex=0',
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/shejiao.png',
                        title: '在线商城',
                        hideText: '在线购物商城+购物车，打破线上线下壁垒，让购物更轻松',
                        detail: '基于人际关系网络，利用互联网社交工具，通过社交互动、用户自生内容、分享优惠、会员营销、消费返利等手段来辅助商品的购买和销售，是当今电子商务的一种新趋势。'
                    },
                    {
                        id: 2,
                        link: 'product?navIndex=1',
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/zhihui.png',
                        title: '智慧商圈',
                        hideText: '通过大数据智能分析推荐技术结合智能定位技术，实现在线预定、扫码下单等应用场景',
                        detail: '通过大数据智能定位、地图导航、自主买单等应用场景，提升附近到店流量，继而提高门店经营效益，让商家利润倍增。'
                    },
                    {
                        id: 3,
                        link: 'product?navIndex=2',
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/bianmin.png',
                        title: '本地服务',
                        hideText: '集话费充值、电影购票、差旅住宿、社保查询，个税查询等便民应用于一体',
                        detail: '根据现今社会快捷、智慧的生活状态， 点击生活助力用户优惠购票、优惠充值话费、优惠购景区门票、查询社保等便民功能，为用户打造一体化的智惠式生活舒适区。'
                    },
                    {
                        id: 4,
                        // link: 'product?navIndex=3',
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/xinyong.png',
                        title: '信用生活',
                        hideText: '打通安全、稳定支付通道，打造高净值信用生活，让信用点亮人生',
                        detail: '从实用实惠的角度为用户提供和信用卡相关的支持服务， 包括专业的账单管理等功能帮助用户累计信用财富。'
                        // detail: '从实用实惠的角度为用户提供和信用卡相关的支持服务， 包括专业的账单管理、还款、快速办卡、刷卡优惠，等功能帮助用户更专业的使用信用卡，累计信用财富。'
                    },
                ],
                // 展示数据
                "showDataList": [
                    {id:1,num:'324,564',text:'用户数量'},
                    {id:2,num:'202,107',text:'活跃度'},
                    {id:3,num:'1,352',text:'商家入驻数量'},
                    {id:4,num:'5,105,808',text:'日均交易流水量'}
                ],
                //  优势
                "advantageList": [
                    {
                        id:1,
                        icon: 'http://prod.dianjishenghuo.cn/img/home/banner.png',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/home/banner.png',
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/banner.png',
                        flag: true,
                        bg: 'http://prod.dianjishenghuo.cn/img/home/advantage/xiaofeizhe@2x.png',
                        bg_select: 'http://prod.dianjishenghuo.cn/img/home/advantage/xiaofeizhe_select@2x.png',
                        title: '消费者省钱',
                        text: '消费返利&emsp;分享收益<br>便民服务&emsp;角色升级',
                    },
                    {
                        id:2,
                        icon: 'http://prod.dianjishenghuo.cn/img/home/banner.png',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/home/banner.png',
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/banner.png',
                        flag: true,
                        bg: 'http://prod.dianjishenghuo.cn/img/home/advantage/shangjia@2x.png',
                        bg_select: 'http://prod.dianjishenghuo.cn/img/home/advantage/shangjia_select@2x.png',
                        title: '商家多赚钱',
                        text: '成本降低&emsp;流量升级<br>利润提升&emsp;跨界收益',
                    },
                    {
                        id:3,
                        icon: 'http://prod.dianjishenghuo.cn/img/home/banner.png',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/home/banner.png',
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/banner.png',
                        flag: true,
                        bg:  'http://prod.dianjishenghuo.cn/img/home/FWSYQ-weixuan@2x.png',
                        bg_select: 'http://prod.dianjishenghuo.cn/img/home/FWSYQ-xz@2x.png',
                        title: '服务商有钱',
                        text: '推荐分佣&emsp;推荐奖励<br>管道收益&emsp;区域分红',
                    },
                    {
                        id:4,
                        icon: 'http://prod.dianjishenghuo.cn/img/home/banner.png',
                        icon_select: 'http://prod.dianjishenghuo.cn/img/home/banner.png',
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/banner.png',
                        flag: true,
                        bg: 'http://prod.dianjishenghuo.cn/img/home/advantage/pingtai@2x.png',
                        bg_select: 'http://prod.dianjishenghuo.cn/img/home/advantage/pingtai_select@2x.png',
                        title: '平台更值钱',
                        text: '品牌效应&emsp;数据价值<br>生态发展&emsp;长久稳定',
                    }
                ],
                //  应用行业
                "industryIndex": 0,
                "industryBg": [
                    {id:1,url:'http://prod.dianjishenghuo.cn/img/home/industry/lingshoubg@2x.png'},
                    {id:2,url:'http://prod.dianjishenghuo.cn/img/home/industry/canyinbg@2x.png'},
                    {id:3,url:'http://prod.dianjishenghuo.cn/img/home/industry/xiuyubg@2x.png'},
                    {id:4,url:'http://prod.dianjishenghuo.cn/img/home/industry/meiyebg@2x.png'},
                    {id:5,url:'http://prod.dianjishenghuo.cn/img/home/industry/jiudianbg@2x.png'},
                ],
                "industryNav": [
                    {id:1,text:'零售'},
                    {id:2,text:'餐饮'},
                    {id:3,text:'休娱'},
                    {id:4,text:'美业'},
                    {id:5,text:'酒店'}
                ],
                "industryContent": [
                    {
                        id: 1,
                        title: '零售行业应用场景',
                        // detail: '点击生活通过线上商城、线下商圈、收银锁客、离店收益、会员管理，实现线上线下商品、会员、场景的互通互联，助推实体商户流量提升，利润倍增，收益渠道多元化',
                        detail: '点击生活通过线上商城、线下商圈、收银锁客、离店收益、会员管理、分享裂变，实现线上线下商品、会员、场景的互通互联，助推实体商户流量提升，利润倍增，收益渠道多元化',
                        icons: [
                            {id:1-1,text:'线上商城',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/shangcheng@2x.png'},
                            {id:1-2,text:'线下商圈',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/xianxia@2x.png'},
                            {id:1-3,text:'收银锁客',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/shouyin@2x.png'},
                            {id:1-4,text:'离店收益',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/qian@2x.png'},
                            {id:1-5,text:'会员管理',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/huiyuan@2x.png'},
                            {id:1-6,text:'分享裂变',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/fenxiang@2x.png'}
                        ],
                    },
                    {
                        id: 2,
                        title: '餐饮行业应用场景',
                        detail: '点击生活整合营销、会员、商圈定位、智能导航、扫码点餐等一系列功能，通过智慧商圈和平台流量帮助餐厅多维度吸引新客到店，通过模式特性，让老客主动帮助商家带来新客，商家还能赚取跨界收益。',
                        icons: [
                            {id: 2-1,text:'营销',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/yingxiao@2x.png'},
                            {id: 2-2,text:'会员',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/canyinvip@2x.png'},
                            {id: 2-3,text:'商圈定位',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/dingwei@2x.png'},
                            {id: 2-4,text:'智能导航',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/daohang@2x.png'},
                            {id: 2-5,text:'扫码点餐',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/diancan@2x.png'}
                        ],
                    },
                    {
                        id: 3,
                        title: '休娱行业应用场景',
                        detail: '点击生活通过线上下单，线下体验的互联网经营模式和新零售社交电商模式, 帮助商家打破常规竞争局面，拓宽收入渠道，实现竞争对手向合作伙伴的转变，达到多方共赢的目的。',
                        icons: [
                            {id:3-1,text:'线上下单',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/xiadan@2x.png'},
                            {id:3-2,text:'线下体验',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/tiyan@2x.png'}
                        ],
                    },
                    {
                        id: 4,
                        title: '美业行业应用场景',
                        detail: '点击生活适合美发、美甲、美睫、美容、SPA、芊体瘦身等美业。帮助商家实现多渠道引流、锁客、客转粉、粉带粉，粉变现的目标，结合平台独特模式，不花一分钱让你拥有千人万人销售大团队。',
                        icons: [
                            {id:4-1,text:'引流',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/yinliu@2x.png'},
                            {id:4-2,text:'锁客',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/suo@2x.png'}
                        ],
                    },
                    {
                        id: 5,
                        title: '酒店行业应用场景',
                        detail: '点击生活致力于帮助酒店打造平台场景展示、线上客房预订、本地酒店导航等智能化经营体系，让低成本、跨时空、高效能成为酒店新特性，让酒店会员成为流动盈利点，解决行业淡季苦恼，助力酒店快速步入社交新零售时代。',
                        icons: [
                            {id:5-1,text:'平台场景展示',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/changjing@2x.png'},
                            {id:5-2,text:'线上客房预订',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/dingfang@2x.png'},
                            {id:5-3,text:'本地酒店导航',imgUrl:'http://prod.dianjishenghuo.cn/img/home/industry/jiudian@2x.png'}
                        ],
                    },
                ],
                //  品牌
                "brandList": [
                    {
                        id: 1,
                        flag: true,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/brand/pinganbank@2x.png',
                        imgUrl_select: 'http://prod.dianjishenghuo.cn/img/home/brand/pinganbank_select@2x.png'
                    },
                    {
                        id: 2,
                        flag: true,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/brand/mayi@2x.png',
                        imgUrl_select: 'http://prod.dianjishenghuo.cn/img/home/brand/mayi_select@2x.png'
                    },
                    {
                        id: 3,
                        flag: true,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/brand/jinri@2x.png',
                        imgUrl_select: 'http://prod.dianjishenghuo.cn/img/home/brand/jinri_select@2x.png'
                    },
                    {
                        id: 4,
                        flag: true,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/brand/baiduyun@2x.png',
                        imgUrl_select: 'http://prod.dianjishenghuo.cn/img/home/brand/baiduyun_select@2x.png'
                    },
                    {
                        id: 5,
                        flag: true,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/brand/aliyun@2x.png',
                        imgUrl_select: 'http://prod.dianjishenghuo.cn/img/home/brand/aliyun_select@2x.png'
                    },
                    {
                        id: 6,
                        flag: true,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/brand/tengxun@2x.png',
                        imgUrl_select: 'http://prod.dianjishenghuo.cn/img/home/brand/tengxun_select@2x.png'
                    },
                    {
                        id: 7,
                        flag: true,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/brand/zhejiang@2x.png',
                        imgUrl_select: 'http://prod.dianjishenghuo.cn/img/home/brand/zhejiang_select@2x.png'
                    },
                    {
                        id: 8,
                        flag: true,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/brand/xinlang@2x.png',
                        imgUrl_select: 'http://prod.dianjishenghuo.cn/img/home/brand/xinlang_select@2x.png'
                    },
                    {
                        id: 9,
                        flag: true,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/brand/baofu@2x.png',
                        imgUrl_select: 'http://prod.dianjishenghuo.cn/img/home/brand/baofu_select@2x.png'
                    },
                    {
                        id: 10,
                        flag: true,
                        imgUrl: 'http://prod.dianjishenghuo.cn/img/home/brand/sijiqing@2x.png',
                        imgUrl_select: 'http://prod.dianjishenghuo.cn/img/home/brand/sijiqing_select@2x.png'
                    },

                ],
                //  新闻动态
                "newList": [
                    {id:1,title:'消费者省钱',text:'1.消费返利 2.分享收益 3.便民服务 4.角色升级商家多赚钱：1.成本降低 2.流量升级 3.',source:'1',link:''},
                    {id:2,title:'消费者省钱',text:'1.消费返利 2.分享收益 3.便民服务 4.角色升级商家多赚钱：1.成本降低 2.流量升级 3.'},
                    {id:3,title:'消费者省钱',text:'1.消费返利 2.分享收益 3.便民服务 4.角色升级商家多赚钱：1.成本降低 2.流量升级 3.',detail:'1',link:''},
                    {id:4,title:'消费者省钱',text:'1.消费返利 2.分享收益 3.便民服务 4.角色升级商家多赚钱：1.成本降低 2.流量升级 3.'},
                    {id:5,title:'消费者省钱',text:'1.消费返利 2.分享收益 3.便民服务 4.角色升级商家多赚钱：1.成本降低 2.流量升级 3.'},
                ]
            }
        },
        methods:{
            /**
             * 接口示例
              */
            getCode(){
                let postData = {
                    "mobile": '15635652498',
                    "deviceType": '3',
                    "timestamp": this.timestamp,
                };
                console.log(postData);
                postData = this.$qs.stringify(postData);
                console.log(postData);
                this.axios.post('/api/user/smsCodeH5',postData).then(res=>{
                    console.log(res);
                    if(res.data.code==200){
                        console.log('发送成功');
                    }else {
                        console.log(res.data.message);
                    }
                });
            },
            /**
             * banner按钮
             */
            pageClick(i){
                console.log(i);
                this.imgIndex = i;
            },
            /**
             * 切换banner
             */
            move() {
                this.imgIndex ++;
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
            stop(){
                console.log("停止");
                var that = this;
                clearInterval(that.timer);
            },
            /**
             * 继续轮播
             */
            goOn(){
                console.log("继续");
                var that = this;
                this.timer = setInterval(that.move, 3000);
            },
            /**
             * 行业切换
             */
            showContent(num){
                this.industryIndex = num;
            },
            /**
             * 点击轮播跳转页面
             */
            pageJump(item){
                if(item.link){
                    this.$router.push(item.link);
                }else {

                }
            },
            /**
             * 隐藏视频
             */
            hideVideo(e) {
                console.log(e.target);
                if(e.target.tagName.toLocaleLowerCase()==="video"){
                    /* video.play() 控制视频播放*/
                    /* video.pause() 控制视频暂停*/
                    /* video.paused 视频暂停*/
                }else {
                    let video = document.querySelector("video");
                    video.pause();//控制视频暂停
                    this.videoShow = false;
                    window.removeEventListener('scroll',this.scrollWay,false)
                }
            },
            /**
             * 展示视频
             */
            showVideo() {
                this.videoShow = true;
                document.querySelector("video").play();
                this.now = document.documentElement.scrollTop || document.body.scrollTop;
                window.addEventListener('scroll',this.scrollWay);
            },
            scrollWay(){
                document.documentElement.scrollTop = this.now;
                document.body.scrollTop = this.now;
            },
            /**
             * 跳转新闻页面
             */
            goNews(){
                document.documentElement.scrollTop = 0;
                this.$router.push('/news');
            },
        },
        created() {
            var that = this;
            this.timer = setInterval(that.move, 3000);
        },
        mounted(){
            document.documentElement.scrollTop = 0;
        },
        destroyed(){
            clearInterval(this.timer);　　// 清除定时器
            this.timer = null;
        },
    }
</script>

<style scoped lang="scss">
    .home {
        /*轮播*/
        .bannerBox {
            /*width: 100%;*/
            /*height: 760px;*/
            position: relative;
            background: rgba(0, 0, 0, 0.6);
            background: linear-gradient(to right,#00039F 50% ,#0242F4 100%);
            .banners {
                width: 100vw;
                height: auto;
                margin: 0 auto;
                position: relative;
                .imgBox {
                    position: relative;
                    overflow: hidden;
                    img {
                        width: 100vw;
                        height: auto;
                        /*position: absolute;*/
                        /*top: 0;*/
                        /*left: 0;*/
                        float: left;
                        display: none;
                        /*opacity: 0;*/
                        transition: all 1s;
                    }
                    .imgAct {
                        display: block;
                        /*opacity: 1;*/
                        animation: opacityWay 1s ease-in-out;
                    }
                    img:after {
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
                    .page {
                        width:8px;
                        height:8px;
                        background: rgba(255,255,255,.3);
                        border-radius:4px;
                        margin: 0 5px;
                        transition: all .2s;
                    }
                    .pageAct {
                        width: 47px;
                        background: #fff;
                    }
                }
            }
        }
        /*应用场景*/
        .scenarioBox {
            width: 100%;
            height: 760px;
            background: #fff;
            text-align: center;
            position: relative;
            .scenario {
                width: 1200px;
                height: 760px;
                margin: 0 auto;
                padding: 36px 0 96px;
                /*padding: 66px 0 96px;*/
                h1 {
                    font-size:38px;
                }
                .intro {
                    font-size:16px;
                    margin: 20px 0 36px;
                    /*margin: 20px 0 56px;*/
                }
                .itemBox {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .item {
                        width: 278px;
                        height: 470px;
                        background: url("http://prod.dianjishenghuo.cn/img/home/shejiaobg.png") center;
                        background-size: 100% 100%;
                        color: #fff;
                        transition: all .6s;
                        .mask {
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, .6);
                            padding: 72px 18px 0 22px;
                            .titleBox {
                                height: 223px;
                                overflow: hidden;
                                img {
                                    width: 60px;
                                    height: 60px;
                                    margin-bottom: 45px;
                                    transition: all .6s;
                                }
                                .line {
                                    width: 59px;
                                    height: 4px;
                                    margin: 12px auto 28px;
                                    display: none;
                                    transition: all .6s;
                                    background: #3383FF;
                                }
                                .title {
                                    font-size: 24px;
                                }
                                .hide {
                                    display: none;
                                    transition: all .6s;
                                }
                            }
                            p {
                                font-size: 16px;
                                line-height: 28px;
                            }
                            .detail {
                                text-align: left;
                            }
                        }
                    }
                    .item:hover .mask .titleBox img{
                        height: 0;
                    }
                    .item:hover .mask .line,.item:hover .mask .hide {
                        display: block;
                    }
                    .item:nth-child(2){
                        background: url("http://prod.dianjishenghuo.cn/img/home/zhihuibg.png");
                        background-size: 100% 100%;
                    }
                    .item:nth-child(3){
                        background: url("http://prod.dianjishenghuo.cn/img/home/bianminbg.png");
                        background-size: 100% 100%;
                    }
                    .item:nth-child(4){
                        background: url("http://prod.dianjishenghuo.cn/img/home/xinyongbg.png");
                        background-size: 100% 100%;
                    }
                    .item:hover {
                        background-size: 130% 130%;
                    }
                }
            }
        }
        /*优势*/
        .advantageBox {
            width: 100%;
            height: auto;
            background: linear-gradient(to right,#00039F 50% ,#0242F4 100%);
            .advantage {
                width: 100vw;
                height: auto;
                margin: 0 auto;
                background: url("http://prod.dianjishenghuo.cn/img/home/xfzsqbg@2x.png") center;
                background-size: 100% 100%;
                .itemBox {
                    width: 1200px;
                    height: 100%;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .item {
                        width: 264px;
                        height: 100%;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
        /*数据展示*/
        .showDataBox {
            width: 100%;
            background: #fff;
            .showData {
                width: 1200px;
                margin: 0 auto;
                padding: 60px 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #909090;
                .show {
                    /*display: flex;*/
                    /*align-items: flex-end;*/
                    span {
                        font-size: 48px;
                        font-weight: bold;
                    }
                    p {
                        font-size: 22px;
                        text-align: center;
                        margin-top: 10px;
                    }
                }


            }
        }
        /* 行业应用 */
        .industryBox {
            width: 100%;
            .industryBg {
                margin: 0 auto;
                .industry {
                    position: relative;
                    text-align: center;
                    color: #fff;
                    img {
                        width: 100vw;
                        height: auto;
                    }
                    .mask {
                        width: 100%;
                        height: 100%;
                        background: rgba(19, 32, 49, 0.75);
                        padding: 90px 0 95px 0;
                        position: absolute;
                        top: 0;
                        left: 0;
                        .titleBox {
                            font-weight: 300;
                            margin-bottom: 50px;
                            h1 {
                                font-size:38px;
                                line-height: 58px;
                            }
                            span {
                                font-size: 18px;
                                line-height:58px;
                            }
                        }
                        .contentBox {
                            width: 1200px;
                            height: calc( 100% - 145px);
                            margin: 0 auto;
                            display: flex;
                            align-items: flex-start;
                            .navBox {
                                padding: 0 30px;
                                border-right: 4px solid #fff;
                                height: 100%;
                                .nav {
                                    width: 120px;
                                    line-height: 42px;
                                    margin-bottom: 20px;
                                    background: transparent;
                                    border-radius: 5px;
                                }
                                .nav.act {
                                    background: #3383FF;
                                }
                                .nav:hover {
                                    background: #3383FF;
                                    cursor: pointer;
                                }
                            }
                            .detailBox {
                                padding: 20px 0 30px 62px ;
                                height: 100%;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                h2 {
                                    font-size: 26px;
                                    text-align: left;
                                }
                                .detailText {
                                    font-size: 14px;
                                    line-height: 34px;
                                    text-align: left;
                                }
                                .iconBox {
                                    display: flex;
                                    align-items: center;
                                    .icon {
                                        margin-right: 104px;
                                        img {
                                            width: 30px;
                                            height: 30px;
                                        }
                                        p {
                                            font-size: 16px;
                                            white-space: nowrap;
                                            margin-top: 10px;
                                        }
                                    }
                                    .icon:last-child {
                                        margin: 0;
                                    }
                                }
                                .btn {
                                    width: 136px;
                                    line-height: 36px;
                                    border: 1px solid #fff;
                                    border-radius: 5px;
                                    font-size: 16px;
                                    a {
                                        color: #fff;
                                    }
                                }
                                .btn:hover {
                                    /*border: 1px solid rgba(51, 131, 255, 1);*/
                                    cursor: pointer;
                                }
                                .btn:hover a{
                                    /*color: rgb(11, 178, 255);*/
                                }
                            }
                        }
                    }
                }
            }
        }
        /*品牌*/
        .brandBox {
            width: 100%;
            /*height: 400px;*/
            background: #fff;
            .brand {
                width: 100vw;
                /*height: 400px;*/
                margin: 0 auto;
                h1 {
                    text-align: center;
                    color: #3E3E4D;
                    font-size: 38px;
                    line-height: 104px;
                    padding-top: 40px;
                }
                .itemBox {
                    width: 1320px;
                    height: 350px;
                    margin: 0 auto;
                    display: flex;
                    align-content: space-between;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    padding: 52px 0 104px;
                    .item {
                        width: 20%;
                        img {
                            width: 120px;
                            height: 60px;
                            display: block;
                            margin: 0 auto;
                        }
                    }
                }
            }
        }
        /*新闻动态*/
        .newBox {
            width: 100%;
            background: #F5F8FB;
            .new {
                width: 1200px;
                padding-bottom: 66px;
                color: #fff;
                text-align: center;
                margin: 0 auto;
                h1 {
                    color: #3E3E4D;
                    font-size: 38px;
                    line-height: 104px;
                    margin-top: 30px;
                }
                .more {
                    text-align: right;
                    font-size: 14px;
                    line-height: 24px;
                    margin-bottom: 4px;
                    color: #3E3E4D;
                    span {
                        font-size: 22px;
                    }
                }
                .more:hover {
                    cursor: pointer;
                }
                .newContent {
                    display: flex;
                    align-items: center;
                    text-align: left;
                    .resale:hover {
                        cursor: pointer;
                    }
                    .resale {
                        width: 380px;
                        height: 528px;
                        background: url("../assets/img/home/resale/resaleBJ@2x.png");
                        background-size: 100% 100%;
                        padding: 0 30px;
                        position: relative;
                        h2 {
                            font-size: 30px;
                            font-weight: bold;
                            line-height: 54px;
                            margin: 110px 0 70px 0;
                            text-align: center;
                        }
                        h3 {
                            font-size: 18px;
                            font-weight: bold;
                            padding-top: 56px;
                        }
                        p {
                            width: 100%;
                            font-size: 14px;
                            font-weight: 400;
                            line-height: 32px;
                            margin-top: 10px;
                            text-size-adjust: none;
                            -webkit-text-size-adjust: none;
                            -moz-text-size-adjust: none;
                            -ms-text-size-adjust: none;
                            /*-webkit-transform: scale(0.95);*/
                        }
                        .videoBtn {
                            width: 68px;
                            height: 68px;
                            background: url("../assets/img/home/resale/resaleBF@2x.png");
                            background-size: 100% 100%;
                            margin: 0 auto;
                        }
                        .videoBtn:hover {
                            cursor: pointer;
                        }
                        .videoBtnBox {
                            width: 100%;
                            padding: 17px 29px;
                            background: rgba(0, 0, 0, 0.2);
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            div {
                                width: 121px;
                                line-height: 34px;
                                border: 1px solid #fff;
                                text-align: center;
                                i {
                                    font-size: 20px;
                                }
                            }
                            div:hover {
                                /*border: 1px solid rgb(11, 178, 255);*/
                                /*background: rgba(246, 111, 106, 0.02);*/
                                /*color: rgb(11, 178, 255);*/
                            }
                        }
                        .videoBtnBox:hover {
                            /*background: rgba(0, 0, 0, 0.4);*/
                        }
                    }
                    .videoBox {
                        width: 100vw;
                        height: 100vh;
                        background: rgba(51, 51, 51, 0.6);
                        position: fixed;
                        top: 0;
                        left: 0;
                        overflow-y: scroll;
                        z-index: 999;
                        video {
                            width: calc(100% - 400px);
                            height: calc(100% - 200px);
                            background: #333333;
                            position: absolute;
                            margin: auto;
                            left: 0;
                            top: 0;
                            bottom: 0;
                            right: 0;
                        }
                    }
                    .itemBox {
                        flex: 1;
                        height: 528px;
                        background: #fff;
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        .item {
                            width: 33.333333%;
                            /*flex-shrink: 1;*/
                            color: #3E3E4D;
                            height: 264px;
                            padding: 0 20px;
                            position: relative;
                            h3 {
                                font-size: 22px;
                                font-weight: bold;
                                padding-top: 50px;
                            }
                            p {
                                width: 100%;
                                font-size: 16px;
                                font-weight: 400;
                                line-height: 26px;
                                margin-top: 30px;
                                text-size-adjust: none;
                                -webkit-text-size-adjust: none;
                                -moz-text-size-adjust: none;
                                -ms-text-size-adjust: none;
                                -webkit-transform: scale(0.95);
                            }
                            .source {
                                width: 92px;
                                line-height: 32px;
                                text-align: center;
                                border: 1px solid #fff;
                                font-size: 14px;
                                position: absolute;
                                bottom: 12px;
                                right: 2px;
                                text-size-adjust: none;
                                -webkit-text-size-adjust: none;
                                -moz-text-size-adjust: none;
                                -ms-text-size-adjust: none;
                                -webkit-transform: scale(0.95);
                            }
                            .source:hover {
                                /*border: 1px solid #0BB2FF;*/
                                /*color: #0BB2FF;*/
                                cursor: pointer;
                            }
                            .detail {
                                font-size: 16px;
                                position: absolute;
                                bottom: 33px;
                                left: 20px;
                            }
                            .detail:hover {
                                color: rgb(11, 178, 255);
                                cursor: pointer;
                            }
                            .detail1 {
                                width: 92px;
                                line-height: 32px;
                                text-align: center;
                                border: 1px solid #3E3E4D;
                                font-size: 14px;
                                position: absolute;
                                bottom: 12px;
                                right: 2px;
                                text-size-adjust: none;
                                -webkit-text-size-adjust: none;
                                -moz-text-size-adjust: none;
                                -ms-text-size-adjust: none;
                                -webkit-transform: scale(0.75);
                            }
                            .detail1:hover {
                                /*border: 1px solid #0BB2FF;*/
                                /*color: #0BB2FF;*/
                                cursor: pointer;
                            }
                        }
                        .item:nth-child(4) {
                            width: 33.333333% * 2;
                            /*flex-shrink: 2;*/
                        }
                        .pinkBg {
                            background: #F66F6A;
                            color: #fff
                        }
                        .itemBg {
                            background: url("http://prod.dianjishenghuo.cn/img/home/resale/itemBg@2x.png");
                            background-size: 100% 100%;
                            color: #fff
                        }
                    }
                }
            }
        }

    }
</style>