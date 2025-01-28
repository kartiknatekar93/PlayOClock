let contact_name = null;
let contact_mobile = null;
let contact_email = null;
let contact_message = null;
let isValid = false;
// import Global from "./global";

function activateEnquiry(contactFrom) {
  document.querySelector("#btn_subscribe").addEventListener("click", () => {
    contact_name = String(document.getElementById("name").value);
    contact_mobile = String(document.getElementById("mobile").value);
    contact_email = String(document.getElementById("email").value);
    contact_message = String(document.getElementById("message").value);

    isValid = true;

    // $("input#contact_name").removeClass("error");
    // $("input#contact_email").removeClass("error");
    // $("input#contact_company").removeClass("error");
    // $("input#contact_mobile").removeClass("error");

    if (contact_name.length <= 0) {
      //   $("input#contact_name").addClass("error");
      isValid = false;
    }
    if (contact_company.length <= 0) {
      //   $("input#contact_company").addClass("error");
      isValid = false;
    }
    if (contact_email.length <= 0) {
      //   $("input#contact_email").addClass("error");
      isValid = false;
    }
    var re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var m = re.test(contact_email);
    if (!m) {
      //   $("input#contact_email").addClass("error");
      isValid = false;
    }

    if (contact_mobile.length <= 0 || isNaN(contact_mobile)) {
      //   $("input#contact_mobile").addClass("error");
      isValid = false;
    }

    if (!isValid) {
      return false;
    } else {
      //   Global.enquirySubmitted = true;
    }

    var data = $("#enquiry_form").serializeArray();
    data.push({ name: "contact_from", value: contactFrom });
    $.post("page.php", data);
    $.ajax({
      url: "https://www.alivenow.in/getintouch_v2.php",
      type: "POST",
      data: data,
      success: function (result) {
        console.log(result);
      },
    });
    // $(".user_data_sec").css("overflow", "hidden");
    // $(".enquiry_sec #btn_subscribe").removeClass("active");
    // $(".enquiry_sec .sec1").removeClass("active");
    // $(
    //   ".user_data_sec .field1, .user_data_sec .field2, .user_data_sec .field3, .user_data_sec .field4"
    // ).removeClass("active");
    // setTimeout(function () {
    //   setTimeout(function () {
    //     $(".thank-sec .row span").addClass("active");
    //   }, 0);
    // }, 650);
  });
}

export { activateEnquiry };
