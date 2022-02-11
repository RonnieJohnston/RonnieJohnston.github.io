function scriptTest() 
{
    alert("My script is running.");
}

function formOutput()
{
    let name = document.getElementById('firstname').value;
    let feeling = document.getElementById('feeling').value;
    document.getElementById("output").innerHTML = "The Ruby Jackal welcomes you, " + name + "!  We're glad you are doing " + feeling + "!";
}