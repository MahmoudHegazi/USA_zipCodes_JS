<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p id="demo"></p>


<input type="number" id="start">
<input type="number" id="end">

<button onclick="get_zip()">click</button>
<script>

const starts_with = [30301,96801,60601,46201,52801,67201,70112,04032,21201,02101,50301,52801,62701,49734,55801,39530,63101,89501,87500,10001,44101,74101,97201,15201,02840,57401,37201,78701,84321,98004,53201]
const end_with =  [30381,96830,60641,46209,52809,67221,70119,04034,21237,02137,50323,52809,62709,49735,55808,39535,63141,89513,87506,10048,44179,74110,97225,15244,02841,57402,37222,78705,84323,98009,53228]

function get_zip() {
const myresult = []
let result = document.getElementById("demo");
let start = document.getElementById("start");
let end = document.getElementById("end");

for (side = 0; side < starts_with.length; side++) {

for (i=starts_with[side]; i <= end_with[side]; i++){
  // this step to handle the start with 0 zip code it still id not integer
  if (toString(end_with[side]).startsWith('0')) {
  
   if (i == toString(starts_with[side])) {
   myresult.push(i);
   }else {
   myresult.push('0' + i);
   }
  } else {
   myresult.push(i);
  }
  
}
result.innerText += myresult;
}



}
</script>
</body>
</html>
