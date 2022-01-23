//封装动画函数到js文件里
//简单动画函数封装obj目标对象 target 目标位置
function animate(obj,target,callback){
    //给不同的元素指定不同的定时器
    //开启太多的定时器会使元素越来越快 解决方案：先清除之前的定时器 只保留当前一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target){
            //到达位置停止定时器
            clearInterval(obj.timer);
            //判断是否传入了回调函数
            if(callback){
                callback();
            }
        }
        //固定步长匀速运动
        //obj.style.left = obj.offsetLeft + 1 + 'px'
        //逐渐减速
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 15);
}