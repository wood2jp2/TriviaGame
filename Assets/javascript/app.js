$(document).ready( function() {
	var timerRunning = false;
	var intervalId;
	var gameClock;
		userScore = 0;
		incorrectGuesses = 0;

	var triviaGame = {

		timeConverter: function(t) {

		    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
		    var minutes = Math.floor(t / 60);
		    var seconds = t - (minutes * 60);

		    if (seconds < 10) {
		      seconds = "0" + seconds;
		    }

		    if (minutes === 0) {
		      minutes = "00";
		    }

		    else if (minutes < 10) {
		      minutes = "0" + minutes;
		    }

		    return minutes + ":" + seconds;
		}
	}

	$("#start").on('click', function() {
		gameClock = 5;
		timerRunning = true;
		intervalId = setInterval(function() {
			$('#timerDisplay').text(triviaGame.timeConverter(gameClock));
			gameClock-=1;
			console.log(gameClock);
			if (gameClock===-1) {
			timerRunning = false;
			clearInterval(intervalId);
			alert("Times up!");
			}
		}, 1000);
		$('#q1').css("display", "initial")
	});

	$('.correct1').on('click', function() {
		userScore++;
		$('#q1').css("display", "none");
		$('#q2').css("display", "initial");
	});

	$('.incorrect1').on('click', function() {
		incorrectGuesses++;
		$('#q1').css("display", "none");
		$('#q2').css("display", "initial");
	})

});