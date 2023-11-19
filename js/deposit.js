document.getElementById('deposit_btn').addEventListener('click', function () {

   // deposit_field
   const newDepositAmount = getInputFiledValueById('deposit_field');
   if (isNaN(newDepositAmount)) {
      alert('boro vai ami nai');
      return;
   }
   // deposit_number
   const previousDepositTotal = getTextElementValueById('deposit_number');
   const newDeposit = previousDepositTotal + newDepositAmount;
   setTextElementValueById('deposit_number', newDeposit);


   // blance
   const previousTotalBlance = getTextElementValueById('blance_number');
   const newTotalBlance = previousTotalBlance + newDepositAmount;
   setTextElementValueById('blance_number', newTotalBlance);

});