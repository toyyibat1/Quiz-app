(function(){

// Functions
function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        // add this question and its answers to the output
        // output.push(
        //   `<div class="question"> ${currentQuestion.question} </div>
        //   <div class="answers"> ${answers.join('')} </div>`
        // );
            
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }
function showResults(){ 
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.backgroundColor = 'lightgreen';
        answerContainers[questionNumber].style.color = 'white';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.backgroundColor = 'red';
        answerContainers[questionNumber].style.color = 'white';
      }
    });
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }


// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
      
      question: "1. &nbsp Who was the male protagonist in The Horse Wisperer?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Robert Redford"
      },
      correctAnswer: "c"
    },
    {
      question: "2. &nbsp Who was the leading actress in Sister act I en II ?",
      answers: {
        a: "Robert Redford",
        b: "Sheryl Sandberg",
        c: "Whoopi Goldberg"
      },
      correctAnswer: "c"
    },
    {
      question: "3. &nbsp Who is the director of the X-files?",
      answers: {
        a: "Angun laro",
        b: "Jane Campion",
        c: "Sergio Leone",
        d: "Rob Bowman"
      },
      correctAnswer: "d"
    },
    {
        question: "4. &nbspGive the name of the best James Bond parody",
        answers: {
          a: "Austin Powers",
          b: "Queen lary",
          c: "Requr James",
          d: "Hustin Powers"
        },
        correctAnswer: "a"
      },
      {
        question: "5. &nbsp How many oscars did the Titanic movie got?",
        answers: {
          a: "Twenty",
          b: "Eleven",
          c: "Ten",
          d: "Twelve"
        },
        correctAnswer: "b"
      }
  ];

// Kick things off // display quiz right away
buildQuiz();

//Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

// Event listeners // on submit, show results
submitButton.addEventListener('click', showResults);

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide); 

// function showResults(){

 


})();
