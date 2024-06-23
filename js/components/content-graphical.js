//定义组件注册的模板template
var graphical = 
`<div class="content-view">
    <div class="graphical-90">
        <div class="graphical-sub-view-2">
            <span class="graphical-sub-view-2-title">{{title}}</span>
            <div class="graphical-sub-line"></div>
            <div class="graphical-sub-1"></div>
            <div class="graphical-sub-2"></div>
            <div class="graphical-sub-3"></div>
            <div class="graphical-sub-4"></div>
        </div>
    </div>
    <div class="text-view">
        <slot name="content"></slot>
    </div>
</div>`;
//Vue定义组件
var templateGraphical = Vue.extend({
    template: graphical,
    data: {
    },
    methods:{
    },
    props:['title'],
});

Vue.component('content-graphical', templateGraphical);
