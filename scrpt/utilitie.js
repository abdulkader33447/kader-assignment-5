function getInnerTextById(id) {
  const innerValue = document.getElementById(id).innerText;
  const convertedValue = parseInt(innerValue);
  return convertedValue;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

const test = "test";