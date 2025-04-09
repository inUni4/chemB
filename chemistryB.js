const chemistryA = ["The study of matter.","Anything that occupies space and has mass.", "The measure of the amount of matter that an object contains.", "A tentative explanation or prediction of experimental observations.", "A concise verbal or mathematical statement of a relation that is always the same under any conditions.", "A well tested, unifying principle that explains a body of facts and the laws based on them.", "Something, an event, phenomena that is noticed or observed.", "An organized procedure used to test a hypothesis.", "The process of interpreting the meaning of the data we have collected, organized and displayed in the form of a chart or graph.", "Measurements and observations recorded in an experiment.", "It is used to show relationships between groups.", "It is used to show how a part of something relates to the whole.", "It is used to show continuing data.", "Numerical data, such as the mass of a substance or the temperature at which it melts.", "Consists of non numerical observations, such as the color of a substance or its physical appearance.", "When did the concept of green chemistry begin to take root?", "Which two authors stated 12 principles of green chemistry in their book?", "In which book did Paul Anastas and John Warner state the 12 principles of Green chemistry?", "In which year was the book Green Chemistry: Theory and Practise published?"];
const chemistryQ = ["chemistry", "matter", "mass", "hypothesis", "law", "theory", "observation", "experiment", "Data Analysis", "data", "bar graph", "pie chart", "line graph", "quantitative information", "qualitative information", "More than 30 years ago.", "Paul Anastas and John Warner", "Green Chemistry: Theory and Practise", "1998"];
const chemWrapper = document.querySelector(".chem-wrapper");
const chemQuestions = document.querySelector(".chem-questions");
const chemAnswers = document.querySelector(".chem-answers");
const chemSubmit = document.querySelector(".chem-submit");
const chemVerify = document.querySelector(".chem-verify");

chemVerify.classList.add("hide");
chemQuestions.textContent = chemistryA[0];

chemSubmit.addEventListener("click", () => {
  if(chemQuestions.textContent == chemistryA[0] && chemAnswers.value == chemistryQ[0]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[1];
  } else if(chemQuestions.textContent == chemistryA[1] && chemAnswers.value == chemistryQ[1]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[2];
  }  else if(chemQuestions.textContent == chemistryA[2] && chemAnswers.value == chemistryQ[2]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[3];
    chemAnswers.value = "";
  }  else if(chemQuestions.textContent == chemistryA[3] && chemAnswers.value == chemistryQ[3]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[4];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[4] && chemAnswers.value == chemistryQ[4]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[5];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[5] && chemAnswers.value == chemistryQ[5]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[6];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[6] && chemAnswers.value == chemistryQ[6]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[7];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[7] && chemAnswers.value == chemistryQ[7]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[8];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[8] && chemAnswers.value == chemistryQ[8]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[9];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[9] && chemAnswers.value == chemistryQ[9]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[10];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[10] && chemAnswers.value == chemistryQ[10]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[11];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[11] && chemAnswers.value == chemistryQ[11]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[12];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[12] && chemAnswers.value == chemistryQ[12]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[13];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[13] && chemAnswers.value == chemistryQ[13]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[14];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[14] && chemAnswers.value == chemistryQ[14]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[15];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[15] && chemAnswers.value == chemistryQ[15]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[16];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[16] && chemAnswers.value == chemistryQ[16]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[17];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[17] && chemAnswers.value == chemistryQ[17]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryA[18];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryA[18] && chemAnswers.value == chemistryQ[18]) {
    chemVerify.classList.add("hide");
    chemQuestions.innerHTML = "Congratulations, you can move on to the next <a href='https://inuni4.github.io/chemB/chemistryB1.html'>level</a>";
    chemAnswers.classList.add("hide");
    chemSubmit.classList.add("hide");
    chemAnswers.value = "";
  } else {
    chemVerify.classList.remove("hide");
    chemVerify.classList.add("chem-verify-bad");
    chemVerify.textContent = "You are incorrect!";
  };
});
