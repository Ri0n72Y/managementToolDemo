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

function editMember(id, data) {
    $.ajax(
        {
            async : false,
            url: url + "/members/edit_members",
            type: "POST",
            dataType: "json",
            data: {
                id : id,
                data : data
            },
            success: function (data) {
                alert(data ? "修改成功" : "操作出现错误，请核对信息是否输入正确");
            }
        }
    );
}

function deleteMemberByID(key) {
    $.ajax(
        {
            async : false,
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

function getAllMembersByDate() {
    var result;
    $.ajax({
        async : false,
        url : url + "/members/get_allMembersLastdate",
        type: "GET",
        success : function (data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function getAllMembersLast3() {
    var result;
    $.ajax({
        async : false,
        url : url + "/members/get_lastComingDate3",
        type: "GET",
        success : function (data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function getAllMembersLast7() {
    var result;
    $.ajax({
        async : false,
        url : url + "/members/get_lastComingDate7",
        type: "GET",
        success : function (data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function getAllMembersLast30() {
    var result;
    $.ajax({
        async : false,
        url : url + "/members/get_lastComingDate30",
        type: "GET",
        success : function (data) {
            result = JSON.parse(data);
        }
    });
    return result;
}

function getMemberByID(id) {
    var result;
    $.ajax(
        {
            async : false,
            url: url + "/members/get_memberID",
            type: "GET",
            dataType: "json",
            data: {
                id : id
            },
            success: function (data) {
                result = JSON.parse(data);
            }
        }
    );
    return result;
}

function getMember(key) {
    var result;
    $.ajax(
        {
            async : false,
            url: url + "/members/get_memberNumber",
            type: "GET",
            dataType: "json",
            data: {
                id : key
            },
            success: function (data) {
                result = JSON.parse(data);
            }
        }
    );
    return result;
}

function transformToJson(formData){
    var obj={}
    for (var i in formData) {
        obj[formData[i].name]=formData[i]['value'];
    }
    return obj;
}

function getCurrency(id) {
    var result;
    $.ajax(
        {
            async : false,
            url: url + "/members/get_currency",
            type: "GET",
            dataType: "json",
            data: {
                id : id
            },
            success: function (data) {
                result = JSON.parse(data);
            }
        }
    );
    return result;
}