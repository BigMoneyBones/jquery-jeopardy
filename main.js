const main = async () => {
  // Load JSON file
  const httpResponse = await fetch("jeopardy.json");
  const data = await httpResponse.json();

  // ********** JQuery Selectors **********
  const twoHunnit = $(".200");
  const fourHunnit = $(".400");
  const sixHunnit = $(".600");
  const eightHunnit = $(".800");
  const tenHunnit = $(".1000");
  const score = $("#score");
  const question = $("#question");
  const answer = $("#answer");
  const form = $("#form");
  const submit = $("#submit"); //submit button

  // ********** Global Variables **********
  let randomObject; // Allows variable to be grabbed for random question function
  let isClicked = false;
  let newQuestion = "";

  //  ********** JQuery Score **********
  let scoreTotal = localStorage.getItem("scoreTotal");
  if (scoreTotal === null) {
    scoreTotal = 0;
    score.text(`Score:  ${Number(scoreTotal)}`);
  } else {
    score.text(`Score:  ${Number(scoreTotal)}`);
  }

  // ********** JQuery Functions **********
  const randomQuestion = function (value) {
    // Get random question from data
    randomObject = data[Math.ceil(Math.random() * data.length - 1)];
    while (randomObject.value !== value) {
      randomObject = data[Math.ceil(Math.random() * data.length - 1)];
    }
    console.log(randomObject);
    question.text(`${randomObject.question}?`);
    return randomObject;
  };

  // ********** JQuery Event Listeners **********

  // 200
  // Jquery event listener with an arrow function
  twoHunnit.on("click", (event) => {
    if (isClicked === false) {
      if ($(event.target).hasClass("disable")) {
      } else {
        newQuestion = randomQuestion("$200");
        $(event.target).text("");
        $(event.target).addClass("disable");
        isClicked = true;
        // buttonEnable = true;
        $("#submit").prop("disabled", false);
      }
    }
  });

  // 400
  // Jquery event listener with an arrow function
  fourHunnit.on("click", (event) => {
    if (isClicked === false) {
      if ($(event.target).hasClass("disable")) {
      } else {
        newQuestion = randomQuestion("$400");
        $(event.target).text("");
        $(event.target).addClass("disable");
        isClicked = true;
        // buttonEnable = true;
        $("#submit").prop("disabled", false);
      }
    }
  });

  // 600
  sixHunnit.on("click", (event) => {
    if (isClicked === false) {
      if ($(event.target).hasClass("disable")) {
      } else {
        newQuestion = randomQuestion("$600");
        $(event.target).text("");
        $(event.target).addClass("disable");
        isClicked = true;
        // buttonEnable = true;
        submit.prop("disabled", false);
      }
    }
  });

  // 800
  eightHunnit.on("click", (event) => {
    if (isClicked === false) {
      if ($(event.target).hasClass("disable")) {
      } else {
        newQuestion = randomQuestion("$800");
        $(event.target).text("");
        $(event.target).addClass("disable");
        isClicked = true;
        // buttonEnable = true;
        $("#submit").prop("disabled", false);
      }
    }
  });

  // 1000
  tenHunnit.on("click", (event) => {
    if (isClicked === false) {
      if ($(event.target).hasClass("disable")) {
      } else {
        newQuestion = randomQuestion("$1,000");
        $(event.target).text("");
        $(event.target).addClass("disable");
        isClicked = true;
        // buttonEnable = true;
        $("#submit").prop("disabled", false);
      }
    }
  });

  // ********** Submit Button **********

    form.on("submit", (event) => {
      event.preventDefault();

      let currentScore = randomObject.value.substring(1);
      if (currentScore === "1,000") {
        currentScore = 1000;
      }
      // Correct Answer Function
      const correctAnswer = () => {
        scoreTotal = Number(scoreTotal) + Number(currentScore);
        question.text(`Correct! + $ ${currentScore}! Select a new question!`);
        answer.val("");
        score.text(`Score: $ ${scoreTotal}`);
        localStorage.setItem("scoreTotal", scoreTotal);
        isClicked = false;
        $("#submit").prop("disabled", true);
      };

      // Incorrect Answer Function
      const incorrectAnswer = () => {
        scoreTotal = Number(scoreTotal) - Number(currentScore);
        score.text(`Score: $ ${scoreTotal}`);
        question.text(
          `Incorrect! The correct answer is: ${randomObject.answer} - $ ${currentScore}. Select a new question!`
        );
        answer.val("");
        localStorage.setItem("scoreTotal", scoreTotal);
        isClicked = false;
        $("#submit").prop("disabled", true);
      };

      // Conditional
      if (answer.val().toString() === randomObject.answer.toString()) {
        correctAnswer();
      } else {
        // If no input in the input field on 'submit'
        if (answer.val().toString() === undefined) {
          question.text(`${randomObject.question}? Please input an answer!`);
          $("#submit").prop("disabled", false);
        } else if (answer.val().toString() === "") {
          question.text(`${randomObject.question}? Please input an answer!`);
          $("#submit").prop("disabled", false);
        } else {
          incorrectAnswer();
        }
      }
    });
};

main();

// ~*~*~*~*~*~ TRADITIONAL JavaScript ~*~*~*~*~*~

// const main = async () => {
//   // Load JSON file
//   const httpResponse = await fetch("jeopardy.json");
//   const data = await httpResponse.json();

// ~*~*~*~*~*~ JavaScript Query Selectors ~*~*~*~*~*~

// const twos = document.queryselector("#twos");
// const fours = document.querySelector("#fours");
// const sixes = document.querySelector("#sixes");
// const eights = document.querySelector("#eights");
// const tens = document.querySelector("#tens");
// const score = document.querySelector("#score");
// const question = document.querySelector("#question");
// const answer = document.querySelector("#answer");
// const form = document.querySelector("#form");

// ~*~*~*~*~*~ JavaScript Score ~*~*~*~*~*~

// let scoreTotal = localStorage.getItem("scoreTotal");
// if (scoreTotal === null) {
//   scoreTotal = 0;
//   score.innerText = `Score:  ${scoreTotal}`;
// } else {
//   score.innerText = `Score:  ${scoreTotal}`;

// ~*~*~*~*~*~ JavaScript Functions ~*~*~*~*~*~

// const randomQuestion = function (value) {
//   // Get random question from data
//   randomObject = data[Math.ceil(Math.random() * data.length - 1)];
//   while (randomObject.value !== value) {
//     randomObject = data[Math.ceil(Math.random() * data.length - 1)];
//   }
//   console.log(randomObject);
//   question.innerText = `${randomObject.question}?`;
// };

// ~*~*~*~*~*~ JavaScript Event Listeners ~*~*~*~*~*~
// Traditional Event Listeners With Traditional Functions

// twos.addEventListener('click', function () {
//  if (event.target.hasClass("disable"))
//    } else {
//      randomQuestion("$200");
//      event.target.innerText = "";
//      event.target.addClass("disable");
//    }
// })

// fours.addEventListener('click', function () {
//  if (event.target.hasClass("disable"))
//    } else {
//      randomQuestion("$400");
//      event.target.innerText = "";
//      event.target.addClass("disable");
//    }
// })

// sixes.addEventListener('click', function () {
//  if (event.target.hasClass("disable"))
//    } else {
//      randomQuestion("$600");
//      event.target.innerText = "";
//      event.target.addClass("disable");
//    }
// })

// eights.addEventListener('click', function () {
//  if (event.target.hasClass("disable"))
//    } else {
//      randomQuestion("$800");
//      event.target.innerText = "";
//      event.target.addClass("disable");
//    }
// })

// tens.addEventListener('click', function () {
//  if (event.target.hasClass("disable"))
//    } else {
//      randomQuestion("$1000");
//      event.target.innerText = "";
//      event.target.addClass("disable");
//    }
// })

// ~*~*~*~*~*~ JavaScript Submit Button ~*~*~*~*~*~
//   form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     // Correct answer
//     const correctAnswer = function() {
//       scoreTotal = Number(scoreTotal) + Number(currentScore);
//       score.innerText = "Correct!";
//       answer.value = ("");
//       localStorage.setItem("scoreTotal", scoreTotal);
//     };

//     // Incorrect Answer
//     const incorrectAnswer = function() {
//       scoreTotal = Number(scoreTotal) - Number(currentScore);
//       score.innerText = `Score: ${scoreTotal}`;
//       question.innerText = `Incorrect! The correct answer is: ${randomObject.answer}`;
//       answer.value = "";
//       localStorage.setItem("scoreTotal", scoreTotal);
//     };

//     let currentScore = randomObject.value;

//     // Conditional
//     if (answer.value.toString() === randomObject.answer.toString()) {
//       correctAnswer();
//     } else {
//       incorrectAnswer();
//     }
//   });
// };

// main();
