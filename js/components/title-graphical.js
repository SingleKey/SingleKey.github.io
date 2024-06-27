//定义组件注册的模板template
var graphical = 
`<div class="graphical-view">
    <div class="graphical-1"></div>
    <div class="graphical-2"></div>
</div>`;
//Vue定义组件
var templateGraphical = Vue.extend({
    template: graphical,
    data() {
        return {
            
        }
    },
    methods:{
    }
});

//Vue注册全局组件
Vue.component('title-graphical', templateGraphical);
