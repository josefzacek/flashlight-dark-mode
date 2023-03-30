var rootElement = document.documentElement;

rootElement.addEventListener("mousemove", function(e) {
  rootElement.style.setProperty('--x',  e.clientX + "px");
  rootElement.style.setProperty('--y',  e.clientY + "px");
})

function switchMode(text){
  var isChecked = $(".switch-row input").is(':checked');

  if (text == "White mode" & isChecked == true) {
    $(".switch-row input").click();
  }

  if (text == "Flashlight mode" & isChecked == false) {
    $(".switch-row input").click();
  }
}

$(".switch-row input").on('change', function() {
  if($(this).is(':checked') == true ){
    $("body").addClass("dark-mode text-white")
  } else {
    $("body").removeClass("dark-mode text-white")
  }
});

$(".switch-row span").on('click', function() {
  switchMode($(this).text());
});
