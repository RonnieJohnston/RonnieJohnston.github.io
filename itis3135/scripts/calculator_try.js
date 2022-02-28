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