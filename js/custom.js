
  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/    
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     

    // MANER START


    const maner_management_dropdown = document.getElementById('maner_management_expand');
    const maner_management_dropdown_content = document.getElementById('maner_management_text_dropdown');

    maner_management_dropdown.addEventListener('click', function() {
    if (maner_management_dropdown_content.style.display === 'none') {
        maner_management_dropdown_content.style.display = 'block';
    } else {
        maner_management_dropdown_content.style.display = 'none';
    }
    });




    const maner_adventure_dropdown = document.getElementById('maner_adventure_expand');
    const maner_adventure_dropdown_content = document.getElementById('maner_adventure_text_dropdown');

    maner_adventure_dropdown.addEventListener('click', function() {
    if (maner_adventure_dropdown_content.style.display === 'none') {
        maner_adventure_dropdown_content.style.display = 'block';
    } else {
        maner_adventure_dropdown_content.style.display = 'none';
    }
    });



    const maner_nature_dropdown = document.getElementById('maner_nature_expand');
    const maner_nature_dropdown_content = document.getElementById('maner_nature_text_dropdown');

    maner_nature_dropdown.addEventListener('click', function() {
    if (maner_nature_dropdown_content.style.display === 'none') {
        maner_nature_dropdown_content.style.display = 'block';
    } else {
        maner_nature_dropdown_content.style.display = 'none';
    }
    });



    const maner_entertainment_dropdown = document.getElementById('maner_entertainment_expand');
    const maner_entertainment_dropdown_content = document.getElementById('maner_entertainment_text_dropdown');

    maner_entertainment_dropdown.addEventListener('click', function() {
    if (maner_entertainment_dropdown_content.style.display === 'none') {
        maner_entertainment_dropdown_content.style.display = 'block';
    } else {
        maner_entertainment_dropdown_content.style.display = 'none';
    }
    });


    const maner_relaxation_dropdown = document.getElementById('maner_relaxation_expand');
    const maner_relaxation_dropdown_content = document.getElementById('maner_relaxation_text_dropdown');

    maner_relaxation_dropdown.addEventListener('click', function() {
    if (maner_relaxation_dropdown_content.style.display === 'none') {
        maner_relaxation_dropdown_content.style.display = 'block';
    } else {
        maner_relaxation_dropdown_content.style.display = 'none';
    }
    });

    // MANER END



    // ACTORS START


    const actors_adventure_dropdown = document.getElementById('actors_adventure_expand');
    const actors_adventure_dropdown_content = document.getElementById('actors_adventure_text_dropdown');

    actors_adventure_dropdown.addEventListener('click', function() {
    if (actors_adventure_dropdown_content.style.display === 'none') {
        actors_adventure_dropdown_content.style.display = 'block';
    } else {
        actors_adventure_dropdown_content.style.display = 'none';
    }
    });



    const actors_camping_dropdown = document.getElementById('actors_camping_expand');
    const actors_camping_dropdown_content = document.getElementById('actors_camping_text_dropdown');

    actors_camping_dropdown.addEventListener('click', function() {
    if (actors_camping_dropdown_content.style.display === 'none') {
        actors_camping_dropdown_content.style.display = 'block';
    } else {
        actors_camping_dropdown_content.style.display = 'none';
    }
    });


    const actors_training_dropdown = document.getElementById('actors_training_expand');
    const actors_training_dropdown_content = document.getElementById('actors_training_text_dropdown');

    actors_training_dropdown.addEventListener('click', function() {
    if (actors_training_dropdown_content.style.display === 'none') {
        actors_training_dropdown_content.style.display = 'block';
    } else {
        actors_training_dropdown_content.style.display = 'none';
    }
    });


    const actors_outdoor_dropdown = document.getElementById('actors_outdoor_expand');
    const actors_outdoor_dropdown_content = document.getElementById('actors_outdoor_text_dropdown');

    actors_outdoor_dropdown.addEventListener('click', function() {
    if (actors_outdoor_dropdown_content.style.display === 'none') {
        actors_outdoor_dropdown_content.style.display = 'block';
    } else {
        actors_outdoor_dropdown_content.style.display = 'none';
    }
    });


    const actors_road_dropdown = document.getElementById('actors_road_expand');
    const actors_road_dropdown_content = document.getElementById('actors_road_text_dropdown');

    actors_road_dropdown.addEventListener('click', function() {
    if (actors_road_dropdown_content.style.display === 'none') {
        actors_road_dropdown_content.style.display = 'block';
    } else {
        actors_road_dropdown_content.style.display = 'none';
    }
    });


    const actors_sight_dropdown = document.getElementById('actors_sight_expand');
    const actors_sight_dropdown_content = document.getElementById('actors_sight_text_dropdown');

    actors_sight_dropdown.addEventListener('click', function() {
    if (actors_sight_dropdown_content.style.display === 'none') {
        actors_sight_dropdown_content.style.display = 'block';
    } else {
        actors_sight_dropdown_content.style.display = 'none';
    }
    });


    // ACTORS END

  });
