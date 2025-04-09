const chemistryA = ["Meeting today's global economic and environmental needs while preserving the options of future generations to meet theirs.", "What are the two temperature scales that are commonly used in scientific work?", "Which scale is generally used worldwide for measurements in the laboratory?", "Which scale is almost always used when calculations incorporate temperature data?", "What is a comfortable room temperature?", "What is the normal body temperature?", "What temperature does Kelvin assign as the lowest temperature that can be achieved?", "What is the lowest temperature assigned by Kelvin called?", "What is the distance between C atoms in a diamond?", "The energy transferred as heat that is required to raise the temperature of 1.00g of pure liquid water from 14.5 degrees celsius to 15.5 degrees celcius."];
const chemistryQ = ["sustainable development", "celcius and kelvin", "celcius scale", "kelvin", "20", "37", "0", "absolute zero", "0.154nm", "calorie"];
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
  }  else if(chemQuestions.textContent == chemistryA[9] && chemAnswers.value == chemistryQ[9]) {
    chemVerify.classList.add("hide");
    chemQuestions.innerHTML = "Congratulations, you can move on to the next <a href='file:///C:/j.s-basics/chemistryB1.html'>level</a>";
    chemAnswers.classList.add("hide");
    chemSubmit.classList.add("hide");
    chemAnswers.value = "";
  } else {
    chemVerify.classList.remove("hide");
    chemVerify.classList.add("chem-verify-bad");
    chemVerify.textContent = "You are incorrect!";
  };
});