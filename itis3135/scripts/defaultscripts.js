function scriptTest() 
{
    alert("My script is running.");
}

function formOutput(name, feeling)
{
    let name = document.getElementById("firstname");
    let feeling = document.getElementById("feeling");
    document.getElementById("output").innerHTML = "The Ruby Jackal welcomes you, " + name + "!  We're glad you are doing " + feeling + "!"
}