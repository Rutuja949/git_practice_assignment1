let num = 121;
let temp = num;
let a = 0;
let rev = 0;

while(num<0){
	a = a%10;
	rev = (rev*10) +a;
	temp = temp/10;
}

if(temp == rev){
	console.log("Palindrome")
}
else{
 	console.log("Not Palindrome")
}