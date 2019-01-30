var currentCustomerData;

$(document).ready(
    function() {
        //查询按钮
        $("#search").click(function(){
            var key = $("#mobile").val();
            currentCustomerData = getMember(key); // 数据以JSON对象进行存储
            //在这里写jQuery添加HTML元素的语句

            //到这里为止
        })

        //删除会员资料按钮
        $("#delete").click(function(){
            var key = currentCustomerData.c_id;
            deleteMemberByID(key);
            window.location.reload();
        })
    }
);