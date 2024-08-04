function myFun()
{
    var name=document.getElementById('name').value;
    var regname=/^[a-zA-Z ]$/;
    if(regname.test(name))
    {
        document.getElementById('sms').innerHTML="";
        return true;

    }
    else
    {
        document.getElementById('sms').innerHTML="name should only contain letters";
        return false;
    }

}