const siteTitle = document.getElementById("site-title");
const myInput = document.getElementById("my-input");
const alertBtn = document.getElementById("alert-btn");
const textArea = document.getElementById("my-text-area");

siteTitle.innerText = "My Brand New Website!";

alertBtn.disabled = true;

function Logger(...newLoggers) {
  const loggers = newLoggers || [];
  return {
    add: (logger) => loggers.push(logger),

    log: (text) => loggers.forEach((logger) => logger(text)),
  };
}

const logger = new Logger(console.log, alert);

function inputChanged() {
  alertBtn.disabled = !myInput.value;
}

function updateText() {
  triggerAlerts(myInput.value);
  textArea.value += `${myInput.value}\r\n`;
  myInput.value = "";
  inputChanged();
  myInput.focus();
}

function triggerAlerts(text) {
  logger.log(text);
}

myInput.addEventListener("input", () => {
  inputChanged();
});
