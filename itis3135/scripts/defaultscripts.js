function scriptTest() 
{
    alert("My script is running.");
}

function showDateTime() 
{
    let today = new Date();
    document.getElementById('date-label').innerHTML = "Current time is: " + today.getHours() + ":" + today.getMinutes() + ".  Today is: " + (today.getMonth()+1) + " " + today.getDate() + ", " + today.getFullYear() + ".";
}

function formOutput()
{
    let name = document.getElementById('firstname').value;
    let feeling = document.getElementById('feeling').value;
    document.getElementById("output").innerHTML = "The Ruby Jackal welcomes you, " + name + "!  We're glad you are doing " + feeling + "!";
}