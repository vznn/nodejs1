// user
var user_Boolean = false;
var password_Boolean = false;
var varconfirm_Boolean = false;
var emaile_Boolean = false;
var Mobile_Boolean = false;
$('.reg_user').blur(function () {
  if ((/^[a-z0-9_-]{4,8}$/).test($(".reg_user").val())) {
    $('.user_hint').html("✔").css("color", "green");
    user_Boolean = true;
  } else {
    $('.user_hint').html("×").css("color", "red");
    user_Boolean = false;
  }
});
// password
$('.reg_password').blur(function () {
  if ((/^[a-z0-9_-]{6,16}$/).test($(".reg_password").val())) {
    $('.password_hint').html("✔").css("color", "green");
    password_Boolean = true;
  } else {
    $('.password_hint').html("×").css("color", "red");
    password_Boolean = false;
  }
});


// password_confirm
$('.reg_confirm').blur(function () {
  if (($(".reg_password").val()) == ($(".reg_confirm").val())) {
    $('.confirm_hint').html("✔").css("color", "green");
    varconfirm_Boolean = true;
  } else {
    $('.confirm_hint').html("×").css("color", "red");
    varconfirm_Boolean = false;
  }
});


// Email
$('.reg_email').blur(function () {
  if ((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($(".reg_email").val())) {
    $('.email_hint').html("✔").css("color", "green");
    emaile_Boolean = true;
  } else {
    $('.email_hint').html("×").css("color", "red");
    emaile_Boolean = false;
  }
});


// Mobile
$('.reg_mobile').blur(function () {
  if ((/^1[34578]\d{9}$/).test($(".reg_mobile").val())) {
    $('.mobile_hint').html("✔").css("color", "green");
    Mobile_Boolean = true;
  } else {
    $('.mobile_hint').html("×").css("color", "red");
    Mobile_Boolean = false;
  }
});


// click
$('.red_button').click(function () {
  if (user_Boolean && password_Boolean && varconfirm_Boolean && emaile_Boolean && Mobile_Boolean == true) {
    alert(user_Boolean + password_Boolean + varconfirm_Boolean + emaile_Boolean + Mobile_Boolean + "注册成功");
    // $.post("http://127.0.0.1:3000/api/reg",
    // {
    //   user1:$(".user").val(),
    //   password:$(".reg_password").val(),
    //   email:$(".reg_email").val(),
    //   mobile:$(".reg_mobile").val()
    // },
    // function(data,status){
    //   alert("Data: " + data + "\nStatus: " + status);
    // });

    $.get("http://127.0.0.1:3000/api/reg", {
      user: $(".reg_user").val(),
      password: $(".reg_password").val(),
      email: $(".reg_email").val(),
      mobile: $(".reg_mobile").val(),
      create_time: dateFtt("yyyy-MM-dd hh:mm:ss",new Date()),
      remark: "aaaaa"
    },

      function (data, textStatus, fn) {
        if (textStatus == "success") {
          $(data).appendTo("#msg")
        }
      },
      "html"
    );


  } else {
    alert("请完善信息");
  }
});


function dateFtt(fmt, date) { //author: meizz 
  var o = {
    "M+": date.getMonth() + 1,     //月份 
    "d+": date.getDate(),     //日 
    "h+": date.getHours(),     //小时 
    "m+": date.getMinutes(),     //分 
    "s+": date.getSeconds(),     //秒 
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
    "S": date.getMilliseconds()    //毫秒 
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}