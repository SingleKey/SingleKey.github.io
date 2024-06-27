// 打字机效果
let typed;
const vueapp = new Vue({
    el: "#rootView",
    data() {
        return {
            isFixed: false,
        }
    },
    created() {
        
    },
    mounted() {
        typed = new Typed(".sub-title span", {
            strings: ["一个菜鸟哦^700===", "一个热爱编程^500的^500菜鸟程序员"],//输出的文字
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
        targetPosition(val) {
            this.isFixed = val;
        },
    },

});