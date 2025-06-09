const check_button = document.getElementById("check_button");
const review_button = document.getElementById("review_button");
const feedback = document.getElementById("feedback");
const review = document.getElementById("review");
const review_text = document.getElementById("review-text");
const next_button = document.getElementById("next_link");
const retry_button = document.getElementById("retry_link");
const card = document.getElementById("card");

document.addEventListener("DOMContentLoaded", () => {
  let isAnswerCorrect = false;

  check_button.addEventListener("click", function (event) {
    event.preventDefault();
    const selected = document.querySelector("input[name='answer']:checked");

    if (!selected) {
      feedback.textContent = "Bitte wählen Sie eine Antwort aus.";
      feedback.style.color = "black";
      return;
    }

    if (selected.value === "B") {
      feedback.textContent =
        "Richtig. Diese Annahme einer Herausforderung hat sich am Montagmorgen schnell bestätigt. Peter hat die Situation als drohende Überforderung bewertet und damit eine Stressreaktion ausgelöst.";
      feedback.style.color = "green";
      isAnswerCorrect = true;
      check_button.setAttribute("hidden", true);
      review_button.removeAttribute("hidden");
    } else {
      feedback.textContent =
        "Falsch. Bei dieser Grundannahme wäre Peter davon ausgegangen, die Situation gut zu meistern. Er hätte sie nicht als bedrohlich bewertet und sich nicht gestresst gefühlt.";
      feedback.style.color = "red";
      isAnswerCorrect = false;
      review_button.removeAttribute("hidden");
      check_button.setAttribute("hidden", true);
    }
  });

  review_button.addEventListener("click", function (event) {
    event.preventDefault();
    review.style.display = "flex";

    if (isAnswerCorrect) {
      review_text.textContent = "Glückwunsch! Sie haben den Test bestanden!";
      next_button.removeAttribute("hidden");
      retry_button.setAttribute("hidden", true);
      card.scrollTop = 0;
      card.style.overflow = "hidden";
    } else {
      review_text.textContent =
        "Leider haben Sie den Test nicht bestanden. Versuchen Sie es noch einmal!";
      retry_button.removeAttribute("hidden");
      next_button.setAttribute("hidden", true);
      card.scrollTop = 0;
      card.style.overflow = "hidden";
    }
  });
});
