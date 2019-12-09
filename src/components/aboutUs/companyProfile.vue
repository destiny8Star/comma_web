<template>
    <div class="companyProfile">
        <!-- 简介 -->
        <div class="introBox">
            <h1>企业简介</h1>
            <div class="intro">
                <div class="introBg">
                    <div class="videoBox">
                        <div class="videoDiv">
                            <img src=" http://prod.dianjishenghuo.cn/img/aboutUs/qiyejianjie@2x.png" alt="">
                            <div class="mask">
                                <img @click="showVideo" src="http://prod.dianjishenghuo.cn/img/aboutUs/GSJJ-play@2x.png" alt="">
                            </div>
                            <div class="videoBox" v-show="videoShow" @click="hideVideo">
                                <video controls preload>
                                    <source src="http://prod.dianjishenghuo.cn/video/company.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                    <div class="introTextBox">
                        <p><span>浙江逗号信息技术有限公司</span>，创立于2016年，注册资本1000万，座落于人 间天堂杭州，是专业为客户提供社交电商产品和本地生活服务的科技型企业，致力于打造中国社交新零售 电商领军品牌；目前平台拥有150余名员工，其中技术人员近60余人，成员主要来自国内知名互联网巨头； 旗下产品“点击生活”是一款社交新零售电商平台类app；我们本着践行价值消费，赋能实体零售的经营理 念，与更多的合作伙伴一起颠覆传统零售旧模式，共享社交电商新未来</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 愿景 -->
        <div class="visionBox">
            <h1>公司愿景</h1>
            <div class="vision">
                <img src="../../assets/img/aboutUs/yuanjing@2x.png" alt="">
            </div>
        </div>
        <!-- 媒体报道 -->
        <div class="reportBox">
            <h1>媒体报道</h1>
            <p class="more" @click="goNews">查看更多&nbsp;<span>›</span></p>
            <div class="report">
                <div class="slideBox" @mouseenter="stop" @mouseleave="goOn">
                    <div class="slide"
                         @transitionend = 'flag=true'
                         :class="{slideAct:imgIndex===i}"
                         v-for="(ele,i) in bannerList"
                         :key="i">
                        <img :src="ele.imgUrl" alt="">
                        <div class="textBox"><p>{{ele.detail}}</p></div>
                    </div>
                    <div class="pageBox">
                        <div @click="pageClick(k)" class="page" :class="{pageAct: imgIndex===k}" v-for="(e,k) in bannerList.length"></div>
                    </div>
                    <div class="prev" @click="next(0)"><</div>
                    <div class="next" @click="next(1)">></div>
                </div>
                <div class="smallReportBox">
                    <div class="itemBox" v-for="(item,i) in smallList" :key="i">
                        <img :src="item.imgUrl" alt="">
                        <div class="textBox"><p>{{item.detail}}</p></div>
                    </div>

                </div>
                <div class="bigReportBox">
                    <img src=" http://prod.dianjishenghuo.cn/img/aboutUs/zhinenganfang@2x.png" alt="">
                    <div class="textBox"><p>{{bigReportText}}</p></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "companyProfile",
        data(){
            return{
                "videoShow": false,
                // 轮播图片【左侧，最大块报道】
                "bannerList": [
                    {id:1, imgUrl: 'http://prod.dianjishenghuo.cn/img/aboutUs/mayun@2x.png',detail:'马云：如果你年轻的时候不996，什么时候可以996'},
                    // {id:2, imgUrl: 'http://prod.dianjishenghuo.cn/img/aboutUs/new1.jpg',detail:'巴黎圣母院大火，这件宝贝失而复得！法国人乐开了花'},
                    {id:2, imgUrl: 'http://prod.dianjishenghuo.cn/img/aboutUs/new1.jpg',detail:'巴黎圣母院大火，这件宝贝失而复得！法国人乐开了花'}
                ],
                "imgIndex": 0,
                "flag": true,
                // 中间的小块报道
                "smallList": [
                    {id: 1, imgUrl:  'http://prod.dianjishenghuo.cn/img/aboutUs/gugeyun@2x.png', detail: '焦点分析：焦虑的谷歌云....'},
                    {id: 2, imgUrl:  'http://prod.dianjishenghuo.cn/img/aboutUs/dongfangIC@2x.png', detail: '分享东方IC就图片侵权....'}
                ],
                // 最右侧报道
                "bigReportText": '智能安防怎么成了AI变现最大场景',
            }
        },
        methods:{
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
                this.timer = setInterval(that.move, 2000);
            },
            /**
             * 左、右切换
             */
            next(bool){
                if(bool){
                    if (this.flag) {
                        this.flag = false;
                        this.move();
                    }
                }else {
                    if (this.flag) {
                        this.flag = false;
                        this.imgIndex -= 2;
                        this.move();
                    }
                }
            }
        },
        created() {
            var that = this;
            this.timer = setInterval(that.move, 2000);
        },
        mounted(){

        },
        destroyed(){
            clearInterval(this.timer);　　// 清除定时器
            this.timer = null;
        },
    }
</script>

<style scoped lang="scss">
.companyProfile {
    width: 100%;
    color: #3E3E4D;
    /* 公司介绍 */
    .introBox {
        overflow: hidden;
        h1 {
            margin-bottom: 48px;
            font-size: 30px;
            font-weight: 500;
            text-align: center;
        }
        .intro {
            width: 850px;
            height: 354px;
            background: #fff;
            box-shadow: 0 2px 30px 0 rgba(0,0,0,0.14);
            float: right;
            .introBg {
                width: 1200px;
                margin-left: -350px;
                display: flex;
                align-items: center;
                .videoBox {
                    padding: 30px 0;
                    .videoDiv {
                        position: relative;
                        img {
                            width: 524px;
                        }
                        .videoBox {
                            width: 100vw;
                            height: 100vh;
                            background: rgba(51, 51, 51, 0.6);
                            position: fixed;
                            top: 0;
                            left: 0;
                            overflow-y: scroll;
                            z-index: 9999;
                            video {
                                width: calc(100% - 200px);
                                height: calc(100% - 100px);
                                background: #333333;
                                position: absolute;
                                margin: auto;
                                left: 0;
                                top: 0;
                                bottom: 0;
                                right: 0;
                            }
                        }
                        .mask {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            border-radius: 6px;
                            background: rgba(53, 55, 83, 0.32);
                            img {
                                width: 68px;
                                height: 68px;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%,-50%);
                            }
                            img:hover {
                                cursor: pointer;
                            }
                        }
                        .mask:hover {
                            background: rgba(53, 55, 83, 0.52);
                        }
                    }
                }
                .introTextBox {
                    padding: 86px 34px;
                    p {
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 32px;
                        span {
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
    /* 公司愿景 */
    .visionBox {
        margin-top: 60px;
        h1 {
            margin-bottom: 48px;
            font-size: 30px;
            font-weight: 500;
            text-align: center;
        }
        .vision {
            img {
                width: 100%;
            }
        }
    }
    /* 媒体报道 */
    .reportBox {
        margin-top: 70px;
        h1 {
            margin-bottom: 22px;
            font-size: 30px;
            font-weight: 500;
            text-align: center;
        }
        .more {
            text-align: right;
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 4px;
            span {
                font-size: 22px;
            }
        }
        .more:hover {
            cursor: pointer;
        }
        .report {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .slideBox {
                position: relative;
                width: 620px;
                height: 348px;
                .slide {
                    width: 620px;
                    height: 348px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0;
                    transition: all 1s;
                    z-index: 0;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    p {
                        width: 500px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 20px;
                        color: #fff;
                        position: absolute;
                        bottom: 32px;
                        left: 24px;
                        z-index: 999;
                    }
                }
                .slideAct {
                    opacity: 1;
                    z-index: 20;
                }
                .pageBox {
                    position: absolute;
                    bottom: 16px;
                    left: 24px;
                    z-index: 999;
                    display: flex;
                    align-items: center;
                    .page {
                        width: 4px;
                        height: 4px;
                        background: #CACACA;
                        border-radius: 50%;
                        margin: 0 8px;
                    }
                    .pageAct {
                        width: 18px;
                        background: #fff;
                        border-radius: 4px;
                    }
                }
                .prev,.next {
                    width: 25px;
                    line-height: 38px;
                    background: rgba(51, 51, 51, 0.4);
                    text-align: center;
                    z-index: 999;
                    position: absolute;
                    top: 50%;
                    color: #fff;
                    font-size: 24px;
                    margin-top: -19px;
                }
                .prev {
                    left: 0;
                }
                .next {
                    right: 0;
                }
                .prev:hover,.next:hover {
                    background: rgba(51, 51, 51, 0.7);
                    cursor: pointer;
                }
            }
            .smallReportBox {
                width: 244px;
                height: 348px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .itemBox {
                    width: 100%;
                    height: 170px;
                    position: relative;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    .textBox {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        z-index: 99;
                        p {
                            width: 196px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 16px;
                            color: #fff;
                            position: absolute;
                            bottom: 12px;
                            left: 12px;
                        }
                    }
                }
            }
            .bigReportBox {
                width: 304px;
                height: 348px;
                background: #DEDEDE;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                }
                .textBox {
                    p {
                        width: 240px;
                        height: 16px;
                        font-size: 16px;
                        font-weight: 500;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #fff;
                        position: absolute;
                        bottom: 12px;
                        left: 12px;
                    }
                }
            }
            .textBox {
                z-index: 998;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 48px;
                background: linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(0,0,0,1) 100%);
            }
        }
    }
}
</style>