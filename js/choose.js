define([], function(){
    var model = avalon.define({
        $id: "choose",

        //选择题1
        testCon1: [{type:"单选",title:"Could you send this postcard for me?",ans1:"A. Sorry, I don't know.",ans2:"B. With pleasure.",ans3:"C. No,I can't.",ans4:"D. That's great!",correct: "B"},
            {type:"单选",title:"Would you mind if I open the window?",ans1:"A. No, of course not.",ans2:"B. No, let me do it.",ans3:"C. Yes, I do.",ans4:"D.Yes, please do it.",correct: "A"},
            {type:"单选",title:"I wonder if I can use your laptop?",ans1:"A. Good idea!",ans2:"B. Go ahead!",ans3:"C. No, you can't.",ans4:" D. No, thank you.",correct: "B"}],

        //选择答案
        checkAns: function(){
            $(this).parent().parent().find("p").removeClass("checked");
            $(this).next().addClass("checked");
        },

        bgShow: false,
        accuracyPopShow: false,

        //提交答案
        tijiao: function(){
            $(".question1").find(".checked").addClass("red");
            $(".question1").find(".A").addClass("correct");
            $(".question1").find(".B").addClass("correct");
            $(".question1").find(".C").addClass("correct");
            $(".question1").find(".D").addClass("correct");
            var num = (($(".question1").find(".checked.correct").length / model.testCon1.length) * 100).toFixed(2) + "%";
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