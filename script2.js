const loanAmount = document.getElementById("cloanamount");
const loanTerm = document.getElementById("cloanterm");
const monthlyPayment = document.getElementById("cmonthlypay");
const button = document.getElementById("calculate");
const interestRate = document.getElementById("inrate");
const monthlyPayA = document.getElementById("rmonthlypayA");
const monthlyPayD = document.getElementById("rmonthlypayD");
const totalInterestPaid = document.getElementById("inpaid");
const payMethod = document.getElementById("pMethod");

const checkPayMethod = () => {
	if(payMethod.value == `monthly`){
		return 12;
	} 
	else{
		return 1;
	}
}

const addInterestRate = (principal, timeYrs, monthlyPay) => {
	let n = 1; //compound factor
	let totalPaid = monthlyPay * checkPayMethod() * timeYrs;
	let rate = n * (((totalPaid/principal) ** (1/(n*timeYrs)))-1);
	return (rate*100).toFixed(3);
}


const showResultAfterClick = () => {
	interestRate.innerHTML= `${addInterestRate(loanAmount.value, loanTerm.value, monthlyPayment.value)}%`;
	monthlyPayA.innerHTML = `Total of ${ checkPayMethod() *loanTerm.value} ${ checkPayMethod()==12 ? 'Monthly':'Yearly' } Payment(s)`;
	monthlyPayD.innerHTML = `$${( checkPayMethod() *loanTerm.value*monthlyPayment.value).toFixed(2)}`;
	totalInterestPaid.innerHTML =`$${(( checkPayMethod() *loanTerm.value*monthlyPayment.value)-loanAmount.value).toFixed(2)}`;
}

button.addEventListener("click", showResultAfterClick);