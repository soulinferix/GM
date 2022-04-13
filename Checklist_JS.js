// JavaScript Document
$("input[type=radio]").change(function () {
  let valueButton = $(":radio:checked").val();
  let totalChecked = $(":radio:checked").length;
  let totalAccept = $('input[value="Accept"]:radio:checked').length;
  let totalReject = $('input[value="Reject"]:radio:checked').length;
  $("#showAccept").text((totalAccept / totalChecked) * 100+"%");
  $("#showReject").text((totalReject / totalChecked) * 100+"%");
  // console.log(valueButton);
  // console.log(totalChecked);
  // console.log(totalAccept);
  // console.log(totalReject);
});

