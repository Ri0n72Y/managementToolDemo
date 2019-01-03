// primary pages
var mainPage, membership, stuff, finance, inventory;
// page under membership
var allMembers, record, appointment, management, registration

/**
 * create main page 
 * @param {number} pageWidth  - width of the page
 * @param {number} pageHeight - height of the page
 * @param {*}      image      - image of button on main page
 * @param {[]}     shortcuts  - all shortcuts it have : findMember, newMember, checkout
 */
function createMainPage(pageWidth, pageHeight, image, shortcuts) {
    var member = new textButton (
            "会员管理",
            pageWidth * 0.2, pageHeight * 0.1,
            image
        );
        member.onClick = function () {
            setPage (MenuType.SND_MEMBERSHIP);
        };
        
    var finance = new textButton (
            "本店账务",
            pageWidth * 0.4, pageHeight * 0.1,
            image
        );
        finance.onClick = function () {
            setPage (MenuType.SND_FINANCE);
        };
        
    var staff = new textButton (
            "员工管理",
            pageWidth * 0.2, pageHeight * 0.5,
            image
        );
        staff.onClick = function () {
            setPage (MenuType.SND_STAFF);
        };
        
    var invent = new textButton (
            "库存管理",
            pageWidth * 0.4, pageHeight * 0.5,
            image
        );
        invent.onClick = function () {
            setPage (MenuType.SND_INVENTORY);
        };
    var buttons = [member, finance, staff, invent];
    return new page("店务系统", [], buttons, shortcuts);
}

/**
 * @param {number} pageWidth 
 * @param {number} pageHeight 
 * @param {*} image 
 * @param {[]} shortcuts 
 */
function createMemberPage(pageWidth, pageHeight, image, shortcuts) {
    var memberManage = new textButton (
            "会员管理",
            pageWidth * 0.07, pageHeight * 0.1,
            image
        );
        memberManage.onClick = function () {
            setPage (MenuType.PRM_MAIN_MENU);
        };

    var appointmentManage = new textButton (
            "预约管理",
            pageWidth * 0.07, pageHeight * 0.25,
            image
        );
        appointmentManage.onClick = function () {
            setPage (MenuType.PRM_MAIN_MENU);
        };

    var newMember = new textButton (
            "添加会员",
            windowWidth * 0.07, windowHeight * 0.4,
            image
        );
        newMember.onClick = function () {
            setPage(MenuType.PRM_MAIN_MENU);
        };

    var allMember = new textButton (
            "所有会员",
            windowWidth * 0.07, windowHeight * 0.55,
            image
        );
        allMember.onClick = function () {
            setPage(MenuType.PRM_MAIN_MENU);
        };

        var backToMainPage = new textButton (
            "返回上级",
            windowWidth * 0.07, windowHeight * 0.7,
            image
        );
        newMember.onClick = function () {
            setPage(MenuType.PRM_MAIN_MENU);
        }

    var buttons = [memberManage, appointmentManage, newMember, allMember, backToMainPage];
    return new page("会员管理", [], buttons, shortcuts);
}

