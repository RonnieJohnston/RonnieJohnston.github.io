function scriptTest() 
{
    alert("My script is running.");
}

function showDateTime() 
{
    let today = new Date();
    let month = today.getMonth();

    let monthWord = new Array('January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December');

    document.getElementById('date-label').innerHTML = "Current time is: " + today.getHours() + ":" +
     today.getMinutes() + ".  Today is: " + monthWord[month] + " " + today.getDate() + ", " + today.getFullYear() + ".";
}

function formOutput()
{
    let name = document.getElementById('firstname').value;
    let feeling = document.getElementById('feeling').value;
    document.getElementById("output").innerHTML = "The Ruby Jackal welcomes you, " + name + "!  We're glad you are doing " + feeling + "!";
}

function calcTax()
{
    let salary = parseInt(document.getElementById('salary').value);
    let tax = parseInt(document.getElementById('tax').value);
    const finalValue = salary - (salary * tax * 0.01);
    document.getElementById('output2').innerHTML = "Monthly salary after tax is: $" + finalValue + ".";
}

function calcAvg()
{
    let hours1 = parseInt(document.getElementById('hours1').value) || 0;
    let hours2 = parseInt(document.getElementById('hours2').value) || 0;
    let hours3 = parseInt(document.getElementById('hours3').value) || 0;
    let hours4 = parseInt(document.getElementById('hours4').value) || 0;
    let hours5 = parseInt(document.getElementById('hours5').value) || 0;

    let hoursArray = new Array(hours1, hours2, hours3, hours4, hours5);
    let numWorkers = 0;
    for(var i = 0; i < 5; i++) 
    {
        if(hoursArray[i] != 0) 
        {
            numWorkers++;
        }
    }
    document.getElementById('output3').innerHTML = "Average work time is: " + ((hours1 + hours2 + hours3 + hours4 + hours5) / numWorkers) + " hours.";
}