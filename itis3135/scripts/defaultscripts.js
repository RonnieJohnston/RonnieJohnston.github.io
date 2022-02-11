function scriptTest() 
{
    alert("My script is running.");
}

function showDateTime() 
{
    let today = new Date();
    let month = today.getMonth() + 1;

    let monthWord = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    document.getElementById('date-label').innerHTML = "Current time is: " + today.getHours() + ":" + today.getMinutes() + ".  Today is: " + monthWord[month] + " " + today.getDate() + ", " + today.getFullYear() + ".";
}

function formOutput()
{
    let name = document.getElementById('firstname').value;
    let feeling = document.getElementById('feeling').value;
    document.getElementById("output").innerHTML = "The Ruby Jackal welcomes you, " + name + "!  We're glad you are doing " + feeling + "!";
}