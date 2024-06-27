//定义组件注册的模板template
var graphical = 
`<div id="container">
    <input  type="checkbox" 
            class="widget_switch_checkbox"
            id="widget_switch_checkbox"
            :checked="isChecked"
            @change="handleChange"/>
    <label for="widget_switch_checkbox" class="widget_switch_label">
        <span class="widget_switch_circle"></span>
    </label>
</div>`;
//Vue定义组件
var templateGraphical = Vue.extend({
    template: graphical,
    data() {
        return {
            isChecked: false
        }
    },
    methods:{
        handleChange() {
            this.isChecked = !this.isChecked;
        }
    },
    watch: {
        isChecked:{
            immediate:true,
            handler(newVal) {
                this.$emit("checked", newVal);
            }
        },
        
    }
});

//Vue注册全局组件
Vue.component('switch-button', templateGraphical);
