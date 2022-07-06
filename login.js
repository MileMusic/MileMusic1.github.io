function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;


if(username=="admin" && password=="user")
{
    alert("login successfully");
    window.close("index.html");
    window.open("pjesme.html");
    return false;
}
else{
    alert("login failed");
}

}