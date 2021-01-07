function myFunction() {
    var loan = $('#amount').val(),
        month = $('#months').val(),
        int = $('#interest').val(),
        years = $('#years').val(),
        down = $('#down').val(),
        amount = parseInt(loan),
        months = parseInt(month),
        down = parseInt(down),
        annInterest = parseFloat(int),
        monInt = annInterest / 1200,
        calculation = ((monInt + (monInt / (Math.pow((1 + monInt), months) -1))) * (amount - (down || 0))).toFixed(2);
  
    document.getElementById("output").innerHTML = calculation;
}

$(document).ready(function() {
    // Get click event, assign button to var, and get values from that var
    $('#aBtnGroup button').on('click', function() {
    var thisBtn = $(this);
    thisBtn.addClass('active').siblings().removeClass('active');
    var btnText = thisBtn.text();
    var btnValue = thisBtn.val();
    console.log(btnText + ' - ' + btnValue);
    $('#selectedVal').val(btnValue);
    });
    // You can use this to set default value
    // It will fire above click event which will do the updates for you
    $('#aBtnGroup button[value="M"]').click();
    });

$(function(){
	var month = $(this).val(),
      doneTypingInterval = 500,
      months = parseInt(month),
      typingTimer;

  $('#months').keyup(function(){
      month = $(this).val();
      months = parseInt(month);
  
      clearTimeout(typingTimer);
      if (month) {
          typingTimer = setTimeout(doneTyping, doneTypingInterval);
      }
  });

  function doneTyping () {
    $('#years').val(months/12);  
  }
})

$(function(){
	var month = $(this).val(),
      doneTypingInterval = 500,
      months = parseInt(month),
      typingTimer;

  $('#months').keyup(function(){
      month = $(this).val();
      months = parseInt(month);
  
      clearTimeout(typingTimer);
      if (month) {
          typingTimer = setTimeout(doneTyping, doneTypingInterval);
      }
  });

  function doneTyping () {
    $('#years').val(months/12);  
  }
})

$(function(){
	var year = $(this).val(),
      doneTypingInterval = 500,
      years = parseInt(year),
      typingTimer;

  $('#years').keyup(function(){
      year = $(this).val();
      myears = parseInt(year);
  
      clearTimeout(typingTimer);
      if (year) {
          typingTimer = setTimeout(doneTyping, doneTypingInterval);
      }
  });

  function doneTyping () {
    $('#months').val(year * 12);  
  }
})

function calc(event){
    event.preventDefault();
    console.log($('#selectedVal').val());
    let amount=document.getElementById('amount').value;
    let rate = $('#selectedVal').val();
    let time = document.getElementById('months').value;
    let down = document.getElementById('down').value;
    amount = Number(amount.replace(/[^0-9.-]+/g, ""));
    amount = amount - down;
    let data =({amount: amount, rate: rate, time: time, down: down});  
    console.log(data, down);
    let total_int = ((rate / 100) * amount) * time;
    console.log(total_int);
    let monthly_int = (amount + total_int) / (time)
    console.log(monthly_int);
    let output = document.getElementById('output');
    output.innerHTML = monthly_int.toFixed(2);

}


//amount - down
//total-int = int-rate / 100 * amount * time
//monthly-inst = (ammount + total-int) / (time * 12)