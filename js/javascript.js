// Document Ready for event handlers
$(document).ready(function() {
    $('#tabContainer').tabs({
        show: 'fadeIn',
        hide: 'fadeOut'
    });

    $('#tabContainer2').tabs({     // <--- ADD this new initialization
        show: 'fadeIn',
        hide: 'fadeOut'
    });
    $('#tabContainer3').tabs({     // <--- ADD this new initialization
        show: 'fadeIn',
        hide: 'fadeOut'
    });
    $('#tabContainer4').tabs({     // <--- ADD this new initialization
        show: 'fadeIn',
        hide: 'fadeOut'
    });
    var hash = location.hash;
    if (hash) {
        $('#tabContainer').tabs('load', hash);
        $('#tabContainer2').tabs('load', hash);
        $('#tabContainer3').tabs('load', hash);
        $('#tabContainer3').tabs('load', hash);
    }
    
    // Index Accordion    
     // Hide all answers initially
    $('.answer').hide(); 

    $('.faq h3, .main h3').click(function() {
        var $answer = $(this).next('.answer'); // Get the related answer

        // Close all other open answers
        $('.answer').not($answer).slideUp();
        $('.faq h3, .main h3').not(this).removeClass('open close');

        // Toggle the clicked one
        if (!$answer.is(':visible')) {
            $answer.stop(true, true).slideDown();
            $(this).addClass('open'); // Indicate it's open
        } else {
            $answer.stop(true, true).slideUp();
            $(this).removeClass('open');
        }
    });

//    $(".main h3").hover(
//        function() {
//            $(this).css({
//                "background-color": "#4CAF50",
//                "padding": "2px 5px",
//                "border-radius": "4px"
//            });
//        },
//        function() {
//            $(this).css({
//                "background-color": "transparent",
//                "padding": "0",
//                "border-radius": "0"
//            });
//        }
//    );
    $("#myIframe").attr("src", "https://www.youtube.com/embed/Ad8XZhgKWeA?si=EMP7zaWKnHvuEl02"); 
    $("#iframeContainer").show();
    $(".loadIframe").click(function () {
                var url = $(this).data("url"); 
                
                $("#myIframe").attr("src", url); 
                
                $("#iframeContainer").fadeIn(300); 
    });

    // Ensure lightbox starts with the default image
    let defaultImage = "img/videogames.jpg"; 
    $(".lightbox-display img").attr("src", defaultImage);
    
    // Image Gallery - Change Lightbox Image on Hover
    $(".gallery img").hover(
        function() {
            var src = $(this).attr("src");
            $(".lightbox-display img").attr("src", src);
        },
        function() {
            $(".lightbox-display img").attr("src", defaultImage);
        }
    );
    //NavBar animation
     $(".dropdown").hover(function(){
            $(this).children(".dropdown-content").stop(true, true).slideDown(200); 
        }, function(){
            $(this).children(".dropdown-content").stop(true, true).slideUp(200); 
        });

    }); 

//// Contact Page Form Validation
//function validateForm(){
//    var msg = "";
//    
//    if ($("#name").val() == "") {
//        msg += "Please enter your name <br>";
//    }
//    if ($("#email").val() == "") {
//        msg += "Please enter your email <br>";
//    }
//    if ($("#comment").val() == "" || $("#comment").val() == "Your Message") {
//        msg += "Please enter your message <br>";
//    }
//    if (!getPlatform()) {
//        msg += "Please Select a Platform <br>";
//    }
//    if (msg==""){
//        msg = "Thank you for contacting us!";
//    }
//    $("#message").html(msg);
//}

function getPlatform() {
    var platforms = document.getElementsByName('platform');

    for (var i = 0; i < platforms.length; i++) {
        if (platforms[i].checked) {
            return platforms[i].value; 
        }
    }
    return false;
}
