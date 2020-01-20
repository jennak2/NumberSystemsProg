function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);
    var stringNum = SignedDecimalInt.toString();
    var t = SignedDecimalInt.toString().split('');
         var value = [];
         i = 0;
         if (t[0] == "-")
         {
           console.log(true);
           stringNum = stringNum.replace(/-/g,'');
           while (stringNum != 0)
           {
             value[i] = parseInt(stringNum) % parseInt(2);

             stringNum = parseInt(stringNum)/parseInt(2);
             i++;
           }
           value.pop();
           value.push("1");
           var f = "";
           for (i = value.length-1; i >= 0; i--)
           {
             var v = value[i].toString();
             final += v;
           }

           value = final;
         }
         else{
           while (t != 0)
           {
             value[i] = parseInt(t) % parseInt(2);
             t = parseInt(t)/parseInt(2);
             i++;
           }
           value.pop();
           value.push("0");
           //console.log (value);
           var final = "";
           for (i = value.length-1; i >= 0; i--)
           {
             var v = value[i].toString();
             final += v;
             //console.log (final);
           }
           value = final;
         }

         var outputValue = parseInt(value);

         compliment = "";
         for (i = 0; i <= value.length-1; i++)
         {
           if (value[i] == '0')
           {
           var c = 1;

           }
           else
           {
             var c = 0;

           }
           compliment += c;
         }

         var addC = compliment.split('');
         for (i = addC.length-1; i>= 0; i--)
         {
           if (addC[i] == '0')
           {
             addC [i] = "1";
             break;
           }
           else
           {
             i++;
           }
         }

         compliment = addC.join('');

         var outputValueTwosComplement = parseInt(compliment);

    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}
