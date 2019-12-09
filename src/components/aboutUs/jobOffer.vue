<template>
    <div class="jobOffer">
        <div class="showBox">
            <h1>加入我们，加入我们的团队，你将充分发挥才能，拥抱无限广阔的职业前景</h1>
            <p>作为国内优秀的社交新零售平台，我们拥有过硬的技术、服务和广阔市场，我们需要具有丰富经验、技能和热情的你。在这里，相信你可以充分发挥自己的才能，得到有竞争力的薪酬、丰富多彩的职业生活，同时结识优秀同仁。 </p>
        </div>
        <div class="jobsBox">
            <div class="job" v-for="(ele,i) in jobList" :key="i">
                <div class="title">
                    <h2>{{ele.jobText}}</h2>
                    <div class="btn" @click="addUs(ele)">加入我们</div>
                </div>
                <div class="detailText">
                    <h3>岗位职责：</h3>
                    <p v-html="ele.duty"></p>
                </div>
                <div class="detailText">
                    <h3>岗位要求：</h3>
                    <p v-html="ele.ask"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "jobOffer",
        data (){
            return {
                jobList: [
                    {id:1,jobText: '销售顾问',duty:'1.挖掘开拓B端客户，为客户提供优质的合作方案；<br>2.整合客户服务的卖点及公司优势及平台资源，与客户建立良好的合作关系；<br> 3.了解并根据客户需求，与客户谈判并达成合作；<br> 4.完成公司制定的销售目标，定期进行市场销售数据分析，及时向公司反馈。',ask:'1. 本科及以上学历，市场营销、计算机等相关专业优先；<br>2. 有互联网行业销售经验优先。 '},
                    {id:2,jobText: '客服专员',duty:'1. 通过电话、在线QQ、微信等方式接受顾客咨询； <br>2. 严格审核用户提交的内容信息；<br> 3. 负责做好工作日志、周报，及时反馈信息的统计；<br> 4. 完成上级安排的其它工作任务。',ask:' 1. 熟练掌握办公软件的使用；<br> 2. 工作主动、细致、严谨、耐心、责任心强、抗压能力强；<br> 3. 沟通能力强，普通话流利，口齿清晰，打字速度60字/分钟以上；<br> 4. 头脑清晰,思维敏捷,待人热情，且有良好的服务意识和团队合作精神；<br> 5. 有工作经验者优先考虑，应届生亦可。'},
                    {id:3,jobText: '商务经理',duty:' 1. 负责搜集意向代理的资料并进行沟通，为公司产品发展新代理；<br> 2. 通过电话与客户进行有效沟通，了解客户情况，寻找合作机会并完成招商指标；<br> 3. 通过电话等方式为意向代理介绍产品，邀约洽谈，促成合作；<br> 4. 定期与合作客户进行沟通，建立良好的长期合作关系；<br> 5. 完成领导安排的其他任务。 ',ask:' 1. 本科及以上学历，普通话标准，应变能力强，口齿清晰，普通话流利，语言赋有感染力；<br> 2. 热爱互联网，反应敏捷，有团队协作意识；<br> 3. 做事积极主动，认真负责，计划性强；<br> 4. 具有较强的人际关系沟通能力和业务拓展能力，有良好的团队协作精神与创业精神；<br> 5. 具有敬业精神，有强烈的竞争意识，能承受一定工作压力，积极面对工作挑战；<br> 6. 具备相关行业招商或销售经验者优先。'},
                    {id:4,jobText: '高级前端工程师',duty:' 1. H5页面开发及交互效果实现、易用性改进及页面性能优化；<br> 2. web端vue2框架升级；<br> 3. 负责小程序开发；<br> 4. 协助APP非原生前端页面开发；<br> 5. 负责安排和指导前端团队工作提升前端团队整体专业能力。 ',ask:' 1. 本科以上学历，2年以上前端开发经验，精通 HTML5、CSS3、Java 等基础前端技术；<br> 2. 有电商行业开发经验者优先；<br> 3. 拥有 canvas 技术开发经验者优先，微信小程序开发经验者优先；<br> 4. 熟练掌握至少 1 种前端 UI 框架，例如 bootstrap，elementUI 等；<br> 5. 至少掌握一种 css 预编译处理的语法，例如 sass，scss 等；<br> 6. 熟练运用至少 3 种 JS 开发框架，例如 JQuery、vue,react 等，精通 vue 框架者优先；<br> 7. 熟练掌握 webpack 等打包工具的使用，能运用webpack 搭建项目框架；<br> 8. 熟练掌握 es6 语法特性，对 es7，es8 等标准有了解；<br> 9. 能够与产品经理、交互设计师和开发人员进行顺畅沟通；<br> 10. 有较强的移动端新技术学习能力，具有良好的团队合作精神；<br> 11. 有一定后台基础，具备看懂后台逻辑的能力。'},
                ]
            }
        },
        methods:{
            addUs(item){
                console.log(item);
            }
        }
    }
</script>

<style scoped lang="scss">
    .jobOffer {
        color: #3E3E4D;
        .showBox {
            padding: 36px 82px;
            width: 100%;
            background: #fff;
            box-shadow: 0 2px 30px 0 rgba(0,0,0,0.14);
            margin-bottom: 60px;
            h1 {
                font-size: 24px;
                font-weight: 600;
                line-height: 36px;
                text-align: center;
                margin-bottom: 24px;
            }
            p {
                font-size: 20px;
                font-weight: 300;
                line-height: 28px;
                text-indent: 2em;
            }
        }
        .jobsBox {
            .job {
                margin-top: 46px;
                .title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 24px;
                    h2{
                        font-weight: 600;
                    }
                    .btn {
                        width: 136px;
                        line-height: 52px;
                        background: #7F99F5;
                        border-radius: 6px;
                        color: #fff;
                        text-align: center;
                        font-weight: 500;
                    }
                    .btn:hover {
                        cursor: pointer;
                    }
                }
                .detailText {
                    font-size: 16px;
                    line-height: 24px;
                    h3 {
                        margin: 12px 0;
                    }
                }
            }
        }
    }
</style>