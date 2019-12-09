<template>
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
                            <div class="nav"  v-for="(nav,n) in industryNav" :key="n" :class="{act:industryIndex==n}" @click="showContent(n)">
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
                            <div class="btn"><a href="">咨询详情</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 行业应用 end -->
</template>

<script>
    export default {
        name: "productSystem"
    }
</script>

<style scoped lang="scss">
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
                    padding: 110px 0 105px 0;
                    position: absolute;
                    top: 0;
                    left: 0;
                    .titleBox {
                        font-weight: 300;
                        margin-bottom: 60px;
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
                            padding: 22px 0 48px 62px ;
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
                                border: 1px solid rgba(51, 131, 255, 1);
                                cursor: pointer;
                            }
                            .btn:hover a{
                                color: rgb(11, 178, 255);
                            }
                        }
                    }
                }
            }
        }
    }
</style>