const chemistryA = ["Properties that can be observed and measured without changing the composition of a substance.", "The ratio of the mass of an object to its volume, is a physical property useful for identifying substances.", "What affects the numerical values of the properties of a sample of matter?", "What is the decimal system of units in the sciences often called?", "What is the decimal system of units in the scieces often referred to?", "What is the rare property of water?", "What happens to density when temperature increases?", "What properties depend on the amount of substance present?", "Properties that do not depend on the amount of substance.", "At what temperature does a sample of ice melt, no matter whether it is an ice cube or an iceberg?", "Is density an extensive or intensive property?", "Is mass an intensive or extensive property?", "Is volume an extensive or intensive property?", "A change in which the identity of a substance is preserved even though it may have changed its physical state.", "A change in which one or more substances are transformed into one or more different substances.", "The representation of chemical change using chemical formulas.", "An important principle of chemical reactions.", "Chemical reactions that a substance might undergo.", "It vigorously reacts with Oxygen gas."];
const chemistryQ = ["physical property", "density", "temperature", "Le System International d'Unites", "SI Units", "its solid form is less dense than its liquid form.", "it decreases.", "extensive properties", "intensive properties", "0", "intensive property", "extensive property", "extensive property", "physical change", "chemical change", "chemical equation", "matter is conserved.", "chemical property", "hydrogen gas"];
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