document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      btn.textContent = "ส่งข้อความเรียบร้อยแล้ว ✓";
      form.reset();
      setTimeout(function () {
        btn.textContent = "ส่งข้อความ";
      }, 3000);
    });
  }
});
