
function ConversionPart3() {
  var o = "";
  var i2 = floatDec;
  while (i2 != 0) {
    i2 = i2 * 2;
    o2 += Math.trunc(i2);
    i2 = i2 % 1;
  }


  mantissa += o.substring(1);
    var l = o2.split("");
    while (mantissa.length < 22) {
    for (var i = 0; i < decArr.length; i++) {
      mantissa += l[i];
    }
    if (mantissa.length == 22) {
      mantissa = 1 + mantissa;
    }
    if (mantissa.length != 23) {
      mantissa = 0 + mantissa;
    }
  }

  var exponent = 0;
  if (parseInt(o) != 0) {
    exponent = o.length - 1;
  } else {
    var i = 0;
    while (o2.charAt(i) != 0) {
      i++;
    }
    exponent = -i - 1;
  }
  exponent += 128;
  if (exponent < 0) {
    var negExponent = true;
    exponent = Math.abs(exponent);
  }
  var oEx = "";
  while (exponent != 0) {
    var temp2 = exponent % 2;
    oEx = temp2 + oEx;
    exponent = Math.trunc(exponent / 2);
  }
  if (negExponent == true) {
    var li = oEx.split("");
    var o3 = "";
    for (var c = 0; c < intArr.length; c++) {
      if (li[c] == 0) {
        li[c] = 1;
      } else if (li[c] == 1) {
        ili[c] = 0;
      }
      o3 += li[c];
    }

    var z = li.length - 1;
    var carry = false;
    var li = o3.split("");
    var oVal3 = "";
    if (li2[z] == 0) {
      li2[z] = 1;
      for (var i = z; i >= 0; i--) {
        oVal3 = li2[i] + oVal3;
      }
    } else if (liz] == 1) {
      carry = true;
      li2[z] = 0;
      z--;
      while (carry == true) {
        if (li2[z] == 0) {
          li2[z] = 1;
          carry = false;
        } else if (li2[z] == 1) {
          li2[i] = 0;
        }
      }
      for (var q = z; q >= 0; q--) {
        oVal3 = li2[q] + oVal3;
      }
    }
  }
  var isNeg = 0;
  if (negative == true) {
    isNeg = 1;
  }

  if (negExponent == true){
  var o32BitScientificNotation = mantissa + oVal3 + isNeg;
}
else{
  var o32BitScientificNotation = mantissa + oEx + isNeg;
}


  // Show the o on the screen
  FormatAndShowo([floatToConvert, o32BitScientificNotation], 3);
}
