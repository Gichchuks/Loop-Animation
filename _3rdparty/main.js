(function($) {
"use strict";


/*------------------------------------------------------------------
[Table of contents]

1. CUSTOM FUNCTION
2. JQUERY CENTER FOR CONTENT /.jquery-center
3. COUNTDOWN INIT / #countdown_text_layout
4. MAGNIFIC POPUP INIT / .single_popup
5. CONTENT ANIMATE FUNCTION
6. SCROLL TO CONTENT
7. CONTENT APPEAR ANIMATION INIT / #marshall-details
8. CONTENT CLOSE INITI / #marshall-close-content
9. NEWSLETTER FORM INIT / #marshall-form
10. PARTICLES INIT / #mrs_particles_can
11. SLDE SLIDER INIT - VEGAS / #mrs_bg_slider
12. FULLSCREEN BACKGROUND SLIDER INIT - VEGAS / body.mrs-body-slider
13. CONTACT FORM AJAXIFY INIT / #mrs-contactForm
14. CONTACT FORM INPUT INAMATION
15. TEXTAREA AUTOSIZE / #mrs_message
16. PLAX PARALLAX INIT / .js-plaxify
17. APP SLIDER INIT
18. RIPPLES CANVAS
19. PARTICLES CANVAS - STAR
20. MCUSTOMSCROLL INIT WHILE LOAD AND RESIZE EVENT
21. Preloader / .marshall-loading-screen
22. JQUERY CENTER REINIT WHILE WINDOW LOAD /.jquery-center
23. INSTAGRAM FEED AND MASONRY INIT / #instagram_feed
24. INSTAGRAM FEED AND OWL CAROUSEL INIT / #instagram_slider
25. JQUERY CENTER CONTENT REINITIALIZE / .jquery-center

-------------------------------------------------------------------*/

/*--------------------------------------------------------------
  9. NEWSLETTER FORM INIT
--------------------------------------------------------------*/

if ( $("#marshall-form").is_exist() ) {

  var mform = $("#marshall-form");
  mform.ajaxChimp({
      callback: callbackFunction,
      url: 'https://twitter.us20.list-manage.com/subscribe/post?u=e3b0ed2f281342214910100c2&amp;id=117659435c'
  });
  function callbackFunction (resp) {
      if (resp.result === 'success') {
        $('#marshall-email').val('');
        mform.addClass('mform-success');
        if ( $('.marshall-newsletter-header').length > 0 ) {
          $('.marshall-newsletter-header').removeClass('mform-header-animate').addClass('mfrom-header-animate-close');
        }
        setTimeout(function(){
          mform.removeClass('mform-success').removeClass('mform-submitting').removeClass('mform-animate');
          if ( $('.marshall-newsletter-header').length > 0 ) {
            $('.marshall-newsletter-header').removeClass('mfrom-header-animate-close').addClass('mfrom-header-animate');
          }
          mform.find('label').html('');
        }, 2000);
      } else if (resp.result === 'error') {
        mform.removeClass('mform-submitting').removeClass('mform-animate').addClass('mform-error');
      }
  }
  if (!String.prototype.contains) {
      String.prototype.contains = function (arg) {
          return !!~this.indexOf(arg);
      };
  }
  $(document).ajaxSend(function(evt, request, settings) {
    if ( settings.url.contains('subscribe') && settings.url.contains('post') ) {
       mform.removeClass('mform-error').addClass('mform-submitting');
       setTimeout(function(){
        mform.addClass('mform-animate');
       }, 900);
    }
  });

}






})(jQuery); // end anonymous function