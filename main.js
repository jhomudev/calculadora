function isNumber(event) {
  if (event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;
}
screenInput.addEventListener("keydown", (event) => {
  return isNumber(event);
});

screenInput.focus();

let isOpen = false;

keys.addEventListener("click", (e) => {
  const keyclicked = e.target,
    dataType = keyclicked.dataset;

  if (dataType.number) screenInput.value += dataType.number;
  if (dataType.math) screenInput.value += keyclicked.textContent;
  if (dataType.operation) {
    if (dataType.operation == "clear") screenInput.value = "";
    if (dataType.operation == "deleteChar")
      screenInput.value = screenInput.value.slice(0, -1);
    if (dataType.operation == "igual")
      screenInput.value = eval(screenInput.value);
    if (dataType.operation == "%")
      screenInput.value = eval(screenInput.value) / 100;
    if (dataType.operation == "()") {
      if (!isOpen) {
        screenInput.value += "(";
        isOpen = true;
      } else {
        screenInput.value += ")";
        isOpen = false;
      }
    }
  }
  screenInput.focus();
});
