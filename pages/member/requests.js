/**
 * put a new member to database
 * @param {String} id 
 * @param {Json} data 
 */
function putNewMember(id, data) {
    $.ajax(
        {
            url: url + "/members/new_member",
            type: "POST",
            dataType: "json",
            data: {
                id : id,
                data : data
            },
            success: function (data) {
                var result = JSON.stringify(data);
                alert(result);
            }
        }
    );
}

function deleteMember(key) {
    $.ajax(
        {
            url: url + "/members/delete_member",
            type: "POST",
            dataType: "json",
            data: {
                id : id,
                data : data
            },
            success: function (data) {
                var result = JSON.stringify(data);
                alert(result);
            }
        }
    );
}



function transformToJson(formData){
    var obj={}
    for (var i in formData) {
        /*[{"name":"user","value":"hpc"},{"name":"pwd","value":"123"},{"name":"sex","value":"M"},{"name":"age","value":"100"},{"name":"phone","value":"13011112222"},{"name":"email","value":"xxx@xxx.com"}]
        */
        //下标为的i的name做为json对象的key，下标为的i的value做为json对象的value
        obj[formData[i].name]=formData[i]['value'];
    }
    return obj;
}