$(document).ready( function() {
	var timerRunning = false;
	var	intervalId;
	var timeoutId;
	var	gameClock;
		userScore = 0;
		incorrectGuesses = 0;
		questionDivCount = 0;
		questionArray = ["Which character is based off the real-life personality of Seinfeld producer, Larry David?",
		"All four main characters played in the show are followers of which faith?", "Which character, who also lives in Jerry's building, is Jerry's nemesis?",
		"Jerry infamously fights with Newman over which sweet snack?", "Which famous Breaking Bad actor played Jerry's dentist in Seinfeld?", "Curb Your Enthusiasm takes place in which U.S. city?",
		"In Curb, Larry accidentally switches his wine with Susan and Jeff's child's drink. Which drink causes the mix-up?", "Larry is asked to wear which women's article of clothing, to prove to Susan that Jeff isn't cheating on her?",
		"Which sacred animal attacks Larry on a golf course, resulting in Larry's expulsion from the country club?", "Larry has a run-in with which fictional rapper?"];
		correctAnswerArray = ["George", "Judaism", "Newman", "Drake's Coffee Cake", "Bryan Cranston", "Los Angeles", "Grape Juice", "Women's underwear", "black swan", "Krayzee Eyez Killa"];
		option2Array = ["Jerry", "Islam", "Kramer", "Ho-Hos", "Bob Odenkirk", "San Francisco", "Apple Juice", "a bra", "gopher", "Young Masta"];
		option3Array = ["Kramer", "Christianity", "The Landlord", "Snickers Bar", "Aaron Paul", "Chicago", "Ginger Ale", "A blouse", "golden retriever", "Lil Glock"];
		option4Array = ["Newman", "Hinduism", "Bizarro Jerry", "Jelly Doughnuts", "Vince Gilligan", "New York City", "Grape Soda", "Heels", "flamingo", "Soda Poppa"];
		options = [$('#option1'), $('#option2'), $('#option3'), $('#option4')];
		i = 0;


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
	};
		
	$("#start").on('click', function() {
			gameClock = 1020;
			timerRunning = true;
			i=0;
			// incorrectGuesses = 0;
			// userScore = 0;
			gameClock=20;
			intervalId = setInterval(function() {
				$('#timerDisplay').text(triviaGame.timeConverter(gameClock));
				gameClock-=1;
				if (gameClock===-1) {
					timerRunning = false;
					clearInterval(intervalId);
					alert("Times up!");
					gameClock = 20;
					i++;
					incorrectGuesses++;
					startGame();
				}
			}, 1000);
			startGame();
			$('#start').css("display", "none");
	});

	$('#resetButton').on('click', function() {
		i=0;
		incorrectGuesses = 0;
		userScore = 0;
		timerRunning=true;
		$('#gameDone').css("display", "none");
		$('#resetGame').css("display", "none");
		$('#question').css("display", "initial");
		$('#option1').css("display", "initial");
		$('#option2').css("display", "initial");
		$('#option3').css("display", "initial");
		$('#option4').css("display", "initial");
			intervalId = setInterval(function() {
				$('#timerDisplay').text(triviaGame.timeConverter(gameClock));
				gameClock-=1;
				if (gameClock===-1) {
					timerRunning = false;
					clearInterval(intervalId);
					alert("Times up!");
					gameClock = 20;
					i++;
					incorrectGuesses++;
					startGame();
				}
			}, 1000);
		startGame();

	});

	function questionArrayLoop (i) {
		if (i<questionArray.length) {
			$('#question').text(questionArray[i]);
			$('#option1').text(correctAnswerArray[i]);
			$('#option2').text(option2Array[i]);
			$('#option3').text(option3Array[i]);
			$('#option4').text(option4Array[i]);
			console.log("Variable I is: " + i);
			// var options = $('.incorrect');
			// var correct = $('.correct');
			// var index = Math.floor(Math.random() * 4);

			// options.splice(index, 0, correct);
		} else {
			timerRunning=false;
			clearInterval(intervalId);
			console.log("Game over");
			$('#allOptions').css("display", "none");
			$('#question').css("display", "none");
			$('.option').css("display", "none");
			$('#gameDone').css("display", "initial");
			$('#correctCount').text(userScore);
			$('#incorrectCount').text(incorrectGuesses);
			$('#resetGame').css("display", 'initial');
		}
	};

	function startGame() {
		questionArrayLoop(i);

			$('.correct').on('click', function () {
				userScore++;
				gameClock = 20;
				console.log(userScore);
				$('#allOptions').css("display", "none");
				$('#correctDiv').css("display", "initial")
				function timeoutId() {
					$('#correctDiv').css("display", "none");
					$('#allOptions').css("display", "initial");
				};
				var timeoutInteger = setTimeout(timeoutId, 1000);
				i++;
				questionArrayLoop(i);
			});

			$('.incorrect').on('click', function() {
				incorrectGuesses++;
				gameClock = 20;
				console.log("Incorrect guesses are: " + incorrectGuesses);
				$('#correctAnswer').text(correctAnswerArray[i]);
				$('#allOptions').css("display", "none");
				$('#incorrectDiv').css("display", "initial");
				function timeoutId() {
					$('#incorrectDiv').css("display", "none");
					$('#allOptions').css("display", "initial");
				};
				var timeoutInteger = setTimeout(timeoutId, 1000);
				i++;
				questionArrayLoop(i);
			});
		
		
	}
});