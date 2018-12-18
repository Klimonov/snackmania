$(document).ready(function () {

  // ---------------------Menu scroll to the elements
  $('.scroll-to-element').click(function () {
    const scrollElement = $(this).attr('href');
    if ($(scrollElement).length != 0) {
      $('.navbar-collapse').removeClass('show');
      $('html, body').animate({
        scrollTop: $(scrollElement).position().top
      }, 500);
    } else if ($(this).attr('id') == ('closeMenu')) {
      $('.navbar-collapse').removeClass('show');
    }
    return false;
  });


  // ---------------------Full page scroll
  //$('#fullpage').fullpage();

  // ---------------------Carousel
  $('.carousel-snek').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.carousel-snek-mobile').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // --------------------- Parallax effect block 3

  const paralax = document.getElementById("paralax");

  const positionPar1 = parseInt($('#par1').css('top'));
  const positionPar2 = parseInt($('#par2').css('top'));
  const positionPar3 = parseInt($('#par3').css('top'));
  const positionPar4 = parseInt($('#par4').css('top'));
  const positionPar5 = parseInt($('#par5').css('top'));


  window.addEventListener("scroll", scroll);
  window.addEventListener("resize", scroll);
  scroll();

  function scroll() {
    const positionInformation = paralax.getBoundingClientRect();

    const move = positionInformation.y;

    $('#par1').css('top', 100 + move * 0.4 + 'px');
    $('#par2').css('top', 500 + move * 0.2 + 'px');
    $('#par3').css('top', 60 + move * 0.3 + 'px');
    $('#par4').css('top', 600 + move * 0.6 + 'px');
    $('#par5').css('top', 600 + move * 0.3 + 'px');

  }
  // --------------------- desible map auto scroll
  $('.row-map').click(function () {
    $('.row-map iframe').css("pointer-events", "auto");
  });

  $(".row-map").mouseleave(function () {
    $('.row-map iframe').css("pointer-events", "none");
  });
  
  // --------------------- send message footer form
  $("#contactFormFooter").submit(function(event){
    event.preventDefault(); // cancels the form submission
    submitFormFooter();
  });
    
  function submitFormFooter(){
    // Initiate Variables With Form Content
    var name = $("#exampleInputName1").val();
    var phone = $("#exampleInputPhone1").val();
    var message = $("#exampleFormControlTextarea1").val();
 
    $.ajax({
        type: "POST",
        url: "../php/form-process.php",
        data: "name=" + name + "&phone=" + phone + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccessFooter();
            }
        }
    });
  }
  
  function formSuccessFooter(){
	$( "#msgSubmit" ).addClass('show');
  	$("#contactFormFooter")[0].reset();
  }
 
  $('.close').click(function () {
    $( "#msgSubmit" ).removeClass('show');  
  });
  
 // --------------------- send message popup form
   $("#contactFormModal").submit(function(event){
    event.preventDefault(); // cancels the form submission
    submitFormModal();
  });
  
  function submitFormModal(){
    // Initiate Variables With Form Content
    var email = $("#exampleInputEmail2").val();
    var name = $("#exampleInputName2").val();
    var message = $("#exampleFormControlTextarea2").val();

 
    $.ajax({
        type: "POST",
        url: "../php/form-process.php",
        data: "email=" + email + "&name=" + name + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccessModal();
            }
        }
    });
  }
  
  function formSuccessModal(){
    $("#contactFormModal")[0].reset();
    $('.modal').modal('hide');
  }


});


