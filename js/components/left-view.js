//定义组件注册的模板template
var graphical = `
<div :class="!isFixed ? 'empty-left-view left-view-style' : 'empty-left-view'">
    <div :class="isFixed ? 'left-view-fixed left-view-style' : ''">
        <div class="avatar-view">
            <div class="avatar-background turn-right">
                <img src="./assect/avatar.jpg" class="avatar turn-left"/>
            </div>
        </div>
        <div>
            <div class="title-view">
                <div class="title">
                    程序员小杨
                </div>
            <div class="sub-title"><span></span></div>
            </div>
            <div class="order-info-view">
                <div class="order-info-column">
                    <div class="order-info-column-name">学历：</div>
                        <div>大专</div>
                    </div>
                <div class="order-info-column">
                    <div class="order-info-column-name">年龄：</div>
                    <div>24</div>
                </div>
                <div class="order-info-column">
                    <div class="order-info-column-name">工作经验：</div>
                    <div>3年</div>
                </div>
                <div class="order-info-column">
                    <div class="order-info-column-name">邮箱：</div>
                    <div>datom7606@163.com</div>
                </div>
                <div class="order-info-column">
                    <div class="order-info-column-name">Gitee：</div>
                    <div><a href="https://gitee.com/i7606" target="_blank">@信仰</a></div>
                </div>
                <div class="order-info-column">
                    <div class="order-info-column-name">当前状态：</div>
                    <div><b>在职-考虑机会</b></div>
                </div>
            </div>
        </div>
        <div style="padding-left: 20px; padding-bottom: 20px;">
            <div></div>
            <switch-button @checked="targetPosition"></switch-button>
        </div>
    </div>
</div>
`;
//Vue定义组件
var templateGraphical = Vue.extend({
    template: graphical,
    props: [
        
    ],
    data() {
        return {
            
        }
    },
    methods:{
    },
    watch: {
        
    }
});

//Vue注册全局组件
Vue.component('switch-button', templateGraphical);
