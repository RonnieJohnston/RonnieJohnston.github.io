let personArray = new Array();
let salaryArray = new Array();

function addSalary()
{

}

function displayResults()
{
    let sum = 0;
    let avg = 0;
    for(let i = 0; i < salaryArray.length; i++)
    {
        let temp = parseFloat(salaryArray[i]).toFixed(2);
        sum += temp;
    }
    avg = (sum / salaryArray.length)
}

function displaySalary()
{

}
