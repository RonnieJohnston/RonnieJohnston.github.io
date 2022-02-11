function scriptTest() 
{
    alert("My script is running.");
}

function formOutput(name, feeling)
{
    name = document.getElementById("firstname");
    feeling = document.getElementById("feeling");
    document.getElementById("output").innerHTML = "The Ruby Jackal welcomes you, " + name + "!  We're glad you are doing " + feeling + "!"
}