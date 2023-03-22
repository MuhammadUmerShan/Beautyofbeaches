// <========== LOADER ============> 
setTimeout(function(){
  $('.loader-container').fadeToggle();
 }, 3000);
 // <========== LOADER  END ============>

      //<================ Navbar =============>
      var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
          if (window.pageYOffset > 100) {
              nav.classList.add('bg-dark', 'shadow');
          } else {
              nav.classList.remove('bg-dark', 'shadow');
          }
      });
    //<================ Navbar END =============>

    // <=================== Scrolling TICKER ================>

      var myDate = new Date();
    document.getElementById("time-scroll").innerHTML=myDate;

    // <=================== Scrolling TICKER END ================>

//<====================== client views ======================>

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });
});
//<====================== client views END ======================>

//<========================== REGISTRATION FORM LOCALSTORAGE ====================>

    const signUp = e => {
  let fname = document.getElementById('fname').value,
      lname = document.getElementById('lname').value,
      email = document.getElementById('email').value,
      pwd = document.getElementById('pwd').value;
      phnum = document.getElementById('phnum').value;
      Username = document.getElementById('Username').value;
      dob = document.getElementById('dob').value;

  let formData = JSON.parse(localStorage.getItem('formData')) || [];

  let exist = formData.length && 
      JSON.parse(localStorage.getItem('formData')).some(data => 
          data.fname.toLowerCase() == fname.toLowerCase() && 
          data.lname.toLowerCase() == lname.toLowerCase()
      );

  if(!exist){
      formData.push({ fname, lname, email, pwd, phnum, Username, dob, });
      localStorage.setItem('formData', JSON.stringify(formData));
      document.querySelector('form').reset();
      document.getElementById('fname').focus();
      alert("Thanks For Your Response.");
  }
  else{
      alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
  }
  e.preventDefault();
}

//<========================== REGISTRATION FORM LOCALSTORAGE END ====================>

//<============================ Owlcarousel ==========================>
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
	    "<i class='fa fa-angle-left'></i>",
	    "<i class='fa fa-angle-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});
//<============================ Owlcarousel END ==========================>

