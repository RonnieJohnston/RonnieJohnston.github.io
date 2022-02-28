function appendNum(inputNum)
{
    outputString = document.getElementById('output');
    
    if(outputString == null)
    {
        outputString = inputNum;
        document.getElementById('output').innerHTML = outputString;
    } else if (outputString == 0)
    {
        outputString = inputNum;
        document.getElementById('output').innerHTML = outputString;
    } else
    {
        outputString.appendNum(inputNum);
        document.getElementById('output').innerHTML = outputString;
    }
}

/* Function to ensure buttons do something */
function testAlert(num)
{
    alert("You have entered: " + num);
}

/* Uncaught TypeError: Cannot read properties of null (reading 'appendNum')
    at appendNum (calculator_try.js:11:22)
    at HTMLButtonElement.onclick (calculator_try.html:50:75)

    Unsure why this is happening, moving on to tutorial.
*/