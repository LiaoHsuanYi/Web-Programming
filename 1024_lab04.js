function Border1()
{
    document.getElementById('table1').style.border = '1px solid black';
    document.getElementById('table1').style.borderSpacing = '1px';
}
function Border2()
{
    document.getElementById('table1').style.border = '10px solid black';
    document.getElementById('table1').style.borderSpacing = '10px';
}
function Border3()
{
    document.getElementById('table1').style.border = '20px solid black';
    document.getElementById('table1').style.borderSpacing = '20px';
}
function Green()
{
    var table = document.getElementById("table1")
    var rows = table.getElementsByTagName("td")
    for (var i = 0; i < rows.length; i++)
    {
        var row = rows[i];
        row.style.backgroundColor = "#CDFAD5"
    }
}
function Blue()
{
    var table = document.getElementById("table1")
    var rows = table.getElementsByTagName("td")
    for (var i = 0; i < rows.length; i++)
    {
        var row = rows[i];
        row.style.backgroundColor = "#A0E9FF"
    }
}
function Pink()
{
    var table = document.getElementById("table1")
    var rows = table.getElementsByTagName("td")
    for (var i = 0; i < rows.length; i++)
    {
        var row = rows[i];
        row.style.backgroundColor = "pink"
    }
}
function Orange()
{
    var table = document.getElementById("table1")
    var rows = table.getElementsByTagName("td")
    for (var i = 0; i < rows.length; i++)
    {
        var row = rows[i];
        row.style.backgroundColor = "#FFCF96"
    }
}
function Reset()
{
    var table = document.getElementById("table1")
    var rows = table.getElementsByTagName("td")
    for (var i = 0; i < rows.length; i++)
    {
        var row = rows[i];
        row.style.backgroundColor = "lightyellow"
    }
    document.getElementById('table1').style.width = "100%";
    document.getElementById('table1').style.border = "1px solid black";
    document.getElementById('table1').style.borderSpacing = "1px";

}