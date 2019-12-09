<template>
    <div class="aboutUs">
        <navigation/>
        <!-- 头图 start -->
        <div class="headImg">
            <div v-for="(headImg,h) in headList" :key="h" v-show = "navIndex == h">
                <img :src="headImg.imgUrl" alt="">
                <div class="mask">
                    <div class="title">
                        <p>{{headImg.text}}</p>
                        <span>{{headImg.english}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 头图 end -->

        <div class="contentAll">
            <!-- nav 导航 start -->
            <div class="navBox">
                <div
                        class="nav"
                        v-for="(nav,n) in navList"
                        :key="n"
                        @click="chooseNav(nav,n)"
                        :class="{act:navIndex == n}">
                    <p>{{nav.text}}</p>
                </div>
            </div>
            <!-- nav 导航 end -->
            <div>

                <!-- 公司介绍 start -->
                <companyProfile v-if="navIndex == 0"></companyProfile>

                <course v-if="navIndex == 1"></course>

                <team v-if="navIndex == 2"></team>

                <environment v-if="navIndex == 3"></environment>

                <jobOffer v-if="navIndex == 4"></jobOffer>

                <contact v-if="navIndex == 5"></contact>

            </div>
        </div>

        <foot/>
    </div>
</template>

<script>
    import foot from '@/components/foot.vue'
    import navigation from '@/components/navigation.vue'
    import companyProfile from '@/components/aboutUs/companyProfile.vue'
    import course from '@/components/aboutUs/course.vue'
    import team from '@/components/aboutUs/team.vue'
    import environment from '@/components/aboutUs/environment.vue'
    import jobOffer from '@/components/aboutUs/jobOffer.vue'
    import contact from '@/components/aboutUs/contact.vue'
    export default {
        name: "aboutUs",
        components: {
            navigation,//头部
            foot,//站点尾部
            companyProfile,//公司介绍
            course,//发展历程
            team,//管理团队
            environment,//管理团队
            jobOffer,//工作机会
            contact,//联系我们
        },
        data(){
            return {
                // 导航按钮
                navList: [
                    {id:1,text:'公司介绍'},
                    {id:2,text:'发展历程'},
                    {id:3,text:'管理团队'},
                    {id:4,text:'办公环境'},
                    {id:5,text:'工作机会'},
                    {id:6,text:'联系我们'}
                ],
                navs: '0',
                //  头图列表
                headList: [
                    {id:1,imgUrl: 'http://prod.dianjishenghuo.cn/img/aboutUs/toutu@2x.png',text: '公司介绍',english:'Introduce'},
                    {id:2,imgUrl: 'http://prod.dianjishenghuo.cn/img/aboutUs/FZLC-toutu@2x.png',text: '发展历程',english:'Development'},
                    {id:3,imgUrl: 'http://prod.dianjishenghuo.cn/img/aboutUs/GLTD-toutu@2x.png',text: '管理团队',english:'Team'},
                    {id:4,imgUrl: 'http://prod.dianjishenghuo.cn/img/aboutUs/BGHJ-toutu@2x.png',text: '办公环境',english:'Environment'},
                    {id:5,imgUrl: 'http://prod.dianjishenghuo.cn/img/aboutUs/GZJH-toutu@2x.png',text: '工作机会',english:'Opportunity'},
                    {id:6,imgUrl: 'http://prod.dianjishenghuo.cn/img/aboutUs/LXWM-toutu@2x.png',text: '联系我们',english:'Contact'},
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
                    this.$router.replace("/aboutUs?navIndexs="+newValue);
                    console.log(newValue,this.$route.query.navIndexs);
                }

            }
        },
        methods:{
            chooseNav(item,i){
                console.log(item);
                this.navIndex = i;
            }
        },
        mounted(){
            document.documentElement.scrollTop = 0;
        }
    }
</script>

<style scoped lang="scss">
.aboutUs {
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
            background: rgba(53,55,83,.52);
            position: absolute;
            top: 0;
            left: 0;
            font-size: 32px;
            font-weight: 300;
            /*padding: calc(43.14%) 0 0 calc(30.68%);*/
            .title {
                width: 1200px;
                /*padding: calc(43.14%) 0 0 calc(30.68%);*/
                padding: 100px 0 0 222px;
                margin: 0 auto;
                p {
                    font-size: 48px;
                    font-weight: 500;
                    line-height: 72px;
                }
            }
        }
    }
    .contentAll {
        background: linear-gradient(180deg,#FCFCFC 0%,#F8F8F8 100%);
        width: 1200px;
        margin: 0 auto 72px;
        /* nav导航 */
        .navBox {
            width: 1200px;
            padding: 60px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .nav {
                width: 190px;
                line-height: 58px;
                background: #CBCDD6;
                text-align: center;
                font-size: 20px;
                font-weight: 500;
            }
            .nav.act {
                background: #3E3E4D;
            }
            .nav:hover {
                cursor: pointer;
                background: rgba(62, 62, 77, 0.64);
            }
        }
    }

}
</style>