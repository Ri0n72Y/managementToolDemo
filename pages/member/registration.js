$(document).ready(function(){

    // 按钮#get
    $("#get").click(function(){
    var register =$("#register");
    var formData = register.serialize();
    formData = register.serializeArray();
    var json = transformToJson(formData);
    json.a
    putNewMember($("#mobile").val(), JSON.stringify(json));
    });
});