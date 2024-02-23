function submit()
{
    var x = document.getElementById("inp").value;
    if(!x)
    {
        document.getElementById("err").innerHTML = "Error";
    }
}