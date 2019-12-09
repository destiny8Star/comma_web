<template>
    <div class="team">
        <h1>管理层团队</h1>
        <div class="items">
            <div class="item" v-for="(ele,i) in teamList" :key="i">
                <img :src="ele.imgUrl" alt="">
                <div class="textBox">
                    <!--<h2>{{ele.name}}</h2>-->
                    <h3>{{ele.name}}&nbsp;&nbsp;{{ele.job}}</h3>
                    <p v-show="ele.detail!=''">{{ele.detail}}</p>
                </div>
                <div class="mask"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "team",
        data(){
            return {
                teamList: [
                    {id:1,imgUrl:'http://prod.dianjishenghuo.cn/img/aboutUs/wei.jpg',name:'卫逸成',job:'董事长',detail:'毕业于浙江大学工商管理专业，期间多次前往美国进修，曾任达利园集团、双汇集团、箭牌集团等多个国内知名企业高管，同时也是互联网连续成功创业者，涉足餐饮、金融、互联网等多个领域，拥有10年以上的互联网经验，精通企业战略规划和市场营销。'},
                    {id:2,imgUrl:'http://prod.dianjishenghuo.cn/img/aboutUs/shuai.jpg',name:'帅康',job:'CEO',detail:'华中科技大学计算机、市场营销双学位毕业，曾帮助国内外多家企业进行商业模式体系设计与规划，经手上市公司项目达数十个，拥有10年以上互联网项目运营和管理实战经验，现负责企业商业模式设计和顶层战略布局。'},
                    {id:3,imgUrl:'http://prod.dianjishenghuo.cn/img/aboutUs/huang.jpg',name:'黄东洋',job:'CFO',detail:'毕业于北京对外经济与贸易大学，曾供职于多家上市公司财务部，10年以上的财务管理和风险管控经验，帮助公司多次完成百万级创业项目融资，精于把握市场机遇、把控财务风险，现负责企业市场投资、项目估价、风险管理。'},
                    {id:4,imgUrl:'http://prod.dianjishenghuo.cn/img/aboutUs/wang.jpg',name:'王先军',job:'CTO',detail:'曾任云端金融研发中心技术总监、City do城市大数据技术总监。10年以上的计算机工程技术经验，精通从底层系统到上层业务系统的全栈领域技术，曾多次领导团队实现从0到1的突破，现负责企业技术研发。'},
                    {id:5,imgUrl:'http://prod.dianjishenghuo.cn/img/aboutUs/shen.jpg',name:'沈林强',job:'营销总裁',detail:'负责企业整体品牌规划和市场战略规划，历任企业营销主管、市场经理、营销总裁 。深耕品牌营销8年，服务企业涵盖万达、奥美等多家国内外知名品牌，在企业发展战略、市场研究、营销策划方面有着资深的实战经验。'},
                    {id:6,imgUrl:'http://prod.dianjishenghuo.cn/img/aboutUs/mei.jpg',name:'梅安达',job:'COO',detail:'曾任云端金融产品经理、浙江名梦游公司电商运营总监。6年互联网电商运营经验，与运维部合力完成十几个互联网产品的策划和落地，现负责企业产品架构的组织开发和管理，对企业产品具有精准的质量检验和控制能力。'},
                    {id:7,imgUrl:'http://prod.dianjishenghuo.cn/img/aboutUs/hu.jpg',name:'胡清洋',job:'商务总裁',detail:'负责整合企业营销策略及执行方案编写，五年以上的互联网营销经验，为多家大型企业提供定制服务解决方案，历任销售总监、项目总监、营销总裁，对网络营销发展具有精确、前瞻性的研究判断。'},
                    {id:8,imgUrl:'http://prod.dianjishenghuo.cn/img/aboutUs/sun.jpg',name:'孙亮亮',job:'商学院院长',detail:'历任培训总管、培训总监、商学院院长，6年培训领域专业经验，从业以来陆续为各大企业开展数百场大型演讲，积累了丰富的项目招商经验，目前负责统筹企业的培训管理工作、组织实施人才储备计划。'},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .team {
        color: #fff;
        h1 {
            color: #3E3E4D;
            font-size: 30px;
            font-weight: 500;
            line-height: 45px;
            text-align: center;
        }
        .items {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: -24px;
            .item {
                width: 276px;
                height: 346px;
                box-shadow: 0 2px 22px 6px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                position: relative;
                overflow: hidden;
                margin-top: 72px;
                img {
                    width: 100%;
                    height: 100%;
                }
                .textBox {
                    padding: 12px;
                    position: absolute;
                    bottom: 40px;
                    left: 0;
                    z-index: 88;
                    transform: translateY(100%);
                    transition: all 1s;
                    h2 {
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 24px;
                    }
                    h3 {
                        font-size: 16px;
                    }
                    p {
                        font-size: 12px;
                        font-weight: 500;
                        line-height: 18px;
                        opacity: 0;
                        margin-top: 10px;
                        transition: all 1s;
                    }

                }
                .mask {
                    width: 100%;
                    height: 40px;
                    background: linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(0,0,0,1) 100%);
                    opacity: 0.46;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
            }
            .item:hover  p{
                opacity: 1;
            }
            .item:hover .textBox{
                transform: translateY(40px);
                background: rgba(0,0,0,.43);
            }
            /*.item:last-child:hover .textBox,.item:nth-child(1):hover .textBox,.item:nth-child(2):hover .textBox,.item:nth-child(7):hover .textBox{*/
                /*transform: translateY(86px);*/
            /*}*/
            /*.item:last-child .textBox,.item:nth-child(1) .textBox,.item:nth-child(2) .textBox,.item:nth-child(7) .textBox {*/
                /*bottom: 86px;*/
            /*}*/
        }
    }
</style>