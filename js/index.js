/**
 * Created by Administrator on 2015/11/11 0011.
 */
avalon.ready(function() {
    var vm = avalon.define({
        $id: "index",
        w: '请输入用户名',
        inter: '接口',
        repeatText:[],
        model_search_res:[],
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
    avalon.scan();

});