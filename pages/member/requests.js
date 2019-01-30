/**
 * put a new member to database
 * @param {String} id 
 * @param {Json} data 
 */
function putNewMember(id, data) {
    $.ajax(
        {
            async : false,
            url: url + "/members/new_members",
            type: "POST",
            dataType: "json",
            data: {
                id : id,
                data : data
            },
            success: function (data) {
                alert(data ? "添加成功" : "添加操作出现错误，请核对信息是否输入正确");
            }
        }
    );
}

function deleteMemberByID(key) {
    $.ajax(
        {
            url: url + "/members/delete_members",
            type: "DELETE",
            dataType: "json",
            data: {
                id : key
            },
            success: function (data) {
                alert(data ? "删除完成" : "未删除任何数据，请核对信息是否正确");
            }
        }
    );
}

function getMember(key) {
    $.ajax(
        {
            url: url + "/members/get_member",
            type: "GET",
            dataType: "json",
            data: {
                id : key
            },
            success: function (data) {
                var result = JSON.stringify(data);
                alert(result);
            }
        }
    );
}

function getAllMembers() {
    var result;
    $.ajax({
        async : false,
        url : url + "/members/get_allMembers",
        type: "GET",
        success : function (data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function transformToJson(formData){
    var obj={}
    for (var i in formData) {
        obj[formData[i].name]=formData[i]['value'];
    }
    return obj;
}