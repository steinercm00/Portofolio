$(document).ready(function(){
    // Add hover effect to the icons
    $('.footer-item i').hover(function(){
        // Add class to make the icon spin
        $(this).addClass('fa-spin');
    }, function(){
        // Remove class when mouse leaves
        $(this).removeClass('fa-spin');
    });
});
