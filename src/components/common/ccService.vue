<template>
    <div class="ccService">
        <!-- 右下角悬浮 start -->
        <!--<a class="contact" href="http://kefu.ziyun.com.cn/vclient/chat/?websiteid=146972&wc=97d2fa">-->
            <!--<img src="http://prod.dianjishenghuo.cn/img/home/LXKF@2x.png" alt="">-->
        <!--</a>-->
        <a class="contact" href="https://hm.baidu.com/hm.js?63a4f98c38afee66c13cbcc1577cf6c3">
            <img src="http://prod.dianjishenghuo.cn/img/home/LXKF@2x.png" alt="">
        </a>
        <!-- 右下角悬浮 end -->
    </div>
</template>

<script>
    export default {
        name: "ccService"
    }
</script>

<style scoped lang="scss">
.ccService {
    .contact {
        display: block;
        width: 80px;
        height: 80px;
        position: fixed;
        right: 98px;
        bottom: 240px;
        border-radius: 50%;
        box-shadow: 0 0 30px 0 rgba(3, 3, 3, 0.64);
        img {
            width: 100%;
            height: 100%;
        }
    }
    .contact:hover {
        cursor: pointer;
    }
}
</style>