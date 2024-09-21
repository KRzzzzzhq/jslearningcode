var tabBox=document.getElementById('tabBox');
var tabList=tabBox.getElementsByTagName('div');
var navBox =document.getElementById('navBox');
var navList=navBox.getElementsByTagName('li');
// 1.解决办法自定义属性
// 2.闭包
// 3.ES6 let代替var
for(var i=0;i<navList.length;i++){
    // 在循环给每个LI绑定点击事件的时候，我们给每一个LI(元素对象)设置一个自定义属性MY-INDEX，属性值存储的是当前LI
    navList[i].myIndex = i;
    navList[i].onclick = function(){
        // THIS是当前点击的这个元素LI
        changeTab(this.myIndex);
    }
}
/*只有JS代码加载完成才能看到页面，只有看到页面用户才能点击
 *   加载到循环这个代码了 i=0 i<3 i++
 * i=0 navList[0].onclick=function(){...} 绑定事件的时候方法没有执行，点击第一个LI的时候它才执行 i++ =>1
 * i=1 navList[1].onclick=function(){...} i++ =>2
 * i=2 navList[2].onclick=function(){...}i++ =>3
 * 3<3 不通过，循环结束，此时i已经是3了
 * 
 * 循环结束看到了页面，用户去点击了某一个页卡，接下来开始执行绑定的方法，方法中遇到了一个I，但是此时I已经是循环结束后的3了
*/
// 封装一个函数实现选项卡的切换
function changeTab (clickIndex){
    // 1.先让所有的LI和DIV都没有选中
    for( var i=0;i<navList.length;i++){
        navList[i].className = '';
        tabList[i].className = '';
    }
    // 2.点击选中样式
    navList[clickIndex].className='active';
    tabList[clickIndex].className='active';
}