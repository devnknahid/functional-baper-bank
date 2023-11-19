function getInputFiledValueById(inputFieldId) {
   const inputFiled = document.getElementById(inputFieldId);
   const inputFiledvalueString = inputFiled.value;
   const inputFiledvalue = parseFloat(inputFiledvalueString);
   inputFiled.value = '';
   return inputFiledvalue;
}


function getTextElementValueById(elementId) {
   const textElement = document.getElementById(elementId);
   const textElementValueString = textElement.innerText;
   const textElementValue = parseFloat(textElementValueString);
   return textElementValue;

}

function setTextElementValueById(elementId, newValue) {

   const textElement = document.getElementById(elementId);
   textElement.innerText = newValue;
}