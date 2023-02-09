let num = 14;
let count = 0;

for(let i = 0; i<=num; i++){
	if(num%i != 0){
		count++;
      }
}
if(count == 0){
	console.log("This is Prime");
}
else{
	console.log("this is Not Prime")
}