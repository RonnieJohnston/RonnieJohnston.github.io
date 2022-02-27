function appendNum(inputNum)
{
    outputString = document.getElementById('output').value;
    
    if(outputString == null)
    {
        outputString = inputNum;
        document.getElementById('output').innerHTML = outputString;
    } else
    {
        outputString.appendNum(inputNum);
        document.getElementById('output').innerHTML = outputString;
    }
}