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

function modularCalc()
{
    let jackals = document.getElementById('jackals').value;
    let cookies = document.getElementById('cookies').value;
    document.getElementById('output4').innerHTML = "Remaining cookies: " + (cookies % jackals) + ".";
}

function getShape()
{
    let numSides = prompt("Ruby Jackal would like to know how many sides your polygon has (0-10).", "0");
    while(!validateEntry(numSides)) 
    {
        numSides = prompt("Please enter a number from 0-10.", "0")
    }
    /* Polygon array holding names for sides 0-10 */
    numSides = Math.abs(numSides);
    let shapeArray = new Array("Nothing!", "a Henagon", "a Digon", "a Trigon", "a Tetragon", "a Pentagon", "a Hexagon", "a Heptagon", "an Octagon", "an Enneagon", "a Decagon");
    document.getElementById('output').innerHTML = "Ruby Jackal says your shape is " + shapeArray[numSides]; 
}

function validateEntry(entry)
{
    /* Function that validates the sides entry is between 0-10 unsigned */
    if(isNaN(entry)) 
    {
        return false;

    }
    entry = Math.round(entry);

    if (Math.abs(entry) > 10)
    {
        return false;

    }
    return true;
}