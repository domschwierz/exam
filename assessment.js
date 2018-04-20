
function isPrime(number){
	
	let val = document.getElementById("userinpprime").value;
	let num2 = (val%2);
	let num3 = (val%3);
	let num4 = (val%4);
	let num5 = (val%5);
	let num6 = (val%6);
	let num7 = (val%7);
	let num8 = (val%8);
	let num9 = (val%9);
	let num10 = (val%10);

	
	if(val==1){
		console.log("Numbers can start from 2");
	}
	
	if(val<1){
		console.log("Numbers can start from 2");
	}
	
	if(val==2){
		if(num3!==0 && num4!==0 && num5!==0 && num6!==0 && num7!==0 && num8!==0 && num9!==0 && num10!==0){
			console.log("Prime");
		}
		else {
			console.log("Not Prime");
		}
	}
	
	if(val==3){
		if(num2!==0 && num4!==0 && num5!==0 && num6!==0 && num7!==0 && num8!==0 && num9!==0 && num10!==0){
			console.log("Prime");
		}
		else {
			console.log("Not Prime");
		}
	}
	
	if(val==4){
		if(num2!==0 && num3!==0 && num5!==0 && num6!==0 && num7!==0 && num8!==0 && num9!==0 && num10!==0){
			console.log("Prime");
		}
		else {
			console.log("Not Prime");
		}
	}
	
	if(val==5){
		if(num2!==0 && num3!==0 && num4!==0 && num6!==0 && num7!==0 && num8!==0 && num9!==0 && num10!==0){
			console.log("Prime");
		}
		else {
			console.log("Not Prime");
		}
	}
	
	if(val==6){
		if(num2!==0 && num3!==0 && num4!==0 && num5!==0 && num7!==0 && num8!==0 && num9!==0 && num10!==0){
			console.log("Prime");
		}
		else {
			console.log("Not Prime");
		}
	}
	
	if(val==7){
		if(num2!==0 && num3!==0 && num4!==0 && num5!==0 && num6!==0 && num8!==0 && num9!==0 && num10!==0){
			console.log("Prime");
		}
		else {
			console.log("Not Prime");
		}
	}
	
	if(val==8){
		if(num2!==0 && num3!==0 && num4!==0 && num5!==0 && num6!==0 && num7!==0 && num9!==0 && num10!==0){
			console.log("Prime");
		}
		else {
			console.log("Not Prime");
		}
	}
	
	if(val==9){
		if(num2!==0 && num3!==0 && num4!==0 && num5!==0 && num6!==0 && num7!==0 && num8!==0 && num10!==0){
			console.log("Prime");
		}
		else {
			console.log("Not Prime");
		}
	}
	
	if(val==10){
		if(num2!==0 && num3!==0 && num4!==0 && num5!==0 && num6!==0 && num7!==0 && num8!==0 && num9!==0){
			console.log("Prime");
		}
		else {
			console.log("Not Prime");
		}
	}
	
	if(val>10){
		if(num2!==0 && num3!==0 && num4!==0 && num5!==0 && num6!==0 && num7!==0 && num8!==0 && num9!==0 && num10!==0){
			console.log("Prime");
		}
		else {
			console.log("Not Prime");
		}
	}
}
  

function amountToCoins(){
	
	let val = document.getElementById("userinpcoin").value;
	let val2 = (val%25);
	let coin25 = ((val-val2)/25);
	let val3 = (val2%10);
	let coin10 = ((val2-val3)/10);
	let val4 = (val3%5);
	let coin5 = ((val3-val4)/5);
	let val5 = (val4%2);
	let coin2 = ((val4-val5)/2);
	let val6 = (val5%1);
	let coin1 = ((val5-val6)/1);
	
	if(val>0){
		console.log("You will need:")
		if(coin25>0){
		console.log(coin25 + " x 25p Coins");
		}
		if(coin10>0){
		console.log(coin10 + " x 10p Coins");
		}
		if(coin5>0){
		console.log(coin5 + " x 5p Coins");
		}
		if(coin2>0){
		console.log(coin2 + " x 2p Coins");
		}
		if(coin1>0){
		console.log(coin1 + " x 1p Coins");
		}
	}
	else{
		console.log("Enter a Valid number");
	}
}

function uniqueLetters(string){

}

function factorial(){
	
	let intval = document.getElementById("factinp").value;
	let val = parseInt(intval);
	let result=1;
	let val3=0;
	
	if(val>0){
		for(let i=1; i<=val; i++){
			val3=result*i;
			result=val3;
		}
		console.log("Your Result is: " + val3);
		}
	else{
		console.log("Please enter number higher than 0");
	}

}

function fibonacci(){
	
	let intval = document.getElementById("userinpfib").value;
	let val = parseInt(intval);
	let val1 = 1;
	let val2 = val;
	let val3 = 0;
	
	if(val>=1){
		for(let i=0; i<=10; i++){
			val3 = val1+val2;
			val1 = val2;
			val2 = val3;
			console.log(val3);
		}
	}
	else{
		console.log("Please enter number higher than 0");
	}
}