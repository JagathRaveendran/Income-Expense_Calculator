 let totalIncome = 0;
let totalExpence = 0;


function btnsubmit() {
  let expenseStatus1 = false;
  let expenseStatus2 = false;
  let status1 = false;

  const catogoryOUT = document.getElementById("catogoryexpence").value;
  const Expense = parseFloat(document.getElementById("Expense").value);
  let error;

  if (catogoryOUT == '') {
    error = "not Valid";
    document.getElementById("e-cat-OUT").style.color = "red";
  } else {
    error = "valid";
    document.getElementById("e-cat-OUT").style.color = "green";
    expenseStatus1 = true;
  }

  document.getElementById("e-cat-OUT").innerHTML = error;

  if (isNaN(Expense) || Expense <= 0) {
    error = "not valid";
    document.getElementById("e-money-OUT").style.color = "red";
  } else {
    error = "valid";
    document.getElementById("e-money-OUT").style.color = "green";
    expenseStatus2 = true;
  }

  document.getElementById("e-money-OUT").innerHTML = error;

  if (expenseStatus1 && expenseStatus2) {
    status1 = true;
    const tb = document.getElementById("tbe");
    const tr = tb.insertRow();
    const cat = tr.insertCell(0);
    const ine = tr.insertCell(1);

    cat.innerHTML = catogoryOUT;
    ine.innerHTML = Expense;
    document.getElementById("catogoryexpence").value = "";
    document.getElementById("Expense").value = "";
  }
  if (status1) {
    totalExpence = Expense + totalExpence;
    document.getElementById("totalEx").innerHTML = totalExpence;
    chart();
  }
}

function btnsubmit1() {
  let incomeStatus1 = false;
  let incomeStatus2 = false;
  let status = false;

  const catogoryIN = document.getElementById("catogoryincome").value;
  const Income = parseFloat(document.getElementById("Income").value);
  let error;

  if (catogoryIN == '') {
    error = "not Valid";
    document.getElementById("e-cat-IN").style.color = "red";
  } else {
    error = "valid";
    document.getElementById("e-cat-IN").style.color = "green";
    incomeStatus1 = true;
  }

  document.getElementById("e-cat-IN").innerHTML = error;

  if (isNaN(Income) || Income <= 0) {
    // Check if Income is not a valid number or is less than or equal to 0
    error = "not valid";
    document.getElementById("e-money-IN").style.color = "red";
  } else {
    error = "valid";
    document.getElementById("e-money-IN").style.color = "green";
    incomeStatus2 = true;
  }

  document.getElementById("e-money-IN").innerHTML = error;

  if (incomeStatus1 && incomeStatus2) {
    status = true;
    const tb = document.getElementById("tbi");
    const tr = tb.insertRow();
    const cat = tr.insertCell(0);
    const ine = tr.insertCell(1);

    cat.innerHTML = catogoryIN;
    ine.innerHTML = Income;

    document.getElementById("catogoryincome").value = "";
    document.getElementById("Income").value = "";
  }
  if (status) {
    totalIncome = Income + totalIncome;
    document.getElementById("totalIn").innerHTML = totalIncome;
    chart();
  }
}

function chart() 
{
  let Balence = totalIncome - totalExpence;

 
  var xValues = ["income", "Expense", "Balance"];
  if( Balence < 0)
  {
    alert("Balence is minus");
    Balence = 0;

  }
  const bal = totalIncome - totalExpence
  var yValues = [totalIncome, totalExpence, Balence];

  var barColors = ["#00aba9", "#b91d47", "#2b5797"];



  document.getElementById("Balence").innerHTML = bal;
  if( totalExpence > totalIncome || bal == 0 )
  {
    document.getElementById("score").style.color ="red";;
    document.getElementById("score").innerHTML = "Your Expense is too heigh ";
  }
  else
  {
    document.getElementById("score").style.color ="Green";;
    document.getElementById("score").innerHTML = "good job ";
  }
 
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Balance chart"
      }
    }
  });
  
}
