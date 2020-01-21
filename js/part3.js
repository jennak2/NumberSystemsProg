
function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);

  var numA = (floatToConvert + "").split(".");

  integer = numA[0];

  var positive = "";
  //console.log (n[0].toString().charAt(0))
  if (numA[0].toString().charAt(0) == '-')
  {
    positive += 1;
    integer = Math.abs(integer);
  }
  else{
    positive += 0;
  }

  t = integer;
   var value = [];
   i = 0;
   while (t != 0)
   {
     value[i] = parseInt(t) % parseInt(2);

     t = parseInt(t)/parseInt(2);
     i++;
   }

   var final = "";
    for (i = value.length-2; i >= 0; i--)
    {
      var v = value[i].toString();

      final += v;
      fInt = final;

      d = "";

      bD = "";
   if (numA[1] == null)
   {

     bD= "";
   }
   else {
     var d = numA[1].toString();
     d = "." + d;
     parseFloat(d);
     //console.log(d);
     i = 0;

     while (d != 0 || fInt.toString().length + i <= 23)
     {
       d = d * 2;
       if(d >= 1)
       {
         bD += '1';
       }
       else {
         bD += '0';
       }
       var d = (d + "").split(".");
       if (d[1] == null)
       {
         break;
       }
       //console.log(d);
       d = "";
       d = d[1].toString();
       d = "." + d;
       parseFloat(d);
       i++;
       //console.log(i);
       //console.log(fInt.toString().length + i)
       if (fInt.toString().length + i >= 23)
       {
         break;
       }
     }
     //console.log(bd);
   }
 var mantissa = fInt.toString() + bD;
 console.log (mantissa);


 //console.log (mantissa.length);
 //console.log ("test");
 //console.log (mantissa.length-1);
 expNum = mantissa.length - 1 + 128;

 mantissa = mantissa.replace(1, '');
 //console.log(expNum);


 t = expNum;
 var value = [];
 i = 0;
 while (t != 0)
 {
   value[i] = parseInt(t) % parseInt(2);
   ////console.log (value);
   t = parseInt(t)/parseInt(2);
   i++;
 }
 ////console.log (value);
 var final = "";
 for (i = value.length-2; i >= 0; i--)
 {
   ////console.log(final);
   var v = value[i].toString();
   ////console.log(v);
   final += v;
   ////console.log (final);
   expNum = final;
 }
 //console.log (expNum);



 //console.log(sign);
 //console.log(mantissa.length);
 if (mantissa.length < 23)
 {
   while (mantissa.length < 23)
   {
     mantissa += "0";
   }

 }
//console.log(mantissa.length);
var final = "";
//console.log (expNum.length);
final = mantissa + expNum + positive;
var o32BitScientificNotation = final;

  // Show the o on the screen
  FormatAndShowOutput([floatToConvert, o32BitScientificNotation], 3);
}
}
