function Calculate(){
    amount = document.getElementById("amount").value;
    rate = document.getElementById("rate").value;
    years = document.  getElementById("years").value;
    months=years*12
    monthly_rate=rate/(12*100)
    emi=[amount*monthly_rate*[(1+monthly_rate)**months]]/[((1+monthly_rate)**months)-1]
    r=(emi*months).toFixed(2);
    t=(r-amount)
    document.getElementById("d1").innerHTML ="Loan Amount: "+ amount;
    document.getElementById("d2").innerHTML = "Total interest: "+t;
    document.getElementById("d3").innerHTML = "EMI: " +emi;
    document.getElementById("d4").innerHTML = "Total repayment: "+r;
}
