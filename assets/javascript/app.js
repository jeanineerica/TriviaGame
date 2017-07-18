
//Fade in & out opening screen
$('#logo').hide().fadeIn(3000);
$('#begin-btn').hide().fadeIn(3000);

//On open-btn click, fade out & show game div
$(".open-btn").click(function(){
  $("#img-container").hide(3000);
  $("#game-container").show().fadeIn(3000);

});


//Timer
$('#timer').html('<h1>Time Remaining: 20 seconds</h1>');

//Answers Image
// var answerimg = $("<img></img>");
// posterimg.attr("src", questions.answer-img);
$(".answer-img").hide();

//Global Variables
var questionNum = 0, correctAnswer = 0, incorrect = 0, unanswered = 0; 
var correct = false;
//var guessed = $('.list-group item').on('click');

//Clock Variables
var countdown = 20;
var inervalId;
var clockRunning = false;

//Hide results & choices untill called for
$('.results').hide();
$('#multipleChoice').hide();
$('.answerImg').hide();

//Restart Button
$('.restart').hide();

//Object of Trivia Questions
var trivia = {
	"questions" : [
			{
				"question" : "Who directed Ferris Bueller's Day Off?",
				"answer" : "John Hughes",
				"explain" :"blahblahblah",
				"multipleChoice" : [ "John Waters", "John Hughes", "John Ford", "John Singleton" ]
			},

			{
				"question" : "By the end of the movie, Ferris had a record of how many absent days?",
				"answer" : "2",
				"explain" :"blahblahblah",
				"multipleChoice" : [ "9", "6", "2", "0" ]
			},	

			{
				"question" : "in 1930, the Republican controlled House of Representatives, in an effort to alleviate the effects of the...Anyone?...Anyone?",
				"answer" : "The Great Depression",
				"explain" :"blahblahblah",
				"multipleChoice" : [ "Hawley-Smoot Terrif Act", "Laffer Curve", "Voodoo Economics", "The Great Depression" ]
			},	

			{
				"question" : "What baseball game does Ferris attend?",
				"answer" : "Chicago Cubs vs Atlanta Braves",
				"explain" :"blahblahblah",
				"multipleChoice" : [ "Chicago Cubs vs Atlanta Braves", "Detroit Redwings vs Chicago Cubs", "San Francisco Giants vs Chicago Bears", "Chicago Cubs vs New York Yankees" ]
			},	

			{
				"question" : "What shirt does Cameron wear?",
				"answer" : "Detroit Redwings Jersey",
				"explain" :"blahblahblah",
				"multipleChoice" : [ "Chicago Cubs Jersey", "Detroit Redwings Jersey", "New York Yankees Jersey", "Plain White T-Shirt" ]
			},	

			{
				"question" : "Ferris and Cameron borrow what car?",
				"answer" : "1961 Ferrari 250 GT California",
				"explain" :"blahblahblah",
				"multipleChoice" : [ "1961 Ferrari 250 GT California", "1964 Ferrari 250 LM", "1957 Ferrari 250 Testa Rosa", "1964 Ferrari 275 GTB" ]
			},	

			{
				"question" : "Who is the Sausage King of Chicago?",
				"answer" : "Abe Froman",
				"explain" :"blahblahblah",
				"multipleChoice" : [ "Garth Volbeck", "Abe Froman", "Jeffery Jones", "Lowe Stein" ]
			},	

			{
				"question" : "In the Chicago Art Institute, what is the name of the painting Cameron fearfully stares at?",
				"answer" : "A Sunday Afternoon on the Island of La Grande Jatte",
				"explain" :"blahblahblah",
				"multipleChoice" : [ "Woman with a Parasol", "The Circus", "The Seine Courbevoie", "A Sunday Afternoon on the Island of La Grande Jatte" ]
			},	

			{
				"question" : "Ferris asked for a car, and got what?",
				"answer" : "computer",
				"explain" :"blahblahblah",
				"multipleChoice" : [ "bike", "phone", "computer", "piano" ]
			},	

			{
				"question" : "My bestfriend's sister's boyfriend's brother's girlfriend heard from this guy who knows this kid who's going with the girl who saw Ferris pass out where?",
				"answer" : "31 Flavors",
				"explain" :"blahblahblah",
				"multipleChoice" : [ "the Arcade", "Central Perk", "31 Flavors", "The Max" ]
			},																									
	]
}

//Game Results
function results() {
	$('#triviaQuestions').hide();
	$('.choices').hide();
	$('.results').show();
	$('#correct').html("Correctly Answered " + correctAnswer);
	$('#incorrect').html("Incorrectly Answered " + incorrect);
	$('#unanswered').html("Unanswered " + unanswered);
}

//Game Start
function start () {
	askQuestions(questionNum);
	counter=setInterval	(triviaTimer, 1000);
	clockRunning = true;
}

//Display Questions
function askQuestions(questionNum) {
	countdown = 20;
	$('#multipleChoice').show();
		if(questionNum < 10){
			$('#triviaQuestions').html(trivia.questions[questionNum].question);
			//Multiple Choices
			$('#a').html(trivia.questions[questionNum].multipleChoice[0]);
			$('#b').html(trivia.questions[questionNum].multipleChoice[1]);	
			$('#c').html(trivia.questions[questionNum].multipleChoice[2]);
			$('#d').html(trivia.questions[questionNum].multipleChoice[3]);								
		}
		else{
			clearInterval(counter);
			results();
		}
}

//Compare Answers
function checkCorrect(guessed) {
	if (guessed === trivia.questions[questionNum].answer) {
		return true;
	}
	else {
		return false;
	}

}

//Click to Start
$('.start-btn').on('click', function(){
	$('.start-btn').hide();
	questionNum = 0, correctAnswer = 0, incorrect = 0, unanswered = 0, countdown = 20;

	start();
});

//List Answers
$('.list-group .item').on('click', function(){
	if(checkCorrect($(this).html()) === true) {
		correctAnswer ++;
		questionNum ++;		
		askQuestions(questionNum);

	}
	else if (checkCorrect($(this).html()) === false){
		incorrect ++;
		questionNum ++;		
		askQuestions(questionNum);
	}


});

//Interval Timer
function triviaTimer() {
	countdown --;
	console.log(countdown);

	//Timer Div
	$('#timer').html('<h1>Time Remaining: ' + countdown + ' seconds</h1>');

	//When Timer gets to 0
	if (countdown === 0) {
		clearInterval(counter);
		unanswered ++;
		alert ('Time is up');
		questionNum ++;


		//End of Game
		if (questionNum === 10) {
			clearInterval(counter);
			results();
		}
		else {
			askQuestions(questionNum);
			countdown = 22;
			counter = setInterval(triviaTimer, 1000);
			countdown --;
		}
	}


	}


