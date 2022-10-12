let result = document.getElementById("result");
let workings = document.getElementById("working");

let buttons = Array.from(document.getElementsByClassName("buttons"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        workings.innerText = "";
        result.innerText = 0;
        break;
      case "DEL":
        if (workings.innerText) {
          workings.innerText = workings.innerText.slice(0, -1);
        }
        break;
      case "=":
        result.innerText = eval(workings.innerText);
        break;
      default:
        workings.innerText += e.target.innerText;
        result.innerText = 0;
    }
  });
});
