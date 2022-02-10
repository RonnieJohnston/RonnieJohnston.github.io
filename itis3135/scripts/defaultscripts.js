function scriptTest() 
{
    alert("My script is running.");
}

function formOutput(name, feeling)
{
    let name = document.getElementById("firstname");
    let feeling = document.getElementById("feeling");
    document.write("<h3>Hello, " + name + ".  We at Ruby Jackal are glad you are feeling " + feeling + ".</h3>");
}