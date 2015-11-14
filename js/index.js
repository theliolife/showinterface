/**
 * Created by Administrator on 2015/11/11 0011.
 */
avalon.ready(function() {
    var vm = avalon.define({
        $id: "index",
        w: '请输入用户名',
        inter: '接口',
        repeatText:[],
        loginName:'登录',
        model_search_res:[],
        'model_search_select':function(){
            vm.model_search_value=$(this).text();
            $("#model_search").fadeOut();
        },
        'model_search_value':'',
        click: function () {
            vm.w = parseFloat(vm.w) + 10;
            vm.h = parseFloat(vm.h) + 10;
        }
    });
    function setCookie(name,value)
    {
        var Days = 1;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ value + ";expires=" + exp.toGMTString();
    }

    function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }

    function delCookie(name)
    {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=getCookie(name);
        if(cval!=null)
            document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
    var show_information = function(type,text){
        $('#'+type).text().fadeIn();
        var information = setTimeout(function(){
            $('#'+type).fadeOut();
            clearTimeout(information);
        },1000);
    };

    var cookiename = getCookie('username');
    if(cookiename){
        vm.loginName=cookiename;
    }

    $("#ajax_test").click(function(){
        if(getCookie('username')){
            $.ajax({
                async:false,
                type: "get",
                dataType:'json',
                data:{},
                url: "php/search_interface_ajax.php",
                beforeSend:function(){
                    //
                },
                success: function(data){
                    console.log(data);
                    for(var i in data){
                        if(1){
                            vm.repeatText = data.reverse();
                        };
                        console.log(data.repeatText);
                        console.log(vm);
                        avalon.scan(document.getElementById("show_interface_main"));
                    }
                },
                error:function(err){
                    console.log(err);
                }
            });
        }else{
            alert("请登录");
        }
    });
    $("#addFunction").click(function(){
        if(getCookie('username')){
            $.ajax({
                url:'php/add_interface.php',
                dataType:'text',
                Type:'get',
                data:{
                    'function_name':$("#add_function_name").val(),
                    'path':$("#add_function_path").val(),
                    'interface_detail':$("#add_function_detail").val()
                },
                beforeSend:function(){
                    //
                },
                success:function(data){
                    console.log(data);
                    vm.repeatText.push({
                        'function_name':$("#add_function_name").val(),
                        'path':$("#add_function_path").val(),
                        'interface_detail':$("#add_function_detail").val()
                    });
                    $("#addFunctionclose").click();
                    avalon.scan(document.getElementById("show_interface_main"));
                },
                error:function(err){
                    console.log(err);
                }
            });
        }else{
            alert("请登录");
        }
    });

    $("#addFunctionmodel").click(function(){
        if(getCookie('username')){
            $.ajax({
                url:'php/model_search.php',
                dataType:'json',
                Type:'get',
                data:{
                    'function_name':$("#modelSearchinput").val()
                },
                beforeSend:function(){
                    //
                },
                success:function(data){
                    console.log(data);
                    $("#model_search").fadeIn();
                    vm.model_search_res=data;
                    avalon.scan(document.getElementById('search_model_main'));
                },
                error:function(err){
                    console.log(err);
                }
            });
        }else{
            alert("请登录");
        }
    });

    $("#model_search").delegate('li','click',function(){
        var val_word=$(this).text();
        console.log(val_word);
        var mm=$("#show_interface_main").find("a:contains('"+val_word+"')");
        var top = mm.offset().top;
        $("html,body").animate({scrollTop:top},600);
        console.log(top);
    });

    $("#login_submit").click(function(){
        var that=$(this);
        $.ajax({
            'url':'php/login.php',
            dataType:'json',
            Type:'get',
            data:{
                'username':$("#user_name").val(),
                'password':$("#password_value").val()
            },
            beforeSend:function(){},
            success:function(data){
                console.log(data);
                if(data['status']==1){
                    that.prev().click();
                    setCookie('username',data['username']);
                    console.log(getCookie('username'));
                    sessionStorage.setItem('username',getCookie('username'));
                }
                if(data['cn_name']){
                    vm.loginName=data['cn_name'];
                }else{
                    vm.loginName=data['username'];
                }
            },
            error:function(err){
                console.log(err);
            }
        });
    });

    $("#manage_record").click(function(){
        $("#show_interface_main").find('b').toggle().end().find('span').toggle();
    });
    $("#show_interface_main").delegate('b','click',function(){
        var that=$(this);
        if(getCookie('username')){
            $.ajax({
                url:'php/del_interface.php',
                dataType:'text',
                Type:'get',
                data:{
                    'id':that.find("i").text()
                },
                beforeSend:function(){
                    //
                },
                success:function(data){
                    console.log(data);
                    if(data==1){
                        that.parentsUntil("#show_interface_main","div.panel-default").fadeOut(400);
                        setTimeout(function(){
                            vm.repeatText.splice(that.index()-1,1);
                        },400);
                    }
                },
                error:function(error){
                    console.log(error);
                }
            });
        }
    });

    $("#show_interface_main").delegate('span','click',function(){
        var that=$(this);
        $("#fixFunction").removeClass('disabled');
        $("#addinterfavebtn").click();
        $("#add_function_name").val(that.prev().prev().text());
        $("#add_function_path").val(that.parent().parent().next().find("div").text());
        if(getCookie('username')&&0){
            $.ajax({
                url:'php/fix_interface.php',
                dataType:'text',
                Type:'get',
                data:{
                    'id':that.find("i").text()
                },
                beforeSend:function(){
                    //
                },
                success:function(data){
                    console.log(data);
                    if(data==1){
                        that.parentsUntil("#show_interface_main","div.panel-default").fadeOut(400);
                        setTimeout(function(){
                            vm.repeatText.splice(that.index()-1,1);
                        },400);
                    }
                },
                error:function(error){
                    console.log(error);
                }
            });
        }
    });

    $("#layout").click(function(){
        delCookie('username');
        vm.loginName='登陆';
    });
    avalon.scan();

});