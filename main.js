function quizInit() {
  var quizzes  = [
    {
      qns: "Which island is also known as the 'Pearl of the Andaman'?",
      choice1: "Phuket",
      choice2: "Koh Samui",
      choice3: "Koh Phang Nga",
      choice4: "Krabi",
      answer: "Phuket",
    },

    {
      qns: "Which island is also known as the 'Pearl of the Orient?'",
      choice1: "Koh Samui",
      choice2: "Bali",
      choice3: "Penang",
      choice4: "Singapore",
      answer: "Penang",
    },

    {
      qns: "Which city is listed as a UNESCO World Heritage City?'",
      choice1: "Penang",
      choice2: "Bagan",
      choice3: "Luang Prabang",
      choice4: "Siem Reap",
      answer: "Luang Prabang",
    },

    {
      qns: "Which is the oldest independent country in South East Asia?",
      choice1: "Philippines",
      choice2: "Brunei",
      choice3: "Indonesia",
      choice4: "Thailand",
      answer: "Thailand",
    },

    {
      qns: "Which city was the last imperial capital of the Nguyen Dynasty in Vietnam?",
      choice1: "Ha Noi",
      choice2: "Hue",
      choice3: "Hoi An",
      choice4: "Ha Long Bay",
      answer: "Hue",
    },

    {
      qns: "Which of these companies is not founded in Southeast Asia?",
      choice1: "British India",
      choice2: "Pedro",
      choice3: "Shanghai Tang",
      choice4: "Jim Thompson",
      answer: "Shanghai Tang",
    },

    {
      qns: "When was ASEAN founded?",
      choice1: "1963",
      choice2: "1967",
      choice3: "1970",
      choice4: "1975",
      answer: "1967",
    },

    {
      qns: "Which country is not a founding member of ASEAN?",
      choice1: "Brunei",
      choice2: "Singapore",
      choice3: "Thailand",
      choice4: "Malaysia",
      answer: "Brunei",
    },

    {
      qns: "Which country does not celebrate their independence day in August?'",
      choice1: "Indonesia",
      choice2: "Singapore",
      choice3: "Laos",
      choice4: "Malaysia",
      answer: "Laos",
      trivia: "Laos' independence day is on 19 Jul",
    },

    {
      qns: "Which airport is Southeast Asia's busiest in 2015?",
      choice1: "Kuala Lumpur",
      choice2: "Suvarnabhumi, Bangkok",
      choice3: "Changi Airport",
      choice4: "Soekarno-Hatta, Jakarta",
      answer: "Changi Airport",
      trivia: "SIN:55.4m, CGK:54.1m, BKK:52.8m, KUL:48.9m",
    },

    {
      qns: "Which of these old cities is not a UNESCO World Heritage Site?",
      choice1: "Ancient Temples of Bagan",
      choice2: "Hoi An Ancient Town",
      choice3: "Historic City of Ayutthaya",
      choice4: "Historic City of Melaka",
      answer: "Ancient Temples of Bagan",
      trivia: "",
    },

    {
      qns: "These are popular snack but which of these companies is not founded in Southeast Asia?",
      choice1: "HACKS",
      choice2: "Tao Kae Noi",
      choice3: "White Rabbit Creamy Candy",
      choice4: "Mamee Monster",
      answer: "White Rabbit Creamy Candy",
      trivia: "White Rabbit was started in Shanghai in 1943",
    },

    {
      qns: "Southeast Asia is home to the world's largest cave, which is it?",
      choice1: "Hang Son Doong Cave",
      choice2: "Batu Caves",
      choice3: "Mulu Caves",
      choice4: "Chiang Dao Caves",
      answer: "Hang Son Doong Cave",
      trivia: "Hang Son Doong Cave is 200m high, 150m wide and 5km long",
    },

    {
      qns: "Indonesia has the largest population in Southeast Asia, which country has the next largest?",
      choice1: "Myanmar",
      choice2: "Philippines",
      choice3: "Thailand",
      choice4: "Vietnam",
      answer: "Philippines",
      trivia: "Indonesia: 259m, Philippines: 100m, Vietnam: 91m, Thailand: 68m, Myanmar: 51m",
    },

    {
      qns: "Palm oil production is huge in Southeast Asia, which country is the world's largest palm oil producer?",
      choice1: "Malaysia",
      choice2: "Philippines",
      choice3: "Indonesia",
      choice4: "Thailand",
      answer: "Indonesia",
      trivia: "Indonesia is the world's largest producer and Malaysia is the next largest",
    },
  ];

  var $heading = $('h1'),
      $score = $('.score'),
      $player1 = $('.player1'),
      $player2 = $('.player2'),
      $mainBoard = $('.mainBoard'),
      $answer = $('.answer'),
      $questionText = $('.question h2'),
      $choice = $('.choice'),
      $nextBtn = $('.nextBtn'),
      $resetBtn = $('.resetBtn')
      qnsNum = 0,
      ttlQns = 3,//Refers to total number of question for EACH player
      player1Score = 0,
      player2Score = 0;

  $choice.hide();
  $resetBtn.hide();

  $(document).ready(function(){
    randArray();
    //upon click, switch from welcome page to game play page
    $nextBtn.click(function(){
      //DOM manipulation to toggle show/hide question/answer
      var numOfQns = Math.ceil((qnsNum + 1) / 2);//Same as numberOfQuestions as per requirement

      $heading.css({"padding":"10px 0", "font-size":".9em", "color":"white", "background-color":"#404196", "border-radius":"5px"});
      $score.text("SCORE");
      $player1.text("Player 1 :  " + player1Score);
      $player2.text("Player 2 :  " + player2Score);
      $mainBoard.hide();
      $answer.hide();
      $choice.show();
      $nextBtn.text(playerTurn() + ":   Qns " + numOfQns + " of " + ttlQns);

      //display question and choices upon click
      for (var variable in quizzes) {// ------------------ REVISE THIS WITH FOR LOOP
        $questionText.show().text(quizzes[qnsNum].qns);
        $('#one').text(quizzes[qnsNum].choice1);
        $('#two').text(quizzes[qnsNum].choice2);
        $('#three').text(quizzes[qnsNum].choice3);
        $('#four').text(quizzes[qnsNum].choice4);
      }
    });//end of nextBtn click

    $choice.click(function(){
      //DOM manipulation to toggle show/hide choice/answer
      $choice.hide();
      //check answer
      if( (($(this).text())) === ((quizzes[qnsNum].answer)) ) {
        $answer.show().text("You are right!");
        if(qnsNum % 2 === 0) {
          player1Score++;
          $player1.text("Player 1 :  " + player1Score);
        } else if (qnsNum % 2 === 1)  {
          player2Score++;
          $player2.text("Player 2 :  " + player2Score);
        }
      } else {
        $answer.show().text("Sorry, your answer is incorrect! The correct answer is " + quizzes[qnsNum].answer);
      }
      isGameOver();
      qnsNum++;
    });//end of choice click

    $resetBtn.click(function(){
      $resetBtn.hide();
      $mainBoard.text("Click 'Let's Play Again!' when you are ready!");
      $nextBtn.show().text("Let's Play Again!");

      qnsNum = 0;
      player1Score = 0;
      player2Score = 0;
      randArray();
    })

  });//end of document.ready

  function randArray()  {
    quizzes.sort(function(){
      return .5 - Math.random();
    });
  }

  function playerTurn() {
    if(qnsNum % 2 === 0)  {
      return "Player 1";
    } else if (qnsNum %2 === 1) {
      return "Player 2";
    }
  }

  function isGameOver() {
    if((qnsNum + 1) === (ttlQns * 2)) {
      $choice.hide();
      $answer.hide();
      $questionText.hide();
      $nextBtn.hide();
      $resetBtn.show();

      if(player1Score > player2Score) {
        $mainBoard.show().text("Game over! Player 1, looks like you know Southeast Asia better than Player 2! You win this quiz!");
      } else if (player1Score < player2Score) {
        $mainBoard.show().text("Game over! Player 2, looks like you know Southeast Asia better than Player 1! You win this quiz!");
      } else {
        $mainBoard.show().text("Game over! It's a draw!");
      }
    }
  }

}//end of quizInit
window.onload = quizInit();
