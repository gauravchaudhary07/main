const form = document.getElementById("survey-form");

form.addEventListener("submit", handle_submit);

function handle_submit(event)
{
  event.preventDefault();
  alert("Thank you!");
}
