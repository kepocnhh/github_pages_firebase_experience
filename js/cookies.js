function getCookie(name)
{
    var n = name+"=";
    var cookies = document.cookie.split(';');
    for(var i=0;i < cookies.length;i++)
    {
        var c = cookies[i];
        while(c.charAt(0)==' ')
        {
            c = c.substring(1, c.length);
        }
        if(c.indexOf(n) == 0)
        {
            return c.substring(n.length,c.length);
        }
    }
    return null;
}
function setCookie(name, value, time)
{
    var expires = "";
    if(time)
    {
        var date = new Date();
        date.setTime(date.getTime() + (time));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function clearCookie(name)
{
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}