function palindrome(message){
  var temp="";
  for(var i=1; i<message.length+1; i++){
    temp = temp + message[message.length-i];
  }
  if(message == temp)
    console.log(true);
  else
    console.log(false);
}
palindrome('hello');
palindrome('abcba');
