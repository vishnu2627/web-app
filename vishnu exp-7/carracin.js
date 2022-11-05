//JavaScript Document
$('#Go').click(function(){
    function CheckIfComplete() {
        if (isComplete == false) {
            isComplete == true;
        } else {
            Place = 'Second';
        }
    }
    var CarWidth = $('#Car1').width();
    var RaceTrackWidth = $(window).width() - CarWidth;
    var RaceTime1 = Math.floor((Math.random() * 5000) + 1);
    var RaceTime2 = Math.floor((Math.random() * 5000) + 1);
    var isComplete = false;
    var Place = 'First';

    $('#Car1').animate({
        left: RaceTrackWidth
    }, RaceTime1, function() {
        CheckIfComplete();
        $('#RaceInfo1 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime1 + ' ms');
    });

    $('#Car2').animate({
        left: RaceTrackWidth
    }, RaceTime2, function() {
        CheckIfComplete();
        $('#RaceInfo2 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime2 + ' ms');
    });

    $('#Reset').click(function() {
        $('.Car').css('left', '0');
        $('.RaceInfo span').text("");
    });

});