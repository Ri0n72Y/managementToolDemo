var dataIndex = [
    "a_id",
    "a_index",
    "a_date",
    "a_time",
    "c_id",
    "p_id",
    "s_id",
    "a_amount",
    "s_logid",
    "a_type",
    "a_desc"
];

$(document).ready(
    function() {
        var data = getAllTerms();
        for (const row in data) {
            var rowString = row % 2 == 0 ? "<tr class=\"alt\">" : "<tr>";
            for (const key in dataIndex) {
                if (data[row].hasOwnProperty(dataIndex[key])) {
                    const e = data[row][dataIndex[key]];
                    switch (e) {
                        case "c_id": 
                            var info = getInfoByID(e);
                            rowString += "<td>" + info["c_id"] + "</td>";
                            rowString += "<td>" + info["c_name"] + "</td>";
                            e = info["c_mobile"];
                            break;
                        case "p_id":
                            // 占位，等接口
                            var name = "示例产品";
                            rowString += "<td>" + e + "</td>";
                            e = name;
                            break;
                        case "s_id":
                            // 占位，等接口
                            var name = " 示例员工";
                            e += name;
                            break;
                        case "s_logid":
                            // 占位，等接口
                            var name = " 示例员工";
                            e += name;
                            break;
                        default:
                    }
                    rowString += "<td>" + e + "</td>"; 
                }
            }
            $("#amount-form").append(rowString + "</tr>");
        }
    }
);