<template>
    <div class="overall">
        <div class="headBox" :class="{act:searchBarFixed}">
            <div class="head">
                <img src="http://prod.dianjishenghuo.cn/img/components/logos.png" alt="">
                <ul class="navBox">
                    <li
                            class="item"
                            :class="{itemAct:item.flag}"
                            v-for="(item,i) in navList"
                            :key="i"
                            @mouseenter="headBgEnter(item)"
                            @mouseleave="headBg(item)">
                        <a v-if="i!==5" @click="$router.push(item.link)">{{item.text}}</a>
                        <a v-else href="http://agent.dianjishenghuo.cn">{{item.text}}</a>
                        <!--<div :class="{hideBg:searchBarFixed&&enter}"></div>-->
                        <!--<div class="actLine" v-show="item.flag"></div>-->
                        <div class="hideBigBox" :class="{hideBigBoxAct:enter&&item.children}">
                            <div class="hideBox">
                                <div
                                        class="hide"
                                        v-for="(ele,k) in item.children"
                                        :key="k"
                                        @click.stop="jumpPage(ele,k)">
                                    <img :src="ele.imgUrl" alt="">
                                    <div class="line"></div>
                                    <div class="box">
                                        <h2>{{ele.title}}</h2>
                                        <p>{{ele.text}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "navigation",
        data(){
            return {
                navList: [
                    {
                        id:1,
                        text: '首页',
                        flag: false,
                        link: '/',
                    },
                    {
                        id:2,
                        text: '产品体系',
                        flag: false,
                        link: '/product',
                        children: [
                            {id: 2-1, imgUrl: 'http://prod.dianjishenghuo.cn/img/components/shejiao.png', title: '在线商城', text: '购物省钱，分享收益',link:"/product"},
                            {id: 2-2, imgUrl: 'http://prod.dianjishenghuo.cn/img/components/zhihui.png', title: '智慧商圈', text: '让门店经营更高效',link:"/product"},
                            {id: 2-3, imgUrl: 'http://prod.dianjishenghuo.cn/img/components/xinyong.png', title: '信用生活', text: '手机里的信用管家',link:"/product"},
                            {id: 2-4, imgUrl: 'http://prod.dianjishenghuo.cn/img/components/bianmin.png', title: '本地服务', text: '掌心上的便民窗口',link:"/product"},
                        ]
                    },
                    {
                        id:3,
                        text: '申请入驻',
                        flag: false,
                        link: '/joinIn',
                        children: [
                            {id: 3-1, imgUrl: 'http://prod.dianjishenghuo.cn/img/components/fuwushang.png', title: '代理入驻', text: '一区一主，享受流水收益',link:"/joinIn"},
                            {id: 3-2, imgUrl: 'http://prod.dianjishenghuo.cn/img/components/shangjiaruzhu.png', title: '商家入驻', text: '免费入驻，跨界流量共享',link:"/recruitment"},
                        ]
                    },
                    {
                        id:4,
                        text: '关于我们',
                        flag: false,
                        link: '/aboutUs',
                        children: [
                            {id: 4-1, imgUrl: 'http://prod.dianjishenghuo.cn/img/components/jieshao@2x.png', title: '公司介绍', text: '梦想之路，只有逗号，没有句号',link:'/aboutUs'},
                            {id: 4-2, imgUrl: 'http://prod.dianjishenghuo.cn/img/components/fazhan@2x.png', title: '发展历程', text: '技术重构，改写未来',link:'/aboutUs'},
                            {id: 4-3, imgUrl: 'http://prod.dianjishenghuo.cn/img/components/guanli@2x.png', title: '管理团队', text: '大咖齐聚，精英荟萃',link:'/aboutUs'},
                            {id: 4-4, imgUrl: 'http://prod.dianjishenghuo.cn/img/components/GZJH@2x.png', title: '办公环境', text: '让工作更舒适',link:'/aboutUs'},
                            {id: 4-5, imgUrl: 'http://prod.dianjishenghuo.cn/img/components/jihui@2x.png', title: '工作机会', text: '我有平台，你来不来',link:'/aboutUs'},
                            {id: 4-6, imgUrl: 'http://prod.dianjishenghuo.cn/img/components/lianxi@2x.png', title: '联系我们', text: '400-9900-188',link:'/aboutUs'},
                        ]
                    },
                    {id:5, text: '下载APP', flag: false, link: ''},
                    {id:6, text: '服务商登录', flag: false, link: 'http://agent.dianjishenghuo.cn'},
                ],
                searchBarFixed: false,
                enter: false,
            }
        },
        methods:{
            headBgEnter(){
                this.searchBarFixed = this.enter = true;

            },
            /** 控制头部背景色显示/隐藏 -- start **/
            headBg(ele){
                console.log(ele);
                this.enter = false;
                if(document.documentElement.scrollTop==0){
                    this.searchBarFixed = false;
                }
            },
            handleScroll () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                let offsetTop = document.querySelector('.headBox').offsetTop;
                scrollTop > offsetTop || this.enter ? this.searchBarFixed = true : this.searchBarFixed = false
            },
            /**  控制头部背景色显示/隐藏 --end **/
        //    跳转页面
            jumpPage(item,i){
                console.log(i);
                // this.$router.push(item.link);
                document.documentElement.scrollTop = 0;
                this.$router.replace({path:item.link,query:{navIndexs:i}})
            },
            /**
             *  跳转到执行服务商后台登录页面
             */
            goMessage(link){
                window.location.href = link;
            }
        },
        mounted () {
            console.log(this.$route.path);
            this.navList.forEach(ele=>{
                if(ele.link == this.$route.path) {
                    ele.flag = true;
                }
            });
            window.addEventListener('scroll', this.handleScroll)
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll)
        },
    }
</script>

<style scoped lang="scss">
    .overall {
        .headBox.act {
            background: rgba(51, 51, 51, 0.8);
        }
        .headBox {
            height: 80px;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9999;
            .head {
                width: 1200px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 0 auto;
                img {
                    width: 120px;
                    height: 60px;
                }
                .navBox {
                    /*width: 100%;*/
                    height: 100%;
                    display: flex;
                    align-items: center;
                    .item:hover .hideBigBox {
                        display: block;
                    }
                    .item:hover {
                        cursor: pointer;
                        border-bottom: 2px solid #fff;
                    }
                    .itemAct {
                        border-bottom: 2px solid #fff !important;
                    }
                    .item {
                        width: 120px;
                        height: 100%;
                        border-bottom: 2px solid transparent;
                        text-align: center;
                        position: relative;
                        a {
                            width: 100%;
                            height: 100%;
                            color: #fff;
                            display: block;
                            line-height: 80px;
                        }
                        /*.hideBg {*/
                            /*width: 100vw;*/
                            /*height: 164px;*/
                            /*position: fixed;*/
                            /*top: 80px;*/
                            /*left: 0;*/
                            /*z-index: 1;*/
                        /*}*/
                        .actLine {
                            width: 120px;
                            height: 2px;
                            background: #fff;
                        }
                        .hideBigBox {
                            width: 100vw;
                            display: none;
                            background: rgba(51, 51, 51, 0.8);
                            //position: absolute;
                            //top: 0;
                            //left: -50vw;
                            position: fixed;
                            /*margin-top: 1px;*/
                            top: 80px;
                            left: 0;
                            z-index: 56;
                            /*margin-top: 80px;*/
                            /*background: red;*/
                            .hideBox {
                                width: 1200px;
                                margin: 0 auto;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                .hide {
                                    min-width: 210px;
                                    height: 164px;
                                    display: flex;
                                    align-items: center;
                                    color: #fff;
                                    padding: 0 10px;
                                    img {
                                        width: 40px;
                                        height: 40px;
                                    }
                                    .line {
                                        width:2px;
                                        height:38px;
                                        background: rgba(255,255,255,.2);
                                        margin: auto 14px auto 5px;
                                    }
                                    .box {
                                        text-align: left;
                                        h2 {
                                            font-size: 16px;
                                        }
                                        p {
                                            text-align: left;
                                            font-size: 14px;
                                            color: rgba(255,255,255,0.5);
                                            /*-webkit-transform: scale(0.75);*/
                                        }
                                    }
                                }
                            }
                        }

                    }
                    .item:last-child {
                        width: 100px;
                        height: 32px;
                        border: 1px solid rgba(255,255,255,.5);
                        font-size: 12px;
                        /*padding: 5px 9px;*/
                        text-size-adjust: none;
                        -webkit-text-size-adjust: none;
                        -moz-text-size-adjust: none;
                        -ms-text-size-adjust: none;
                        /*-webkit-transform: scale(0.75);*/
                        a {
                            line-height: 30px;
                        }
                    }
                }
            }
        }
    }

</style>