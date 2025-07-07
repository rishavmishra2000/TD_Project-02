isNumberKey = (evt) => {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (
    charCode == 8 ||
    (charCode >= 37 && charCode <= 40) ||
    (charCode >= 48 && charCode <= 57)
  ) {
    return true;
  }
  return false;
};

removeNonNumeric = (evt) => {
  var input = document.getElementById("numberInput");
  input.value = input.value.replace(/[^0-9]/g, "");
};

emailValidator = () => {
  var email = $("#email").val();
  var regex = /^[a-zA-Z0-9]+([._-][a-zA-Z]+)*@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

passwordValidator = (password) => {
  var passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*?])[A-Za-z\d@*?]{10,}$/;
  return passwordRegex.test(password);
};

$("#visible").attr("value", "Show");

$("#visible").click(() => {
  if ($("#password,#cnf-password").hasClass("hide")) {
    $("#password,#cnf-password").removeClass("hide").addClass("show");
    $("#password,#cnf-password").attr("type", "text");
    $("#visible").attr("value", "Hide");
  } else if ($("#password,#cnf-password").hasClass("show")) {
    $("#password,#cnf-password").removeClass("show").addClass("hide");
    $("#password,#cnf-password").attr("type", "password");
    $("#visible").attr("value", "Show");
  }
});

$("#submit").click(() => {
  var error_message = "";
  var success_message = "";

  var password = $("#password").val();
  var cnf_password = $("#cnf-password").val();

  if (!emailValidator()) {
    error_message += "Enter valid email address.";
  } else if (!/^[0-9]{10}$/.test($("#mobno").val())) {
    error_message += "Mobile number must be of 10 digit.";
    $("#error_message").html(error_message);
  } else if (password == "" && cnf_password == "") {
    error_message += "Please enter password.";
  } else if (password.length < 10 || cnf_password.length < 10) {
    error_message += "Password & Confirm password length must be more than 10.";
  } else if (passwordValidator(password)) {
    if (password == cnf_password) {
      success_message += "User Registered Successfully.";
    } else {
      error_message += "password and confirm password doesn't matched.";
    }
  } else {
    error_message +=
      "Password atleast contain one lowercase, one uppercase, one number and one special character (@,*,?).";
  }

  if (error_message != "") {
    $("#error_message").css("display", "block");
    $("#error_message").css("color", "red");
    $("#success_message").css("display", "none");
    $("#error_message").html(error_message);
  }

  if (success_message != "") {
    $("#success_message").css("display", "block");
    $("#success_message").css("color", "green");
    $("#error_message").css("display", "none");
    $("#success_message").html(success_message);
  }
});
