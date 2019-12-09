<template>
    <div class="environment">
        <div class="textBox">
            <h1>怀揣梦想、追求卓越的团队</h1>
            <p>我们是一群善于学习的年轻人，在瞬息万变的移动互联网，不断挑战自我，拥抱变化；<br>我们是充满想象力和创造力的Geek，不断创新、追求卓越，为了让世界更美，从未停歇；<br>我们是怀揣着理想的团队，由兴趣开始，因理想坚持，梦想与工作，并肩而行。</p>
        </div>
        <div class="showBox">
            <h1>有爱的环境</h1>
            <div class="slideBox" @mouseenter="stop" @mouseleave="goOn">
                <div class="slide" >
                    <img :src="ele.imgUrl" alt=""
                         v-for="(ele,i) in bannerList"
                         :key="i"
                         :class="{act:imgIndex===i}">
                </div>
            </div>
            <!--<div class="pageBox">-->
                <!--<div @click="pageClick(k)" class="page" :class="{pageAct: imgIndex===k}" v-for="(e,k) in bannerList.length"></div>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "environment",
        data (){
            return {
                // 轮播图片【左侧，最大块报道】
                "bannerList": [
                    {id:1, imgUrl: 'http://prod.dianjishenghuo.cn/img/aboutUs/BGHJ-zhaopian@2x.png'}
                ],
                "imgIndex": 0,
            }
        },
        methods:{
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
    .environment {
        color: #3E3E4D;
        text-align: center;
        width: 100%;
        h1 {
            font-size: 30px;
            font-weight: 500;
            line-height: 45px;
            margin-bottom: 48px;
        }
        p {
            font-size: 16px;
            font-weight:300;
            line-height: 24px;
        }
        .showBox {
            margin-top: 72px;
            .slideBox {
                width: 1200px;
                height: 630px;
                background: rgba(255,255,255,1);
                box-shadow: 0 2px 30px 0 rgba(0,0,0,0.14);
                padding: 16px 24px;
                .slide {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    img {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        opacity: 0;
                        z-index: 0;
                        transition: all 1s;
                    }
                    .act {
                        opacity: 1;
                        z-index: 20;
                    }
                }

            }
        }
        .pageBox {
            margin: 24px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            .page {
                width: 8px;
                height: 8px;
                background: #CBCDD6;
                border-radius: 50%;
                margin: 0 8px;
            }
            .pageAct {
                background: #7F99F5;
            }
        }
    }

</style>