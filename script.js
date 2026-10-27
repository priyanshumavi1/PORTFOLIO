var EMAIL = "priyanshumavi5@gmail.com";
document.getElementById("mail").textContent = EMAIL;
document.getElementById("mail").href = "mailto:" + EMAIL;
document.getElementById("send").addEventListener("click", function () {
  var m = document.getElementById("msg").value.trim();
  if (!m) { document.getElementById("msg").focus(); return; }
  window.open("mailto:" + EMAIL + "?subject=" + encodeURIComponent("Message from your portfolio") + "&body=" + encodeURIComponent(m), "_blank");
});
