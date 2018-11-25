//  jQuery 实现文档加载完成后事件的原理
/**
 * 
 * @param {*} callback 
 * 页面文档加载完成后的回调函数
 */
document.myReady = function( callback ){
    //  封装标准浏览器和ie浏览器
    if( document.addEventListener ){
        document.addEventListener("DOMContentLoaded",callback,false);
    }else if(document.attachEvent){
        //  兼容IE8及以下的浏览器
        document.attachEvent("onreadystatechange",function(){
            //  文档的状态为interactive表示，文档dom对象可以进行访问
            if(document.readyState == "interactive"){
                callback(window.event);
            }
        });
    }else{  //  其他特殊情况
        window.onload = callback;
    }
};
