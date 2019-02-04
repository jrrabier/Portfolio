
$(document).ready(function () {

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

portfolioIds = [
    "#tennis",
    "#jeuxvideo",
    "#cinema",
    "#running"
];

positions = [
    '-9000px',
    '-6000px',
    '-3000px',
    '3000px',
    '6000px',
    '9000px'
]

function showHome() {

    $('#competences').animate({
        left: positions[3]
    }, 500);
    $('#portfolio').animate({
        left: positions[4]
    }, 500);
    $('#contacts').animate({
        left: positions[5]
    }, 500);
    $('#home').animate({
        left: 0
    }, 500)

}

function showContacts() {

    $('#home').animate({
        left: positions[0]
    }, 500);
    $('#competences').animate({
        left: positions[1]
    }, 500);
    $('#portfolio').animate({
        left: positions[2]
    }, 500);
    $('#contacts').animate({
        left: 0
    }, 500)

}
// SHOW SKILLS

function showSkills() {

    $('#home').animate({
        left: positions[2]
    }, 500);
    $('#portfolio').animate({
        left: positions[3]
    }, 500);
    $('#contacts').animate({
        left: positions[4]
    }, 500);
    $('#competences').animate({
        left: 0
    }, 500)

    done = $('#symfony').css('opacity');

    if (done == 0) { // FIRST TIME ANIMATION
        c = 750;
        for (i = 0; i <= skillsIds.length; i++) {
            $(skillsIds[i]).delay(c).animate({
                opacity: 1
            }, 1000);
            c += 250;
        }
    }
}

// SHOW PORTFOLIO

function showPortfolio() {

    $('#home').animate({
        left: positions[1]
    }, 500);
    $('#competences').animate({
        left: positions[2]
    }, 500);
    $('#contacts').animate({
        left: positions[3]
    }, 500);
    $('#portfolio').animate({
        left: 0
    }, 500);

    done = $('.portfolio').css('opacity');

    if (done == 0) { // FIRST TIME ANIMATION
        c = 750;
        for (i = 0; i <= portfolioIds.length; i++) {
            $(portfolioIds[i]).delay(c).animate({
                opacity: 1,
                left: '0px'
            }, 500);
            c += 250;
        }
    }
    
}