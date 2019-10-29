$(document).ready(function(){

  $("form#counterForm").submit(function(event) {
    event.preventDefault();

    var compCountTo = parseInt($("#countTo").val());
    var compCountBy = parseInt($("#countBy").val());
    var finishedNumbers = [];
    for(var countingNumbers = 0; countingNumbers < compCountTo; countingNumbers += compCountBy) {
        finishedNumbers.push(countingNumbers);
      }
      $('#final-numbers').text(finishedNumbers);
});
});
