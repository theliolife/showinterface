/**
 * Created by Administrator on 2015/11/11 0011.
 */
window.onload=function(){
    require(["mmRouter"], function() {
        var model = avalon.define({
            $id: "test",
            currPath: "",
            params: {},
            query: {},
            args: "[]",
            pageUrl:"templates/tools/search_form.html",
            lio:123,
            xxx: "引入内部模板"
        });
        function callback() {
            model.currPath = this.path
            var params = this.params
            if ("time" in params) {
                params.time = avalon.filters.date(params.time, "yyyy年M月dd日")
            }
            model.params = params
            model.args = "[" + [].slice.call(arguments).join(",") + "]"
            model.query = this.query
        };
        function go_reg_page() {
            alert(123);
        };
        function gopage(){
            if(this.path==="/index"){
                model.pageUrl="templates/tools/search_form.html"; //如果url后缀变成"#!/index"，则pageUrl为“mine.html”
            }else {
                var path_tail = this.path.replace(/\//, ""); //去掉this.path值的第一个斜杠
                model.pageUrl = path_tail + ".html";  //动态修改pageUrl属性值
            }
        }
        avalon.router.get("/aaa/", callback);
        avalon.router.get("/bbb", callback);
        avalon.router.get("/ccc/:ccc", callback);
        avalon.router.get("/ddd/{time:date}/", callback);
        avalon.router.get("/eee/{count:\\d{4}}/", callback);
        avalon.router.get("/fff", callback);
        avalon.router.get("/templates/tools/showSources",gopage);
        avalon.router.get("/templates/tools/register",gopage);
        avalon.router.get("/templates/tools/article_detail",gopage);
        avalon.router.get("/templates/tools/searchBlock",gopage);
        avalon.router.get("/templates/tools/chatRoom",gopage);
        avalon.router.get("/templates/tools/Task_board",gopage);
        avalon.router.get("/index",gopage);
        avalon.router.get("/templates/tools/showDetail",gopage);
        avalon.history.start({
            basepath: "/avalon"
        });
        avalon.scan()
    });
};