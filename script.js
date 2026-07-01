function getAnswer() {
  let question = document.getElementById("question").value.toLowerCase();
  let answer = "";

  if (question.includes("what is ai")) {
    answer = "AI means Artificial Intelligence. It allows machines to think like humans.";
  }
  else if (question.includes("what is html")) {
    answer = "HTML is used to create the structure of web pages.";
  }
  else if (question.includes("what is css")) {
    answer = "CSS is used to style web pages.";
  }
  else if (question.includes("what is javascript")) {
    answer = "JavaScript makes web pages interactive.";
  }
  else {
    answer = "Sorry, I don't know this yet. Try asking basics like AI, HTML, CSS, JS.";
  }

  document.getElementById("answerBox").innerText = answer;
}