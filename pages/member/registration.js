$(document).ready(
    function(){

        // 按钮#get
        $("#get").click(function(){
        var register =$("#register");
        var formData = register.serialize();
        formData = register.serializeArray();
        var json = transformToJson(formData);
        json.c_regtime = getNowFormatDate();
        json.c_last_date = getNowFormatDate();
        putNewMember(getRegistrationID($("#mobile").val()), JSON.stringify(json));
        });
    }
);