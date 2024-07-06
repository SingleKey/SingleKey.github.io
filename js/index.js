// 打字机效果
let typed;
const vueapp = new Vue({
    el: "#rootView",
    data() {
        return {
            isFixed: true,
            // 技能
            skill: {
                type: "div",
                style: "height: 290px;",
                tableStyle: "",
                list: [
                    "1. 熟悉 Java 基础、常用 API、反射、多线程、Servlet、JSP、JNA、常用数据结构、算法、设计模式。",
                    "2. 熟悉 Spring、SpringSecurity、SpringMVC、SpringBoot、SpringCloud、SpringCloudAlibaba。",
                    "3. 熟悉 MyBatis、Shiro、Thymeleaf、Freemarker、EasyExcel、Quartz、Swagger 等框架类库。",
                    "4. 熟悉 MySQL、Redis、RabbitMQ、RocketMQ、Sqlite。",
                    "5. 熟悉 HTML5、CSS、SCSS、JS、JQuery、Ajax、Vue、VueX、VueRouter、Axios、uniapp、微信小程序。",
                    "6. 熟悉 Layui、ElementUI、WeUI、Echarts图表等以及各种UI库。",
                    "7. 熟悉 Linux、Nginx、NodeJS、Docker、Git、SVN、Maven。",
                    "8. 熟悉 单体、分布式、微服务、微信、支付宝支付、可独立开发、运维",
                ]
            },
            // 工作经历
            workExperience: {
                type: "table",
                style: "height: 150px;",
                tableStyle: "width: 650px;",
                // 表格
                tables: [
                    {
                        // 行
                        rows: [
                            { columns: ["时间", "公司", "职位"] },
                            { columns: ["2022 年 3 月至 2024 年 3 月", "广州云潮供应链有限公司", "Java 后端工程师"], },
                            { columns: ["2021 年 8 月至 2022 年 3 月", "广州平云小匠有限公司", "Java 后端工程师"], },
                        ]
                    }
                ]
            },
            // 项目经验
            projectExperience: {
                type: "table",
                style: "height: 1500px;",
                // tableStyle: "width: 710px; ",
                // 表格
                tables: [
                    {
                        // 行
                        rows: [
                            { name: {bold: true, val: "项目名称：" }, columns: [{bold: true, val: "云潮供应链无纸化系统"}] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "项目描述：" }, columns: ["该项目是用于冷链仓储物流管理，项目实现无纸化数据留存，方便快捷的对订单进行管理。"] },
                            { name: { bold: true, val: "技 术 栈 ：" }, columns: ["后 端：SpringBoot、SpringCloud Alibaba、MyBatisPlus、Quartz、EasyExcel、POI、"] },
                            { name: { val: "" }, columns: ["Shiro、Swagger"] },
                            { name: { val: "" }, columns: ["前 端：Vue、Vue-Router、Axios、ElementUI、ECharts、SCSS"] },
                            { name: { val: "" }, columns: ["数据库：MySQL、SqlServer"] },
                            { name: { val: "" }, columns: ["中间件：Redis、RabbitMQ"] },
                            { name: { val: "" }, columns: ["服务器：Nginx、Docker、CentOS"] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "工作内容：" }, columns: ["1. 编写拣货任务、出入库订单、订单预约、导入导出、报表等功能。"]},
                            { name: { val: "" }, columns: ["2. 编写物流订单功能，使用腾讯地图 Api 更新位置。"]},
                            { name: { val: "" }, columns: ["3. 使用 Quartz 编写盘点任务，定时进行盘点。"]},
                            { name: { val: "" }, columns: ["4. 使用 RabbitMQ 在订单结束后自动生成费用记录。"]},
                            { name: { val: "" }, columns: ["5. 使用 ElementUI、Vue-Router、Axios、QrCode 等编写系统页面，封装组件。"]},
                            { name: { val: "" }, columns: ["6. 使用 Echarts 编写报表页面、首页报表、物流轨迹图页面。"]},
                            { name: { val: "" }, columns: ["7. 使用中间件提升系统响应速度、优化 SQL 查询速度。"]},
                            { name: { val: "" }, columns: ["8. 使用 SpotBugs 等工具检查代码规范与漏洞，清除冗余代码，优化遗留的各种 BUG、确保接口幂等性。"]},
                            { name: { val: "" }, columns: ["10. 使用 Arthas、jstack、jmap、MAT、XShell、RDM、Navicat 等工具开发和运维，24"]},
                            { name: { val: "" }, columns: ["小时维护系统正常运行。"]},
                        ]
                    },
                    {
                        // 行
                        rows: [
                            { name: {bold: true, val: "项目名称：" }, columns: [{bold: true, val: "云潮供应链物流小程序"}] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "项目描述：" }, columns: ["该项目给司机更新订单状态，客户查看订单。"] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "技 术 栈 ：" }, columns: ["前端：Uniapp、WeUI、IViewUI、TencentMapApi"] },
                            { name: { val: "" }, columns: ["后端：SpringBoot、Shiro、MyBatis\\MyBatisPlus"] },
                            { name: { val: "" }, columns: ["数据库、中间件：MySQL、Redis、RabbitMQ"] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "工作内容" }, columns: ["1. 独立维护小程序前后端，优化前后端代码，确保接口幂等性，提升用户体验，"]},
                            { name: { val: "" }, columns: ["解决线上 BUG。"]},
                            { name: { val: "" }, columns: ["2. 编写物流详情、订单列表、签到、导入导出等功能的页面与接口，以及封装组件。"]},
                        ]
                    },
                    {
                        // 行
                        rows: [
                            { name: {bold: true, val: "项目名称：" }, columns: [{bold: true, val: "云潮供应链PDA作业APP"}] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "项目描述：" }, columns: ["该项目用于仓库工人扫码作业使用。"] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "技 术 栈 ：" }, columns: ["Uniapp、QrCode"] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "工作内容" }, columns: ["1. 编写入库扫描、出库扫描、拣货、盘点等功能。"]},
                            { name: { val: "" }, columns: ["2. 使用蓝牙连接打印机打印标签。"]},
                            { name: { val: "" }, columns: ["3. 优化和维护项目，提升用户体验，优化流程以加快工人作业速度。"]},
                        ]
                    },
                    {
                        // 行
                        rows: [
                            { name: {bold: true, val: "项目名称：" }, columns: [{bold: true, val: "平云小匠客户关系管理系统"}] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "项目描述：" }, columns: ["该项目用于合同、维修工单、物流仓储、备件管理、技术培训等业务，包含"] },
                            { name: { val: "" }, columns: ["《平云小匠快修》小程序、《平云小匠工程师》等 app。"] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "技 术 栈 ：" }, columns: ["后 端：SpringCloud、MyBatisPlus、Freemarker、Quartz、EasyExcel、POI、Shiro"] },
                            { name: { val: "" }, columns: ["Swagger、Fastjson、Devtools 等"] },
                            { name: { val: "" }, columns: ["前 端：HTML、CSS、JavaScript、JQuery、Ajax、LayUI、EasyUI"] },
                            { name: { val: "" }, columns: ["数据库：MySQL"] },
                            { name: { val: "" }, columns: ["中间件：Redis、RabbitMQ"] },
                            { name: { val: "" }, columns: ["服务器：Jenkins、Nginx、Centos"] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "工作内容" }, columns: ["1. 编写维修工单、物流仓储、合同工单、培训考试、小程序、APP 等模块开发。"]},
                            { name: { val: "" }, columns: ["2. 编写报销单审核、工单创建与处理、用户信息、考试信息的导入导出、短信验证、"]},
                            { name: { val: "" }, columns: ["定时任务等功能。"]},
                            { name: { val: "" }, columns: ["3. 根据需求编写、迭代以及优化 PC 端页面，与前端测试进行代码联调。"]},
                            { name: { val: "" }, columns: ["4. 参与需求评审，重构项目，SQL优化，优化系统响应速度，提升用户体验。"]},
                            { name: { val: "" }, columns: ["5. 使用 XShell、XFtp、RDM、Navicat 等工具开发。"]},
                        ]
                    },
                ]
            },
            // 项目经验
            personalProject: {
                type: "table",
                style: "height: 500px;",
                // tableStyle: "width: 710px; ",
                // 表格
                tables: [
                    {
                        // 行
                        rows: [
                            { name: {bold: true, val: "项目名称：" }, columns: [{bold: true, val: `<a href="https://gitee.com/i7606/ScoreManagement" target="_blank">学生成绩管理系统</a>`}] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "项目描述：" }, columns: ["用时三天完成的毕设接单项目，现已开源。"] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "技 术 栈 ：" }, columns: ["前端：html、css、js、vue、ajax"] },
                            { name: { val: "" }, columns: ["后端：SpringBoot、MyBatisPlus、Thymeleaf、EasyExcel"] },
                            { name: { val: "" }, columns: [""] },
                        ]
                    },
                    {
                        // 行
                        rows: [
                            { name: {bold: true, val: "项目名称：" }, columns: [{bold: true, val: `<a href="https://gitee.com/i7606/form-assistance" target="_blank">表单辅助</a>`}] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "项目描述：" }, columns: ["表单信息生成软件，可以生成身份证号码，性别，姓名，地址，用户名，邮箱，等信息"] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "技 术 栈 ：" }, columns: ["C#、Winform、AntdUI、JSON"] },
                            { name: { val: "" }, columns: [""] },
                        ]
                    },
                    {
                        // 行
                        rows: [
                            { name: {bold: true, val: "项目名称：" }, columns: [{bold: true, val: `<a href="https://gitee.com/i7606/desktop-countdown" target="_blank">桌面倒计时</a>`}] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "项目描述：" }, columns: ["Winform编写的桌面倒计时软件，0点自动更新时间"] },
                            { name: { val: "" }, columns: [""] },
                            { name: { bold: true, val: "技 术 栈 ：" }, columns: ["C#、Winform、AntdUI"] },
                            { name: { val: "" }, columns: [""] },
                        ]
                    },
                ]
            }

        }
    },
    created() {
        this.detectDevice();
    },
    mounted() {
        this.detectDevice();
        typed = new Typed(".sub-title span", {
            strings: ["一个菜鸟哦^700===", "一个热爱编程^300的^500菜鸟程序员"],//输出的文字
            typeSpeed: 150,//打字的速度
            smartBackspace: true,// 开启智能退格 默认false
            backSpeed: 150, // 删除速度
            backDelay: 300, //打字和删除之间的延迟时间
            // loop:true,//是否循环
            startDelay:1000,//起始时间
            fadeOut: false,//淡出效果
            showCursor: true,// 显示光标
            cursorChar: "_"//光标文字
        });
    },
    methods: {
        detectDevice() {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;

            // 判断是否为移动设备
            const mobileKeywords = ['Android', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
            let isMobile = false;

            for (let keyword of mobileKeywords) {
                if (userAgent.indexOf(keyword) > -1) {
                    isMobile = true;
                    break;
                }
            }
            this.isMobile = isMobile;

            // 根据设备类型跳转
            if (this.isMobile) {
                // 如果未检测到移动设备关键词，假设为 PC 端并跳转到 PC 端 URL
                window.location.href = "https://singlekey.github.io/index-m.html";
            }
        },
        targetPosition(val) {
            this.isFixed = val;
        },
    },

});