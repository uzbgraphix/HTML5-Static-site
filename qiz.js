
	var score = 0;
var questions =[

				[' How many moon does the earth has? ', 1],
				[' How many moon does the saturn has?', 31],
				[' How many moon does the Veuns has? ', 0],
				[' Which conurty was the first to go to the moon? ', 'American'],
				[' Did they successed? ', 'Yes']


				];


function doQuiz(){				
for (var i=0; i<questions.length; i++) {
	askQuestion(questions[i]);	
}
var message = ' You got ' + score;
message += ' Out of ' + questions.length;
message+= ' questions correct ';

var resultArea = document.getElementById('quizResults');
resultArea.innerHTML =message;
}
	function askQuestion(question){
		var answer = prompt(question[0], '');
		if(answer == question[1]){
			alert('Correct!Thumbs up');
			score++;	
		}else{
			alert('Sorry. The Correct answer is '  + question[1] + '. Thumbs down ');
		}
		
	}
