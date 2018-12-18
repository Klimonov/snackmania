// ---------------------Tabs on product page
const tab = $('.tab');
const tabContent = $('.tabContent');

const hideTabsContent = a => {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
    tab[i].classList.remove('selected');
  }
}


$('#tabs').click(function (event) {
  const target = event.target;
  if (target.className == 'tab') {
    $('.sneks').css("height", "200px");
    $('.show-all-snaks').css("display", "block");
    for (let i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
});

const showTabsContent = b => {
  if (tabContent[b].classList.contains('hide')) {
    hideTabsContent(0);
    tab[b].classList.add('selected');
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');

    $('#selectedBlockText').text($('.selected').text());
    $('.photo-and-description')[b].classList.add('animated');
    $('.photo-and-description')[b].classList.add('fadeInDown');
    $('.advantages')[b].classList.add('animated');
    $('.advantages')[b].classList.add('fadeInUp');
    $('.sneks')[b].classList.add('animated');
    $('.sneks')[b].classList.add('fadeInUp');
  }
}



// --------------------- Change the active tab depending on the url

const urlDetect = location.href;
const lastNumberOfUrl = urlDetect[urlDetect.length - 1];


const detectUrlandChangeTabs = (ulrNumber, counter) => {
  if (ulrNumber > tab.length - 1 || isNaN(ulrNumber)) {
    hideTabsContent(0);
    tab[0].classList.add('selected');
    tabContent[0].classList.remove('hide');
    tabContent[0].classList.add('show');
  } else if (counter == Number(ulrNumber)) {
    hideTabsContent(0);
    tab[ulrNumber].classList.add('selected');
    tabContent[ulrNumber].classList.remove('hide');
    tabContent[ulrNumber].classList.add('show');
  } else {
    return detectUrlandChangeTabs(ulrNumber, counter + 1);
  }
};

detectUrlandChangeTabs(lastNumberOfUrl, 0);

$('#selectedBlockText').text($('.selected').text());

// --------------------- Products menu for mobile
(() => {
  if ($(window).width() <= 990) {
    $('#selectedBlock').click(function () {
      $(".tabs-row").slideToggle('slow');
    });

    $('.tab').click(function () {
      $(".tabs-row").toggle();
    })
  }
})();

//-------------------- Fancybox gallery
$(".fancybox").fancybox({
  openEffect: "none",
  closeEffect: "none"
});

  // --------------------- show all snaks
  $('.tabContent .btn').click(function() {
    $('.sneks').css("height", "auto");
    $('.show-all-snaks').css("display", "none");
  });