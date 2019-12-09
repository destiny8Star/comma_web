<template>
    <div class="news">
        <navigation/>
        <div class="headImg">
            <img src="http://prod.dianjishenghuo.cn/img/news/XWZX-xwt@2x.jpeg" alt="">
            <div class="mask">
                <h1>新闻资讯</h1>
                <p>每一条资讯都是热点</p>
            </div>
        </div>

        <div class="newContent">
            <div class="title"
                 v-show="n==navIndex"
                 v-for="(nav,n) in navList"
                 :key="n">
                {{nav.text}}
            </div>
            <div class="contentBox">
                <div class="content">
                    <div class="item"
                         @click="goDetail(ele)"
                         v-for="(ele,i) in newList"
                         :key="i">
                        <img :src="ele.imgUrl" alt="">
                        <div class="info">
                            <h2>{{ele.title}}</h2>
                            <p>{{ele.detail}}</p>
                            <span>{{ele.date}}</span>
                        </div>
                    </div>
                </div>
                <div class="navBox">
                    <div class="navTitle">快速导航</div>
                    <div class="navBox">
                        <div class="nav"
                             :class="{navAct:navIndex==n}"
                             @click="newUpdate(nav,n)"
                             v-for="(nav,n) in navList"
                             :key="n">{{nav.text}}</div>
                    </div>
                    <div class="newestBox">
                        <div class="navTitle">最新资讯</div>
                        <div class="itemBox">
                            <div
                                    class="newest"
                                    @click="goDetail(ele)"
                                    v-for="(ele,n) in newestList"
                                    :key="n">
                                <img :src="ele.imgUrl" alt="">
                                <div class="info">
                                    <h3>{{ele.title}}</h3>
                                    <p>{{ele.detail}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <foot/>
    </div>
</template>

<script>
    import foot from '@/components/foot.vue'
    import navigation from '@/components/navigation.vue'

    export default {
        name: "news",
        components: {
            navigation,//头部
            foot,//站点尾部

        },
        data(){
            return {
                // 导航按钮
                "navList": [
                    {id:1,text: '公司动态'},
                    {id:2,text: '媒体报道'},
                    {id:3,text: '行业资讯'}
                ],
                // 导航索引
                navIndex: 0,
            //    新闻
                "newList": [
                    {id:1,title:'个人怎么加入新零售，新零售模式怎么赚钱的？',detail:'商业竞争的本质就是效率和成本，马云曾在16年的云栖大会上说：未来十年，二十年没有电子商务，只有新零售。新零售成为创投行业的热词....',date: '2019-04-16',imgUrl:'http://prod.dianjishenghuo.cn/img/news/XWZX-xwt@2x.png'},
                    {id:1,title:'个人怎么加入新零售，新零售模式怎么赚钱的？',detail:'商业竞争的本质就是效率和成本，马云曾在16年的云栖大会上说：未来十年，二十年没有电子商务，只有新零售。新零售成为创投行业的热词....',date: '2019-04-16',imgUrl:'http://prod.dianjishenghuo.cn/img/news/XWZX-xwt@2x.png'},
                    {id:1,title:'个人怎么加入新零售，新零售模式怎么赚钱的？',detail:'商业竞争的本质就是效率和成本，马云曾在16年的云栖大会上说：未来十年，二十年没有电子商务，只有新零售。新零售成为创投行业的热词....',date: '2019-04-16',imgUrl:'http://prod.dianjishenghuo.cn/img/news/XWZX-xwt@2x.png'},
                ],
                // 最新资讯
                "newestList": [
                    {id:1,title:'个人怎么加入新零售，新零售模式怎么赚钱的？',detail:'商业竞争的本质就是效率和成本，马云曾在16年的云栖大会上说：未来十年，二十年没有电子商务，只有新零售。新零售成为创投行业的热词....',imgUrl:'http://prod.dianjishenghuo.cn/img/news/XWZX-xwt@2x.png'},
                    {id:1,title:'个人怎么加入新零售，新零售模式怎么赚钱的？',detail:'商业竞争的本质就是效率和成本，马云曾在16年的云栖大会上说：未来十年，二十年没有电子商务，只有新零售。新零售成为创投行业的热词....',imgUrl:'http://prod.dianjishenghuo.cn/img/news/XWZX-xwt@2x.png'},
                    {id:1,title:'个人怎么加入新零售，新零售模式怎么赚钱的？',detail:'商业竞争的本质就是效率和成本，马云曾在16年的云栖大会上说：未来十年，二十年没有电子商务，只有新零售。新零售成为创投行业的热词....',imgUrl:'http://prod.dianjishenghuo.cn/img/news/XWZX-xwt@2x.png'},
                ]
            }
        },
        methods:{
            // 切换新闻
            newUpdate(item,i){
                this.navIndex = i;
            },
            // 跳转详情页面
            goDetail(item) {
                console.log(item);
                // this.$router.push('/newDetail');
            }
        }
    }
</script>

<style scoped lang="scss">
    .news {
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
        .newContent {
            width: 1200px;
            margin: 0 auto;
            .title {
                line-height: 80px;
                font-size: 16px;
                font-weight:300;
            }
            .contentBox {
                margin-top: 12px;
                display: flex;
                .content {
                    .item {
                        margin-bottom: 24px;
                        padding: 16px 10px 16px 0;
                        display: flex;
                        background:rgba(251,251,251,1);
                        margin-right: 60px;
                        img {
                            width: 250px;
                            height: 218px;
                        }
                        .info {
                            padding-left: 24px;
                            h2 {
                                font-size: 16px;
                                line-height: 24px;
                            }
                            h2:hover {
                                cursor: pointer;
                            }
                            p {
                                font-size: 12px;
                                color: rgba(0,0,0,1);
                                line-height: 24px;
                                margin: 12px 0 38px;
                                display: -webkit-box;
                                overflow : hidden;
                                text-overflow: ellipsis;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                            }
                            span {
                                font-size: 13px;
                                line-height: 20px;
                            }
                        }
                    }
                }
                .navBox {
                    width: 300px;
                    .navTitle {
                        line-height: 18px;
                        padding-left: 32px;
                        font-size: 18px;
                        font-weight: 600;
                        border-left: 2px solid #3E3E4D;
                    }
                    .navBox {
                        margin: 26px 0;
                        .nav {
                            width: 300px;
                            line-height: 50px;
                            background: rgba(251,251,251,1);
                            font-size: 18px;
                            font-weight: 300;
                            padding-left: 20px;
                            margin: 6px 0;
                        }
                        .navAct {
                            background: rgba(37, 164, 187, 0.3);
                            color: #fff;
                        }
                        .nav:hover {
                            cursor: pointer;
                            background: rgba(37, 164, 187, 0.1);
                            color: #fff;
                        }
                    }
                    .newestBox {
                        .itemBox {
                            margin: 22px 0;
                            .newest {
                                margin: 10px 0;
                                padding: 16px 7px 16px 12px;
                                display: flex;
                                img {
                                    width: 96px;
                                    height: 74px;
                                }
                                .info {
                                    width: 168px;
                                    padding-left: 13px;
                                    h3 {

                                        font-size: 14px;
                                        line-height: 20px;
                                        margin-bottom: 14px;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }
                                    h3:hover {
                                        cursor: pointer;
                                    }
                                    p {
                                        font-size: 12px;
                                        font-weight: 300;
                                        line-height: 18px;
                                        text-indent: 1em;
                                        display: -webkit-box;
                                        overflow : hidden;
                                        text-overflow: ellipsis;
                                        -webkit-box-orient: vertical;
                                        -webkit-line-clamp: 2;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>