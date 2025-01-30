import { globalState } from "./global";
let contact_name = null;
let contact_mobile = null;
let contact_email = null;
let message = null;
function activateEnquiry(contactFrom) {
  document.querySelector("#btn_subscribe").addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    let isValid = true;
    contact_name = document.getElementById("name");
    contact_mobile = document.getElementById("mobile");
    contact_email = document.getElementById("email");
    message = document.getElementById("message");
    document.querySelectorAll(".warning-box").forEach((box) => box.remove());
    document.querySelector(".thankyou")?.remove();
    if (
      contact_email.value.trim() === "" ||
      !/\S+@\S+\.\S+/.test(contact_email.value)
    ) {
      addWarningBox(contact_email, "Enter Valid Email");
      addShakeEffect(contact_email);
      isValid = false;
    }
    if (
      contact_mobile.value.trim() === "" ||
      !/^\d{10}$/.test(contact_mobile.value)
    ) {
      addWarningBox(contact_mobile, "Enter Valid Mobile Number");
      addShakeEffect(contact_mobile);
      isValid = false;
    }
    if (contact_name.value.trim() === "") {
      addWarningBox(contact_name, "Enter Name");
      addShakeEffect(contact_name);
      isValid = false;
    }
    if (
      contact_name.value.trim() === "" &&
      contact_mobile.value.trim() === "" &&
      contact_email.value.trim() === ""
    ) {
      addWarningBox(contact_name, "Enter Name ");
      addShakeEffect(contact_name);
      isValid = false;
    }
    if (!isValid || globalState.enquirysubmitted) {
      return false;
    } else {
      globalState.enquirysubmitted = true;
    }
    var data = $("#enquiry_form").serializeArray();
    data.push({ name: "contact_from", value: contactFrom });
    $.ajax({
      url: "https://www.alivenow.in/getintouch_v3.php",
      type: "POST",
      data: data,
      success: function (result) {},
    });
    // $(".user_data_sec").css("overflow", "hidden");
    // $(".enquiry_sec #btn_subscribe").removeClass("active");
    // $(".enquiry_sec .sec1").removeClass("active");
    // $(
    //   ".user_data_sec .field1, .user_data_sec .field2, .user_data_sec .field3, .user_data_sec .field4"
    // ).removeClass("active");
    setTimeout(function () {
      setTimeout(function () {
        var newDiv = $(
          "<h1>Submitted successfully! We&rsquo;ll get back to you soon. </h1>"
        ).addClass("thankyou");
        $("#thanku").after(newDiv);
        contact_name.value = "";
        contact_mobile.value = "";
        contact_email.value = "";
        message.value = "";
      }, 0);
    }, 650);
  });
}
function addWarningBox(target, message) {
  document.querySelectorAll(".warning-box").forEach((box) => box.remove());
  const element = document.createElement("div");
  element.classList.add("warning-box");
  element.textContent = message;
  target.parentElement.style.position = "relative";
  target.parentElement.appendChild(element);

  setTimeout(() => {
    element.classList.add("show");
  }, 10);

  target.addEventListener("focus", function () {
    element.remove();
  });
  return false;
}

function addShakeEffect(inputElement) {
  inputElement.classList.add("input-shake");

  inputElement.addEventListener("animationend", function () {
    inputElement.classList.remove("input-shake");
  });
}
export { activateEnquiry };
