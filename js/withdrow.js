document.getElementById('withdrow_btn').addEventListener('click', function () {
   const newWithdrowAmount = getInputFiledValueById('withdrow_field');
   if (isNaN(newWithdrowAmount)) {
      alert('boro vai ami nai');
      return;
   }
   const previouswithdrowAmount = getTextElementValueById('withdrow_number');
   const withdrowTotal = previouswithdrowAmount + newWithdrowAmount;
   setTextElementValueById('withdrow_number', withdrowTotal);
   const previousTotalBlance = getTextElementValueById('blance_number');
   const newTotalBlance = previousTotalBlance - newWithdrowAmount;
   setTextElementValueById('blance_number', newTotalBlance);
})