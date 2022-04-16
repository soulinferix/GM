// JavaScript Document
$("input[type=radio]").change(function () {
  let valueButton = $(":radio:checked").val();
  let totalChecked = $(":radio:checked").length;
  let totalAccept = $('input[value="Accept"]:radio:checked').length;
  let totalReject = $('input[value="Reject"]:radio:checked').length;
  $("#showAccept").text((totalAccept));
  $("#showReject").text((totalReject));
  $("#showPercent").text(((totalAccept * 100) / totalChecked).toFixed(2)+"%");
  
  // console.log(valueButton);
  // console.log(totalChecked);
  // console.log(totalAccept);
  // console.log(totalReject);
  //console.log(rounded)
});



$("input[type=radio]").change(function () {
  let valueButton = $(":radio:checked").val();
  let totalChecked = $(":radio:checked").length;
  let totalAccept2 = $('input[value="Accept2"]:radio:checked').length;
  let totalReject2 = $('input[value="Reject2"]:radio:checked').length;
  $("#showAccept2").text((totalAccept2));
  $("#showReject2").text((totalReject2));
  $("#showPercent2").text(((totalAccept2 * 100) / totalChecked).toFixed(2)+"%");
  
  // console.log(valueButton);
  // console.log(totalChecked);
  // console.log(totalAccept);
  // console.log(totalReject);
  //console.log(rounded)
});


$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 1) {
        $(this).prop('checked', false);
        alert("Selecciona solo una circunstancia");
    }
});

