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


function get_zip() {
const myresult = []
let result = document.getElementById("demo");
let start = document.getElementById("start");
let end = document.getElementById("end");

for (i=start.value; i <= end.value; i++){
  // this step to handle the start with 0 zip code it still id not integer
  if (end.value.startsWith('0')) {
  
   if (i == start.value) {
   myresult.push(i);
   }else {
   myresult.push('0' + i);
   }
  } else {
   myresult.push(i);
  }
  
}

result.innerText = myresult;

}
</script>
</body>
</html>
