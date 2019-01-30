var dataIndex = [
    "c_id",
    "c_name",
    "c_gender",
    "c_age",
    "c_mobile",
    "c_type",
    "c_currency",
    "c_last_date",
    "c_desc"
];

$(document).ready(
    function() {
        var data = getAllMembers();
        for (const row in data) {
            var rowString = row % 2 == 0 ? "<tr class=\"alt\">" : "<tr>";
            for (const key in dataIndex) {
                if (data[row].hasOwnProperty(dataIndex[key])) {
                    const e = data[row][dataIndex[key]];
                    rowString += "<td>" + e + "</td>"; 
                }
            }
            $("#member-form").append(rowString + "</tr>");
        }
    }
);