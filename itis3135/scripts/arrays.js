let personArray = new Array();
let salaryArray = new Array();

let $ = function(id)
{
    return document.getElementById(id);
}

function addSalary()
{
    if($('employeename').value === "" || $('employeesalary').value === "")
    {
        alert("Please enter required values.");
        return;
    } else if (isNaN($('employeesalary').value) || $('employeesalary').value < 0)
    {
        alert("Please enter a valid number in the salary field")
        return;
    }

    let name = $('employeename').value;
    let salary = parseFloat($('employeesalary').value).toFixed(2);

    personArray.push(name);
    salaryArray.push(salary);

    let testname = personArray.toString();
    let testsalary = salaryArray.toString();

    $('testline').innerHTML = "personArray: " + testname + "<br />" + "salaryArray: " + testsalary;
}

function displayResults()
{
    let avg = calcAvg();
    let highestString = calcHighest();

    $('results').innerHTML = ("The average salary of the table is: $" + avg + "<br />" + highestString);
}

function calcAvg()
{
    let sum = 0;
    let avg = 0;
    for(let i = 0; i < salaryArray.length; i++)
    {
        let temp = parseFloat(salaryArray[i]).toFixed(2);
        sum += temp;
    }
    avg = (sum / salaryArray.length);
    return avg;
}

function calcHighest()
{
    let highestSalary = 0;
    let highestPerson = null;
    for(let i = 0; i < salaryArray.length; i++)
    {
        if(salaryArray[i] > highestSalary)
        {
            highestSalary = salaryArray[i];
            highestPerson = personArray[i];
        }
    }

    return ("The person with the highest salary is " + highestPerson + " at $" + highestSalary + ".");
}

function displaySalary()
{
    for(let i = 0; i < personArray.length; i++)
    {
        let row = $('employeetablebody').insertRow(i);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        cell0.innerHTML = personArray[i];
        cell1.innerHTML = salaryArray[i];
        if(i > 0)
        {
            $('employeetablebody').deleteRow(i - 1);
        }
    }
}
