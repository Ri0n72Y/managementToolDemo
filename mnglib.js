// Enum style reference : https://stijndewitt.com/2014/01/26/enums-in-javascript/
// and its translation  : https://www.jianshu.com/p/76fc5ffa9279
// javascript documentation standard : https://www.css88.com/doc/jsdoc/index.html

var MenuType = {
    PRM_MAIN_MENU: 100,             // 主菜单
    PRM_REGISTRATION: 200,          // 注册界面
    PRM_APPOINTMENT: 300,           // 新预约界面

    SND_01_MEMBERSHIP: 1,           // 会员菜单
    SND_02_FINANCE: 2,              // 财务管理
    SND_03_STAFF: 3,                // 员工管理
    SND_04_INVENTORY: 4,            // 库存管理

    TRD_11_MEMBERMANAGE: 5,         // 会员菜单 -- 会员查询
    TRD_12_APPOINTMENTMANAGE: 6,    // 会员菜单 -- 预约管理
    TRD_13_ALLMEMBER: 7,            // 会员菜单 -- 所有会员
    TRD_21_LAUNDRYLIST: 8,          // 本店账务 -- 账目总览
    TRD_22_PERFORMANCESTAT: 9,      // 本店账务 -- 业绩统计
    TRD_23_SALESSTAT: 10,           // 本店账务 -- 销售统计
    TRD_24_NEWBALANCE: 11,          // 本店账务 -- 新建菜单
}

var stdWidth = 1920.0, stdHeight = 1080.0;
var url = "http://localhost:8080";

var shortcut = {
    NEW_MEMBER  : 0, // 主菜单的注册会员
    FIND_MEMBER : 1, // 主菜单点击放大镜弹出输入手机号的框，输完敲回车进去
    CHECK_OUT   : 2, // 任意菜单的结账快捷按钮
    HOME        : 3, // 任意非主菜单界面快捷回到主菜单的按钮
}

/**
 * Function constructor to create a button object
 * @constructor
 * @param {number} layoutX - x coordinate in canvas
 * @param {number} layoutY - y coordinate in canvas
 * @param {image} asset   - button image
 */
function button (layoutX, layoutY, asset) {
    this.layoutX = layoutX; this.layoutY = layoutY;
    this.asset = asset;
    this.drawImage = drawImage;
    function drawImage(scale) {
        image(this.asset, this.layoutX, this.layoutY, this.asset.width * scale, this.asset.height * scale);
    }

    /**
     * detect is mouse press inside the button area.
     * @param {number} x 
     * @param {number} y 
     */
    this.isClicked = isClicked;
    function isClicked (x, y, scale) {
        return x >= this.layoutX 
            && x <= this.layoutX + this.asset.width * scale 
            && y >= this.layoutY
            && y <= this.layoutY + this.asset.height * scale;
    }
}

/**
 * create button with text
 * @constructor
 * @param {string} text    - text on the button
 * @param {number} layoutX - x coordinate in canvas
 * @param {number} layoutY - y coordinate in canvas
 * @param {image}  asset   - button image
 */
function textButton (s, layoutX, layoutY, asset) {
    this.button = new button (layoutX, layoutY, asset);
    this.s = s;
    this.drawImage = drawImage;
    function drawImage(scale) {
        this.button.drawImage(scale);
        fill (0);
        text (this.s, this.button.layoutX + this.button.asset.width * scale/2, this.button.layoutY + this.button.asset.height * scale/2);
    }
}

//加几个常用图标，一直在界面上
function shortcut (icon, layoutX, layoutY) {
    this.button = new button (layoutX, layoutY, icon);
    this.drawImage = drawImage;
    function drawImage (scale) {
        this.button.drawImage(scale);
    }
}

/**
 * create page object
 * @constructor
 * @param {String} name  - name of the page
 * @param {*} contents 
 * @param {[]} buttons   - list of all buttons
 * @param {[]} shortcuts - list of all shortcuts
 */
function page (name, contents, buttons, shortcuts) {
    this.name = name;
    this.contents = contents;
    this.buttons  = buttons;
    this.shortcuts = shortcuts;

    this.drawImage = drawImage;
    function drawImage (scale) {
        for (var index = 0; index < contents.length; index++) {
            const e = contents[index];
            e.drawImage();
        }
        for (var index = 0; index < buttons.length; index++) {
            const e = buttons[index];
            e.drawImage(scale);
        }
        for (var index = 0; index < shortcuts.length; index++) {
            const e = shortcuts[index];
            e.drawImage(scale);
        }
    }
}

// reference from https://www.cnblogs.com/wxdblog/p/6888240.html
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

function getNowFormatTime() {
    var date = new Date();
    var seperator1 = ":";
    var hour = date.getHours();
    var min  = date.getMinutes();
    var sec  = date.getSeconds();
    var currentTime = hour + seperator1 + min + seperator1 + sec;
    return currentTime;
}

function getRegistrationID(mobile) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var id = year + month + strDate + mobile.slice(7);
    return id;
}

function transformToJson(formData){
    var obj={}
    for (var i in formData) {
        obj[formData[i].name]=formData[i]['value'];
    }
    return obj;
}