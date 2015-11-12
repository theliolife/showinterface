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
        },
        'model_search_value':'',
        click: function () {
            vm.w = parseFloat(vm.w) + 10;
            vm.h = parseFloat(vm.h) + 10;
        }
    });

    $("#ajax_test").click(function(){
        $.ajax({  //这里会发出两次请来
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
                        vm.repeatText = data.reverse()
                    };
                    console.log(data.repeatText);
                    console.log(vm);
                    avalon.scan(document.getElementById("show_interface_main"));
                }
            },
            error:function(err){
                console.log(err);
            }
        })
    });
    $("#addFunction").click(function(){
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
        })
    });

    $("#addFunctionmodel").click(function(){

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

                vm.model_search_res=data;
                avalon.scan(document.getElementById('search_model_main'));
            },
            error:function(err){
                console.log(err);
            }
        })
    });

    $("#test").click(function(){
        var val_word='bus';
        var mm=$("#show_interface_main").find("a:contains('"+val_word+"')");
        var top = mm.parent().parent().parent().parent().offset().top;
        $("html,body").animate({scrollTop:top},600);
        console.log(top);
    });

    $("#login_submit").click(function(){
        $.ajax({
            'url':'',
            dataType:'json',
            Type:'text',
            beforeSend:function(){},
            success:function(data){
                console.log(data);
            },
            error:function(err){
                console.log(err);
            }
        });
    });
    avalon.scan();

});