var currentCategory= ['history', 'language', 'nature', 'technology'];
var Questions= [
	// store answer with questions for easier retrieval
	{ category: '', question : 'In star program for agents evaluation for all over sales is 40% ', answer: false },
	{ category: '', question: 'Agent customer experience in all star star program , TNPS gets 20% from the evaluation', answer: false },
	{ category: '', question: 'In final commission Accelerator if you get 102% final commission you will increase 10 % extra ', answer: false },
	{ category: '', question: 'Productivity & Operation wight on KPI is 28%', answer: true },
	{ category: '', question: 'in mystery evaluation if you get 82% you will get 100% over all score ', answer: true },

];

// when declared over here other functions will see it; it's not best practice to register them in global/window scope, but better than nothing ;)
var count = 0;
var points = 0; 
var category;
var question;

//show answer buttons only after clicking start button
function showButtons(){
	document.getElementById('answerT').style.display="";
	document.getElementById('answerF').style.display="";
}

// choose a category and a question
function catAndQuest() {
	start.style.display = 'none';
	showButtons();

	document.getElementById('points').innerHTML= 'Points: ' + (points);
	document.getElementById('count').innerHTML= 'Question ' + (++count) + ' \/ 4';
    
	currentCategory = Questions.map(function(question) {
    	return question.category;
    });
	category = currentCategory[Math.floor(Math.random() * currentCategory.length)];
	document.getElementById('category').innerHTML= 'Category: ' + (category);

	var questionList= Questions.filter( function (question){
		return question.category === category;
	});

	question = questionList[Math.floor(Math.random() * questionList.length)];
	document.getElementById('quest').innerHTML= question.question;
}

// create a copy of Questions array
var copy = [].concat(Questions);

// delete used question out of the copy array
function deleteUsed (){
	if(Questions.length > 0) {
		Questions.splice(Questions.indexOf(question),1);
	} else {
		document.getElementById('answerT').style.display="none";
		document.getElementById('answerF').style.display="none";
		document.getElementById('questions').style.display="none";
		document.getElementById('looser').style.display="";
		document.getElementById('reset').style.display="";
	}
}

//user answered question
function answer(value){
	deleteUsed();
	if(value === question.answer) {
		points++;
		if(points==15){
			document.getElementById('answerT').style.display="none";
			document.getElementById('answerF').style.display="none";
			document.getElementById('questions').style.display="none";
			document.getElementById('winner').style.display="";
			document.getElementById('reset').style.display="";
		}
	}	
	catAndQuest();
}

//restart the game
function restart(){
	document.location.href="";
}
