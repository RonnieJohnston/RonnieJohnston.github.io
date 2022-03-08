/* Our main arrays */
let personArray = new Array();
let salaryArray = new Array();

/* Reusable function to retrieve elements */
let $ = function(id)
{
    return document.getElementById(id);
}

/* Add employee to table */
function addSalary()
{
    /* Input must pass checks */
    if($('employeename').value === "" || $('employeesalary').value === "")
    {
        alert("Please enter required values.");
        return;
    } else if (isNaN($('employeesalary').value) || $('employeesalary').value < 0)
    {
        alert("Please enter a valid number in the salary field")
        return;
    }

    /* Set variables equal to text fields */
    let name = $('employeename').value;
    let salary = parseFloat($('employeesalary').value).toFixed(2);

    /* Add to array */
    personArray.push(name);
    salaryArray.push(salary);

    /* Debugging */
    let testname = personArray.toString();
    let testsalary = salaryArray.toString();
    $('testline').innerHTML = "personArray: " + testname + "<br />" + "salaryArray: " + testsalary;
}

/* Display average salary and highest salary */
function displayResults()
{
    /* Call both functions */
    let avg = calcAvg();
    let highestString = calcHighest();

    /* Output */
    $('results').innerHTML = ("The average salary of the table is: $" + avg + "<br />" + highestString);
}

/* Calculate average salary of salary array */
function calcAvg()
{
    /* Total up the sum of all salaries */
    let sum = 0;
    for(let i = 0; i < salaryArray.length; i++)
    {
        let temp = parseFloat(salaryArray[i]).toFixed(2);
        sum += temp;
    }
    /* Debugging */
    $('testline2').innerHTML = salaryArray.length;

    /* Return average salary */
    return (sum / salaryArray.length);
}

/* Calculate highest salary from array */
function calcHighest()
{
    let highestSalary = 0;
    let highestPerson = null;
    /* Check each value in salary array, making it highest salary
    if it is greater than current highest salary */
    for(let i = 0; i < salaryArray.length; i++)
    {
        if(salaryArray[i] > highestSalary)
        {
            highestSalary = salaryArray[i];
            highestPerson = personArray[i];
        }
    }

    /* Return string with employee name and salary */
    return ("The person with the highest salary is " + highestPerson + " at $" + highestSalary + ".");
}

/* Function that modifies html table by populating rows with array information */
function displaySalary()
{
    /* For each item in the person array... */
    for(let i = 0; i < personArray.length; i++)
    {
        /* Create a new row and populate its two cells */
        let row = $('employeetablebody').insertRow(i);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        /* Left cell holds name, right cell holds salary */
        cell0.innerHTML = personArray[i];
        cell1.innerHTML = salaryArray[i];
        /* Reset table so that multiple button presses don't stack */
        if(i > 0)
        {
            $('employeetablebody').deleteRow(i - 1);
        }
    }
}
