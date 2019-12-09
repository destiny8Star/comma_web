<template>
    <div class="product">
        <navigation/>
        <!-- 头图 start -->
        <div class="headImg">
            <div v-for="(headImg,h) in headList" :key="h" v-show = "navIndex == h">
                <img :src="headImg.imgUrl" alt="">
                <div class="mask">
                    <div class="title">
                        <p>{{headImg.text}}</p>
                        <span>{{headImg.detail}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 头图 end -->

        <!-- nav 导航 start -->
        <div class="navBox">
            <div class="navs">
                <div
                    class="nav"
                    @mouseenter="nav.flag = true"
                    @mouseleave="nav.flag = false"
                    v-for="(nav,n) in navList"
                    :key="n"
                    @click="chooseNav(nav,n)"
                    :class="{act:navIndex == n}">
                    <img :src="[navIndex == n || nav.flag ? nav.icon_select : nav.icon]" alt="">
                    <p :class="{act:navIndex == n}">{{nav.text}}</p>
                </div>
            </div>
        </div>
        <!-- nav 导航 end -->


        <div class="contentAll">

            <div>

                <!-- 线上商城 start -->
                <onlineShopping v-if="navIndex == 0"></onlineShopping>

                <!-- 智慧商圈 start -->
                <wisdom v-if="navIndex == 1"></wisdom>

                <!-- 信用生活 start -->
                <creditLife v-if="navIndex == 2"></creditLife>

                <!-- 本地服务 -->
                <localService v-if="navIndex == 3"></localService>
            </div>
        </div>
        <foot/>
    </div>
</template>

<script>
    import foot from '@/components/foot.vue'
    import navigation from '@/components/navigation.vue'
    import wisdom from '@/components/product/wisdom.vue'
    import localService from '@/components/product/localService.vue'
    import onlineShopping from '@/components/product/onlineShopping.vue'
    import creditLife from '@/components/product/creditLife.vue'


    export default {
        name: "product",
        components: {
            navigation,//头部
            foot,//站点尾部
            wisdom,//智慧商圈
            localService,//本地服务
            onlineShopping,//线上商城
            creditLife,//信用生活
        },
        data(){
            return {
                // 导航按钮
                navList: [
                    {id:1,flag:false,text:'线上商城',icon: 'http://prod.dianjishenghuo.cn/img/product/XYSH-sjds-weixuanhong.png',icon_select: 'http://prod.dianjishenghuo.cn/img/product/XYSH-sjds-xuanzhong@2x.png'},
                    {id:2,flag:false,text:'智慧商圈',icon: 'http://prod.dianjishenghuo.cn/img/product/zhsq@2x.png',icon_select: 'http://prod.dianjishenghuo.cn/img/product/zhsq_select@2x.png'},
                    {id:3,flag:false,text:'信用生活',icon: 'http://prod.dianjishenghuo.cn/img/product/XYSH-xysh-weixuan@2x.png',icon_select: 'http://prod.dianjishenghuo.cn/img/product/XYSH-xysh-yixuan@2x.png'},
                    {id:4,flag:false,text:'本地服务',icon: 'http://prod.dianjishenghuo.cn/img/product/XYSH-bdfw-weixuan@2x.png',icon_select: 'http://prod.dianjishenghuo.cn/img/product/XYSH-bdfw-xuanding@2x.png'}
                ],
                navs: '0',
                //  头图列表
                headList: [
                    {id:1,imgUrl: 'http://prod.dianjishenghuo.cn/img/product/XSSC-banner@2x.jpg',text: '线上商城',detail:'挖掘你身边的每一个潜在资源'},
                    {id:2,imgUrl: 'http://prod.dianjishenghuo.cn/img/product/ZHSQ-toutu@2x.jpg',text: '技术重构 客+商互联',detail:'赋能线上线下，构建客商零售生态圈'},
                    {id:3,imgUrl: 'http://prod.dianjishenghuo.cn/img/product/XYSH-toutu@2x.jpg',text: '信用生活',detail:'让信用点亮生活'},
                    {id:4,imgUrl: 'http://prod.dianjishenghuo.cn/img/product/BDFW-banner@2x-2.jpg',text: '本地服务',detail:'便民服务窗，集充值缴费、查询服务于一体的本地生活服务圈'}
                ]
            }
        },
        computed:{
            navIndex:{
                get() {
                    if(this.$route.query.navIndexs){
                        return this.$route.query.navIndexs;
                    }else {
                        return 0;
                    }
                }
                ,
                // setter
                set(newValue) {
                    console.log(newValue,this.$route.query.navIndexs);
                    // this.$router.push("/aboutUs?navIndexs="+newValue);
                    this.$router.replace("/product?navIndexs="+newValue);
                    console.log(newValue,this.$route.query.navIndexs);
                }

            }
        },
        methods:{
            chooseNav(item,i){
                console.log(item);
                // document.documentElement.scrollTop = 0;
                this.navIndex = i;
            }
        },
        mounted(){
            document.documentElement.scrollTop = 0;
        }
    }
</script>

<style scoped lang="scss">
    .product {
        color: #fff;

        /* 头图 */
        .headImg {
            position: relative;
            img {
                width: 100vw;
            }
            .mask {
                width: 100%;
                height: 100%;
                background: rgba(40, 40, 52, 0.56);
                position: absolute;
                top: 0;
                left: 0;
                font-size: 32px;
                font-weight: 300;
                .title {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    p {
                        font-size: 72px;
                        font-weight: 500;
                        line-height: 108px;
                    }
                    span {
                        font-size: 36px;
                        font-weight: 300;
                        line-height: 54px;
                    }
                }
            }
        }
        /* nav导航 */
        .navBox {
            width: 100vw;
            background: #fff;
            border-bottom: 1px solid #D8D8D8;
            .navs {
                width: 1200px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 0 auto;
                padding: 0 40px;
                .nav {
                    width: 190px;
                    line-height: 84px;
                    font-size: 24px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #CBCDD6;
                    img {
                        width: 30px;
                        height: 30px;
                    }
                    p {
                        margin-left: 10px;
                        border-bottom: 1px solid transparent;
                    }
                    p.act {
                        color: #3E3E4D;
                        border-bottom: 1px solid #3E3E4D;
                    }
                }
                .nav.act {
                    color: #3E3E4D;
                }
                .nav:hover p{
                    cursor: pointer;
                    border-bottom: 1px solid #3E3E4D;
                    color: #3E3E4D;
                }
            }

        }
        .contentAll {

        }

    }
</style>