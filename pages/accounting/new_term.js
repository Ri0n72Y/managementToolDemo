$(document).ready(
    function() {
        $("#get").click(
            function(){
                var register =$("#register");
                var formData = register.serialize();
                formData = register.serializeArray();
                var json = transformToJson(formData);
                json.a_date = getNowFormatDate();
                json.a_time = getNowFormatTime();
                json.a_id   = json.a_date + json.a_index;
                json.c_id   = getCidByMobile(json.c_mobile)[0]["c_id"];
                putNewTerm(JSON.stringify(json));
            }
        );
    }
);