//javascript program to find if a no is armstrong 

const prompt=require("prompt-sync")();
let num=parseInt(prompt("Enter a number: "));

let org_no=num,res=0;

while(num>0)
{
	let digit=num%10;
	res=res+digit*digit*digit;
	num=parseInt(num/10)
}

if(org_no==res)
	console.log("Number ",org_no," is an armstrong number")
else
	console.log("Number ",org_no," is not an armstrong number")