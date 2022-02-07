//函数的封装 
function animate(obj,target,callback){//callback = function(){}
    clearInterval(obj.timer);//可以解决动画重复加快这一问题
   obj.timer = setInterval(function(){
       //步长公式写到定时器里面
       var step = (target - obj.offsetLeft) / 10;
       //添加Math 来解决小数问题
       step = step > 0 ? Math.ceil(step) : Math.floor(step);
       //注意这里的判断符 改为== 不在是之前的>=
       if(obj.offsetLeft == target){
           clearInterval(obj.timer);
           //回调函数写在关闭计时器里面
           if(callback){
               callback();
           }
       }
       //把每次加10 这个步长值改为一个慢慢变小的值 步长公式：(目标值 - 现在的位置)/10
       obj.style.left = obj.offsetLeft + step + 'px';
   },15)
   }
