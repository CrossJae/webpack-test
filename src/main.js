// 页面主逻辑
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './main.css'

// 输出一个函数
// 也可以输出一个变量 module.exports = testName
module.exports = function(){
    // 该文件会用webpack打包成bundle.js，加载在html的底部，能够获取到html中的标签元素
    new Swiper ('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })   
}