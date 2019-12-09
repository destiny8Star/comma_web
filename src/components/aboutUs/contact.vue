<template>
    <div class="contact">
        <img src="http://prod.dianjishenghuo.cn/img/aboutUs/LXWM@2x.jpg" alt="" class="picture">
        <div class="leaderBox">
            <div class="item" v-for="(ele,i) in leaderList" :key="i">
                <h1>{{ele.title}}：</h1>
                <p>联系人： {{ele.man}}</p>
                <p>联系电话： {{ele.phone}}</p>
                <p>联系邮箱： {{ele.email}}</p>
                <p>地址： {{ele.address}}</p>
            </div>
        </div>
        <div class="companyBox">
            <h1>公司信息</h1>
            <div class="content">
                <div class="map">
                    <img src="http://prod.dianjishenghuo.cn/img/aboutUs/LXWM-map@2x.png" alt="">
                </div>
                <div class="infoBox">
                    <h2>浙江逗号信息技术有限公司</h2>
                    <p>地址： 浙江省杭州市萧山区宁一路与鸿宁路交叉口广孚联合国际中心11楼</p>
                    <p>电话： 15988498799</p>
                    <p>传真： </p>
                    <p>邮编： 311200</p>
                </div>
            </div>
        </div>
        <p class="service">服务热线：<span>400-9900-188</span></p>
    </div>
</template>

<script>
    export default {
        name: "contact",
        data(){
            return{
                leaderList:[
                    {id: 1, title: '市场合作', man: '郎经理',phone: '18717005239',email: 'market@dou-hao.net',address: '浙江省杭州市萧山区广孚联合国际中心11楼'},
                    {id: 2, title: '商务合作', man: '胡经理',phone: '13588042081',email: 'business@dou-hao.net',address: '浙江省杭州市萧山区广孚联合国际中心11楼'},
                    {id: 3, title: '售后专线', man: '张经理',phone: '18958132601',email: 'after@dou-hao.net',address: '浙江省杭州市萧山区广孚联合国际中心11楼'}
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .contact {
        color: #3E3E4D;
        .picture {
            width: 100%;
        }
        .leaderBox {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 48px 80px 24px;
            background: #EFF0F2;
            .item {
                margin-right: 30px;
                h1 {
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 36px;
                    margin-bottom: 24px;
                }
                p {
                    font-size: 14px;
                    line-height: 28px;
                }
            }
            .item:last-child {
                margin: 0;
            }
        }
        .companyBox {
            padding: 14px 0 60px;
            border-bottom: 1px solid #CBCDD6;
            h1 {
                font-size: 30px;
                font-weight: 600;
                text-align: center;
                line-height: 123px;
            }
            .content {
                width: 100%;
                padding: 30px;
                background: #EFF0F2;
                display: flex;
                align-items: center;
                .map {
                    width: 409px;
                    height: 259px;
                    padding: 10px;
                    background: #fff;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .infoBox {
                    padding: 18px 0 18px 50px ;
                    h2 {
                        font-size: 24px;
                        font-weight: 600;
                        line-height: 30px;
                        margin-bottom: 38px;
                    }
                    p {
                        font-size: 16px;
                        line-height: 32px;
                    }
                }
            }
        }
        .service {
            text-align: center;
            margin: 48px auto 0;
            font-size:24px;
            line-height: 36px;
            span {
                color: #FF1D1D;
                font-weight: 600;
            }
        }
    }
</style>