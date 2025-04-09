const chemistryA = ["A mixture of carbon and hydrogen containing compounds.", "When a mixture is seperated into its pure components.", "What is used to remove an undissolved solid from a solution?", "What increases purity?", "What consists of a network of carbon atoms linked by chemical bonds?", "In what year did over 193 million different compounds get identified in CAS?", "Which database was created by the American Chemical Society?", "A compound has a definite composition of its combining elements.", "A compound has a definite composition of its combining elements.", "Which atoms are gray or black?", "Which atoms are white?", "Which atoms are blue?", "Which atoms are red?", "It is composed of ions which are electrically charged atoms or group of atoms.", "What do water and sugar consist of?", "What represents the composition of any compound?"];
const chemistryQ = ["hydrocarbon", "purification", "filtration", "repetition", "diamond", "2021", "CAS", "law of definite proportions", "law of constant composition", "C", "H", "N", "O", "NaCl", "molecules", "chemical formula"];
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
    chemVerify.classList.add("hide");
    chemQuestions.innerHTML = "Congratulations, you can move on to the next <a href='https://inuni4.github.io/chemB/chemistryB3.html'>level</a>";
    chemAnswers.classList.add("hide");
    chemSubmit.classList.add("hide");
    chemAnswers.value = "";
  } else {
    chemVerify.classList.remove("hide");
    chemVerify.classList.add("chem-verify-bad");
    chemVerify.textContent = "You are incorrect!";
  };
});
