require.config({
    paths: {
        "mui": "libs/mui.min"
    }
})
require(['mui'], function(mui) {
    function init() {
        addevent()
    }

    function addevent() {
        var ulis = [...document.querySelectorAll('ul li')];
        var div = [...document.querySelectorAll('.content div')];
		var btn=document.querySelector('.btn')
        ulis.forEach(function(item, index) {
            item.onclick = function() {
                for (var j = 0; j < ulis.length; j++) {
                    ulis[j].classList.remove('active')
                    div[j].style.display = 'none'
                }
                ulis[index].classList.add('active')
                div[index].style.display = 'block'
            }
        })
		btn.onclick=function(){
			mui.ajax('/api/addincome',{
				data:{
					"money":document.querySelector('.money').value,
					"time":document.querySelector('.time').value,
					"title":document.querySelector('.title').value,
					"cart":document.querySelector('.cart').value,
					"member":document.querySelector('.member').value,
					
				},
				dataType:'json',//服务器返回json格式数据
				type:'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
				success:function(res){
					console.log(res)
				},
				error:function(xhr,type,errorThrown){
					
				}
			});
		}
		var incomebtn=document.querySelector('.incomebtn');
			incomebtn.onclick=function(){
			mui.ajax('/api/addpay',{
				data:{
					"money":document.querySelector('.oney').value,
					"time":document.querySelector('.ime').value,
					"title":document.querySelector('.itle').value,
					"cart":document.querySelector('.art').value,
					"member":document.querySelector('.ember').value,
					
				},
				dataType:'json',//服务器返回json格式数据
				type:'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
				success:function(res){
					console.log(res)
				},
				error:function(xhr,type,errorThrown){
					
				}
			});
		}
    }
    init()
})