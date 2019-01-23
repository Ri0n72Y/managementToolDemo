namespace benz_CSI.json.ajax
{
public partial class WinLog : System.Web.UI.Page
{
protected void Page_Load(object sender, EventArgs e)
{
Response.Write("利用 Response对象获取客户端数据");
Response.Write("<hr/>");
string[] names = Request.Form.AllKeys;//定义name保存表单中的所有键即元素名称
for (int i = 0; i < names.Length; i++)
{
string[] values = Request.Form.GetValues(i);//定义values保存表单中所有键的键值
for (int j = 0; j < values.Length; j++)
Response.Write(names[i] + "=" + values[j] + "<br/>");
}
Response.Write("<hr/>");
Response.Write(Request.Form["picture"]);
SaveFile(Request.Form["picture"]);
}

 


public bool SaveFile(string filePath)
{
if (Request.Files.Count >= 1)
{
HttpPostedFile postedFile = Request.Files[0];
string fileName, fileExtension;
fileName = System.IO.Path.GetFileName(postedFile.FileName); //文件名称
if (fileName != "")
{
fileExtension = System.IO.Path.GetExtension(fileName); //上传文件的扩展名
string new_filename = DateTime.Now.ToString("yyyyMMddHHmmss") + fileExtension; //给文件重新命名
string FileTemp = Page.MapPath("/json/ajax/upload/");
postedFile.SaveAs(FileTemp + new_filename);
Response.Write("文件 类 型：" + postedFile.ContentType.ToString() + "<br/>");
Response.Write("文件新名称：" + new_filename + "<br/>");
Response.Write("文件原名称：" + fileName + "<br/>");
Response.Write("文件扩展名：" + fileExtension + "<br/>");
Response.Write("文件原路径：" + postedFile.FileName + "<br/>");
Response.Write("文件新路径：" + FileTemp + new_filename + "<br/>");
}
else
{
Response.Write("false");
}
}


return true;
}

}

 


}

