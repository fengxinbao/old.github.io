Array.prototype.shuffle = function(){
	let m = this.length, i;
	while(m) {
		i = (Math.random() * m--) >>> 0;
		[this[m], this[i]] = [this[i], this[m]];
	}
	return this;
}

let vocabulary = '[{"filename":"should","question":"The price on this packet is wrong. It ______ (be) £1.20, not £1.50.","answer":"should be"},{"filename":"may might","question":"There ______ (be) a meeting on Friday because the director is ill.","answer":"might not be"},{"filename":"should","question":"I wonder where Liz is. She ______ (be) here by now.","answer":"should be"},{"filename":"should","question":"She\'s been studying hard for the exam, so she ______ (pass).","answer":"ought to pass / should pass"},{"filename":"should","question":"What do you suggest we should do?<br>What do you suggest we do?<br>What do you suggest us to do?","answer":"√, √, ×"},{"filename":"should","question":"It\'s essential that you ______ (be) here on time.","answer":"should be / be"},{"filename":"should","question":"______ we invite Susan to the party?<br>Yes, I think we ______.","answer":"Should, should"},{"filename":"should","question":"You look tired. You _______.(go to bed)","answer":"should go to bed"},{"filename":"Congrats!","question":"Congrats!","answer":"Congrats!"},{"filename":"should","question":"I wonder why they\'re so late. They ______ here an hour ago.","answer":"should have been"},{"filename":"should","question":"Those boys ______ (play) football at this time. They ______ (be) at school.","answer":"shouldn\'t be playing, should be"},{"filename":"may might","question":"If I knew them better, I ______ (invite) them to the dinner.","answer":"might invite"},{"filename":"may might","question":"Ann ______ (come) to the party tonight. She isn\'t well.","answer":"may not come"},{"filename":"vocabulary","question":"cryptic","answer":"神秘的"},{"filename":"may might","question":"I ______ (watch) the football on television at 8.30.","answer":"will be watching / may be watching / might be watching"},{"filename":"vocabulary","question":"tangle","answer":"纠缠，纠纷; 混乱"},{"filename":"vocabulary","question":"slob","answer":"懒汉"},{"filename":"must mustn\'t needn\'t","question":"I ______ (get up) early, so I didn\'t.<br>I ______ (get up) early, but it was a lovely morning, so I did.<br>I ______ (get up) so early. I ______ (stay) in bed longer.","answer":"didn\'t need to get up<br>didn\'t need to get up<br>needn\'t have to, could have stayed"},{"filename":"may might","question":"The bus doesn\'t always come on time. We ____ (wait) a few minutes.","answer":"might have to wait"},{"filename":"should","question":"You ______ (believe) everything you read in the newspapers.","answer":"shouldn\'t believe"},{"filename":"must mustn\'t needn\'t","question":"We\'ve got plenty of time.<br><br>We ______ hurry.<br>We ______ hurry.<br>We ______ hurry.","answer":"needn\'t, don\'t need to, don\'t have to"},{"filename":"vocabulary","question":"indice","answer":"指数"},{"filename":"may might","question":"I ______ going to Ireland in July.","answer":"am <i>(for sure)</i><br>may be / might be <i>(possible)</i>"},{"filename":"must mustn\'t needn\'t","question":"Why did you wash that shirt. It wasn\'t dirty. You ______ (wash) it.","answer":"needn\'t have washed"},{"filename":"should","question":"The government _______ (do more) to help homeless people.","answer":"should do more"},{"filename":"may might","question":"Helen and Clare have just missed the bus. The buses run every hour.<br>What shall we do? Shall we walk?<br>We ______. It\'s a nice day and I don\'t want to wait here for another hour.","answer":"might/may as well"},{"filename":"must mustn\'t needn\'t","question":"That shirt isn\'t dirty. You ______ (wash) it.","answer":"needn\'t wash"},{"filename":"should","question":"Jack ______ (go) to bed so late.","answer":"ought not to go / should not go"},{"filename":"Congrats!","question":"Congrats!","answer":"Congrats!"},{"filename":"should","question":"What do you suggest I ______ (do)?","answer":"should do / do"},{"filename":"should","question":"I demanded that he ______ (apologise).","answer":"should apologise / apologise / apologised"},{"filename":"vocabulary","question":"tally","answer":"测量，计数"},{"filename":"Congrats!","question":"Congrats!","answer":"Congrats!"},{"filename":"vocabulary","question":"affliction","answer":"苦恼，痛苦"},{"filename":"should","question":"I\'m feeling sick. I ______ (eat) so much chocolate.","answer":"shouldn\'t have eaten"},{"filename":"should","question":"She ______ (listen) to our conversation. It was private.","answer":"shouldn\'t have been listening"},{"filename":"should","question":"Jane suggested that I (should) buy a car.<br>Jane suggested that I bought a car.<br>Jane suggested me to buy a car.","answer":"√, √, ×"},{"filename":"should","question":"Do you think I ______ (apply) for this job?","answer":"ought to apply / should apply"},{"filename":"should","question":"What do you think of Jane\'s suggestion that I ______ (buy) a car?","answer":"should buy"},{"filename":"vocabulary","question":"hygiene","answer":"卫生"},{"filename":"should","question":"They insisted that we _____ (have) dinner with them.","answer":"should have"},{"filename":"should","question":"It was a great party last night. You ______ (come). Why didn\'t you?","answer":"should have come"},{"filename":"may might","question":"It ____ (rain) later.","answer":"might rain"},{"filename":"should","question":"You ______ (apologise).","answer":"should apologise / must apologise"},{"filename":"should","question":"It was a great party last night. You ______ (come).","answer":"ought to have come / should have come"},{"filename":"must mustn\'t needn\'t","question":"I think it\'s going to rain. I\'ll take the umbrella. I ______ (bright) the umbrella.","answer":"needn\'t have brought"},{"filename":"Congrats!","question":"Congrats!","answer":"Congrats!"}]';

window.onload = function(){
  QUESTIONS = JSON.parse(vocabulary);
  QUESTIONS.shuffle();
  populate(QUESTIONS);
  console.log("hhah<br>jjj".replace("<br>","\\n"));
  //fillText(QUESTIONS[0].question, QUESTIONS[0].answer);
}

function populate(array){
	for(let e of array){
		let row = addNode(e);
		document.getElementById("container").appendChild(row);
	}
	
	function addNode(e){
		let row, question, answer, text;
		
		row = document.createElement("div");
		row.setAttribute("class", "row");
				
		question = document.createElement("div");
		question.innerHTML = e.question;
		question.setAttribute("class", "col-md-8 question");
		
		
		row.appendChild(question);
		
		answer = document.createElement("div");
		answer.innerHTML = e.answer;
		answer.setAttribute("class", "col-md-4 answer");	
		
		row.appendChild(answer);
		
		
		return row;
	}
}

let QUESTIONS = [];
let previousQuestion = [];
let index = 1;
let fileNames = [];

function next(){
	let {question, answer} = pickOne();
	previousQuestion.unshift({question, answer});
	previousQuestion = previousQuestion.slice(0,2);
	fillText(question, answer);
}

function previous(){
	fillText(previousQuestion[1].question, previousQuestion[1].answer);
}

function fillText(question, answer){
	document.getElementById("question").innerHTML = question;
	document.getElementById("answer").innerHTML = answer;
	document.getElementById("answer").style.display="none";
}

function showAnswer(){
	document.getElementById("answer").style.display="";
}

function pickOne(){

	if(QUESTIONS.length == 0) 
		return {filename: "No file!", question: "No questions!", answer: "No answers!"};
	if(index == QUESTIONS.length){
		QUESTIONS = QUESTIONS.slice(0, QUESTIONS.length-1);
		QUESTIONS.shuffle();
		QUESTIONS.push({filename:"Congrats!", question:"Congrats!", answer:"Congrats!"})
		index = 0;
	}

	return QUESTIONS[index++];
}

function selectFile(){
	document.getElementById("file").click();
}

function read(){
	let file = document.getElementById("file").files[0];
	fileNames.push(file.name);
    addQuestions();

	function addQuestions(){
		let reader = new FileReader();
		reader.readAsText(file, "UTF-8");
		reader.onload = function(){
			let result = this.result.split("\n");
			for(let i=0; i<result.length; ){
				if(result[i].trim()){
					addOneQuestion(file.name, result[i].trim(), result[i+1].trim());
					i+=2;
				} else {
					i++;
				}
			}
			QUESTIONS.shuffle();
			QUESTIONS.push({filename:"Congrats!", question:"Congrats!", answer:"Congrats!"})
			index = 0;

			listFiles();
			console.log(JSON.stringify(QUESTIONS));
		}

		function addOneQuestion(filename, question, answer){
			QUESTIONS.push({filename, question, answer});
		}

		function listFiles(){
			for(let i=0; i<fileNames.length; i++){
				document.getElementById("file-names").innerHTML += "<span class='file-name'>" + fileNames[i] + "</span>";
			}

			document.getElementById("count").innerHTML = QUESTIONS.length - 1;
		}
	}
}