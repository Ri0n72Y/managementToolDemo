function putNewTerm(data) {
    $.ajax(
        {
            async : false,
            url: url + "/account/new_account",
            type: "POST",
            dataType: "json",
            data: {
                data : data
            },
            success: function (stat) {
                alert(stat ? "添加成功" : "添加操作出现错误，请核对信息是否输入正确");
            }
        }
    );
};

function editTerm(id, data) {
    $.ajax(
        {
            async : false,
            url: url + "/account/edit_account",
            type: "POST",
            dataType: "json",
            data: {
                id : id,
                data : data
            },
            success: function (stat) {
                alert(stat ? "修改成功" : "操作出现错误，请核对信息是否输入正确");
            }
        }
    );
};

function deleteTerm(id) {
    $.ajax(
        {
            async : false,
            url: url + "/account/delete_term",
            type: "DELETE",
            dataType: "json",
            data: {
                id : id
            },
            success: function (stat) {
                alert(stat ? "删除成功" : "操作出现错误，请核对信息是否输入正确");
            }
        }
    );
};

function getAllTerms() {
    var result;
    $.ajax(
        {
            async : false,
            url: url + "/account/get_allTerms",
            type: "GET",
            dataType: "json",
            success: function (data) {
                result = JSON.parse(data);
            }
        }
    );
    return result;
}

function getAllTerms(sdate, edate) {
    var result;
    $.ajax(
        {
            async : false,
            url: url + "/account/get_account",
            type: "GET",
            dataType: "json",
            data: {
                sdate : sdate,
                edate : edate
            },
            success: function (data) {
                result = JSON.parse(data);
            }
        }
    );
    return result;
}

function getInfoByID(id) {
    var result;
    $.ajax(
        {
            async : false,
            url: url + "/member/get_info",
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