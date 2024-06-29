//定义组件注册的模板template
var graphical = 
`<div class="content-view" :style="content.style ? content.style : ''">
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
        <div v-if="content.type == 'div'">
            <div v-for="(item, index) in content.list" :key="index">{{item}}</div>
        </div>
        <div v-if="content.type == 'table'">
            <table v-for="(item, index) in content.tables" :key="index" :style="content.tableStyle ? content.tableStyle : ''">
                <tr v-for="(it, idx) in item.rows" :key="idx">
                    <td v-if="it.name">
                        <b v-if="it.name.bold">{{it.name.val}}</b>
                        <span v-else>{{it.name.val}}</span>
                    </td>
                    <td v-for="(val, i) in it.columns" :key="i">
                        <template v-if="typeof val == 'string'">{{val}}</template>
                        <template v-else>
                            <b v-if="val.bold" v-html="val.val"></b>
                            <template v-else>{{val.val}}</template>
                        </template>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>`;
// <slot name="content"></slot>
//Vue定义组件
var templateGraphical = Vue.extend({
    template: graphical,
    data() {
        return {

        }
    },
    methods:{
    },
    props: {
        title: {
            type: String,
            default: ""
        }, 
        content: {
            type: Object,
            default: function() {return {}}
        }
    },
});

Vue.component('content-graphical', templateGraphical);
