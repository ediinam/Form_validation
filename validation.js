//Regex za ime (nasa slova)
function validateName(inputID) {
  var element = document.getElementById(inputID);
  var input = element.value.trim();
  input2 = input.replace(/\s{1,}/g, " ");
  result = input2.replace(/[^A-Za-zšŠđĐčČćĆžŽ \-]/g, "");
  element.value = result;
}

//Vraca true/false

function checkName(inputID) {
  var element = document.getElementById(inputID);
  var input = element.value.trim();
  let regex = /^[A-Za-zšŠđĐčČćĆžŽ \-]{2,}$/i;
  if (regex.test(input)) {
    //console.log("true");
    return true;
  } else {
    //console.log("false");
    return false;
  }
}

//Regex za email
function checkEmail(inputID) {
  var element = document.getElementById(inputID);
  var input = element.value.trim();
  let regex = /^[a-z0-9]+([-._]?[a-z0-9]+)?@[a-z0-9]+(-?[a-z0-9]+)?\.[a-z]{2,}$/i;
  //[[a-zA-Z0-9]+[[\-\.\_]{0,1}[a-zA-Z0-9]+]{0,1}]@[[a-z]+[\-{0,1}[a-z]+]{0,1}].[a-z]{2,}
  if (regex.test(input)) {
    //console.log("true");
    return true;
  } else {
    //console.log("false");
    return false;
  }
}
