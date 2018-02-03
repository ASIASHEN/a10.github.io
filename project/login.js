/*
* @Author: ASIA
* @Date:   2018-01-05 09:43:10
* @Last Modified by:   ASIA
* @Last Modified time: 2018-01-05 09:59:51
*/
function login() {  
  
    var username = document.getElementById("username");  
    var pass = document.getElementById("password");  
  
    if (username.value == "") {  
  
        alert("请输入用户名");  
  
    } else if (pass.value  == "") {  
  
        alert("请输入密码");  
  
    } else if(username.value == "a210" && pass.value == "a210"){  
  
        window.location.href="indexX/index.html";  
  
    } else {  
  
        alert("请输入正确的用户名和密码！")  
  
    }  
}  