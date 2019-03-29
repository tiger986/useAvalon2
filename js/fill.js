define([], function(){
    var model = avalon.define({
        $id: "fill",

        //段落练习答案
        testCon3: [["manager","Generally speaking"," miss"],["under","effectively"]],

        //input宽度
        textWidth: function(text){
            var sensor = $('<pre>'+ text +'</pre>').css({display: 'none'});
            $('body').append(sensor);
            var width = sensor.width();
            sensor.remove();
            return width;
        },

        //填空
        fillChange: function(){
            var a = $(this).parent().index();
            var b = $(this).index();
            if($(this).val() == model.testCon3[a][b]){
                $(this).addClass("iptReady");
            }else{
                $(this).removeClass("iptReady");
            }
        },

        bgShow: false,
        accuracyPopShow: false,

        //提交答案
        tijiao: function(){
            for(var i = 0; i < $(".fill2").find("input").length; i++){
                var a = $(".fill2").find("input").eq(i).parent().index();
                var b = $(".fill2").find("input").eq(i).index();
                $(".fill2").find("input").eq(i).val(model.testCon3[a][b]);
                $(".fill2").find("input").eq(i).width(model.textWidth( $(".fill2").find("input").eq(i).val()) + 10);
            }
            $(".fill2").find("input").addClass("red");
            $(".fill2").find(".iptReady").addClass("iptOk");
            var num = (($(".fill2").find(".iptReady").length / $(".fill2").find("input").length) * 100).toFixed(2) + "%";
            $(".accuracyPop_con_num").html(num);
            model.bgShow = true;
            model.accuracyPopShow = true;
        },

        //关闭正确率弹窗
        accuracyPopClose: function(){
            model.bgShow = false;
            model.accuracyPopShow = false;
        }

    });

    return model;
});