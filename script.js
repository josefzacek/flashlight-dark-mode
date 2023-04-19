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


function checkDevice() {
  let hasHover = matchMedia('(hover:hover)').matches;
  let isHandheld = window.matchMedia("only screen and (max-width: 768px)").matches;

  if (hasHover == false || isHandheld) {
    $(".circle.rounded-circle, .container.desktop-view").addClass("d-none");
    $(".container.mobile-view").removeClass("d-none");
  } else {
    $(".circle.rounded-circle, .container.desktop-view").removeClass("d-none");
    $(".container.mobile-view").addClass("d-none");
  }
};

$(window).resize(function() {
  clearTimeout(window.resizedFinished);
  window.resizedFinished = setTimeout(function(){
    checkDevice()
  }, 250);
});

checkDevice();
