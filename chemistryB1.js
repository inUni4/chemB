const chemistryA = ["The smallest particle of an element that retains the characteristic chemical properties of that element.","Substances that are composed of only one type of atom.", "Particles consisting of more than one atom in which the atoms are held together by chemical bonds.", "A pure substance composed of two or more different elements held together by chemical bonds.", "Whether a substance is a solid, liquid or gas.", "Has a rigid shape and fixed volume that changes little as temperature and pressure change.", "Has a fixed volume but is fluid, it takes on the shape of its container and has no definite shape of its own.", "Its fluid but its volume is determined by the size of its container. Its volume varies with changes in temperature and pressure.", "At what temperature is all matter in its solid state?", "At what state is matter at low enough temperatures?", "What happens when volume changes?", "What increases when a given mass of material melts?", "What increases upon evaporation?", "All matter consists of extremely tiny particles (atoms, molecules or ions) in constant motion.","What happens when the temperature is high?", "This is the world of experiments and observations. For example chemical and physical processes.", "The level of individual particles that make up all matter. Such as atoms and molecules.", "The level of individual particles that make up all matter. Such as atoms and molecules.", "Has a set of unique properties by which it can be recognized.", "At what temperature does water melt under normal atmospheric pressure?", "At what temperature does water boil under normal atmospheric pressure?", "What cannot be seperated into two or more different species by any physical technique at ordinary temperatures?", "What consists of two or more pure substances that can be seperated by physical techniques?", "The composition of the mixture is not uniform.", "The composition of the mixture is uniform throughout.", "Anything that occupies space and has mass.", "What cannot be subdivided by chemical or physical processes."];
const chemistryQ = ["atom", "element", "molecule", "chemical compound", "state", "solid", "liquid", "gas", "low", "solid", "the state of matter also changes.", "volume", "volume", "the kinetic molecular theory of matter", "the faster the particles move.", "macroscopic", "submicroscopic", "particulate", "pure substance", "0", "100", "pure substance", "mixture", "heterogeneous", "homogeneous", "matter", "element"];
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
  } else if(chemQuestions.textContent == chemistryA[2] && chemAnswers.value == chemistryQ[2]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[3];
  } else if(chemQuestions.textContent == chemistryA[3] && chemAnswers.value == chemistryQ[3]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[4];
  } else if(chemQuestions.textContent == chemistryA[4] && chemAnswers.value == chemistryQ[4]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[5];
  } else if(chemQuestions.textContent == chemistryA[5] && chemAnswers.value == chemistryQ[5]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[6];
  } else if(chemQuestions.textContent == chemistryA[6] && chemAnswers.value == chemistryQ[6]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[7];
  } else if(chemQuestions.textContent == chemistryA[7] && chemAnswers.value == chemistryQ[7]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[8];
  } else if(chemQuestions.textContent == chemistryA[8] && chemAnswers.value == chemistryQ[8]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[9];
  } else if(chemQuestions.textContent == chemistryA[9] && chemAnswers.value == chemistryQ[9]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[10];
  } else if(chemQuestions.textContent == chemistryA[10] && chemAnswers.value == chemistryQ[10]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[11];
  } else if(chemQuestions.textContent == chemistryA[11] && chemAnswers.value == chemistryQ[11]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[12];
  } else if(chemQuestions.textContent == chemistryA[12] && chemAnswers.value == chemistryQ[12]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[13];
  } else if(chemQuestions.textContent == chemistryA[13] && chemAnswers.value == chemistryQ[13]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[14];
  } else if(chemQuestions.textContent == chemistryA[14] && chemAnswers.value == chemistryQ[14]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[15];
  } else if(chemQuestions.textContent == chemistryA[15] && chemAnswers.value == chemistryQ[15]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[16];
  } else if(chemQuestions.textContent == chemistryA[16] && chemAnswers.value == chemistryQ[16]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[17];
  } else if(chemQuestions.textContent == chemistryA[17] && chemAnswers.value == chemistryQ[17]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[18];
  } else if(chemQuestions.textContent == chemistryA[18] && chemAnswers.value == chemistryQ[18]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[19];
  } else if(chemQuestions.textContent == chemistryA[19] && chemAnswers.value == chemistryQ[19]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[20];
  } else if(chemQuestions.textContent == chemistryA[20] && chemAnswers.value == chemistryQ[20]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[21];
  } else if(chemQuestions.textContent == chemistryA[21] && chemAnswers.value == chemistryQ[21]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[22];
  } else if(chemQuestions.textContent == chemistryA[22] && chemAnswers.value == chemistryQ[22]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[23];
  } else if(chemQuestions.textContent == chemistryA[23] && chemAnswers.value == chemistryQ[23]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[24];
  } else if(chemQuestions.textContent == chemistryA[24] && chemAnswers.value == chemistryQ[24]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[25];
  } else if(chemQuestions.textContent == chemistryA[25] && chemAnswers.value == chemistryQ[25]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryA[26];
  } else if(chemQuestions.textContent == chemistryA[26] && chemAnswers.value == chemistryQ[26]) {
    chemVerify.classList.add("hide");
    chemQuestions.innerHTML = "Congratulations, you can move on to the next <a href='file:///C:/j.s-basics/chemistryBasics10.html'>level</a>";
    chemAnswers.classList.add("hide");
    chemSubmit.classList.add("hide");
    chemAnswers.value = "";
  } else {
    chemVerify.classList.remove("hide");
    chemVerify.classList.add("chem-verify-bad");
    chemVerify.textContent = "You are incorrect!";
  };
});