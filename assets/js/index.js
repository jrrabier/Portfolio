
$(document).ready(function () {

    // DISPLAY TOOLTIP

    $(function () {
        $(".tooltip-link").tooltip();
    });

    // PRESENTATION ANIMATION

    function animOnLoad() {
        setTimeout(function () {
            $('#home img').animate({
                top: '0px',
                opacity: 1
            }, 1000);
        }, 500);
        setTimeout(function () {
            $('#home aside').animate({
                left: '0px',
                opacity: 1
            }, 1000);
        }, 1000);
    }

    animOnLoad();

});

skillsIds = [
    "#symfony",
    "#java",
    "#slim",
    "#bootstrap",
    "#html5",
    "#css3",
    "#javascript",
    "#php",
    "#MySQL",
    "#relationClient",
    "#management",
    "#communication"
];

leasuresIds = [
    "#tennis",
    "#jeuxvideo",
    "#cinema",
    "#running"
];

// SHOW SKILLS

function showSkills() {

    $('#home').animate({
        left: '-3000px'
    }, 500);
    $('#competences').animate({
        left: 0
    }, 500)

    done = $('#symfony').css('opacity');

    if (done == 0) { // FIRST TIME ANIMATION
        c = 750;
        for (i = 0; i <= 11; i++) {
            $(skillsIds[i]).delay(c).animate({
                opacity: 1
            }, 1000);
            c += 250;
        }
    }
}

// SHOW LEASURES

function showLeasures() {
    $('#home').animate({
        left: '-3000px'
    }, 500);
    $('#loisirs').animate({
        left: 0
    }, 500);

    done = $('#tennis').css('opacity');

    if (done == 0) { // FIRST TIME ANIMATION
        c = 750;
        for (i = 0; i <= 3; i++) {
            $(leasuresIds[i]).delay(c).animate({
                opacity: 1,
                left: '0px'
            }, 500);
            c += 250;
        }
    }
    
}