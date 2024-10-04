const loading = document.querySelector(".loading");

loading.textContent = "|";

function changeLoading(value) {
  if (value === "|") {
    value = "/";
  } else if (value === "/") {
    value = "—";
  } else if (value === "—") {
    value = "\\";
  } else if (value === "\\") {
    value = "|";
  }
  loading.textContent = value;
  setTimeout(() => {
    changeLoading(value);
  }, 200);
}

// Inicia el bucle
setTimeout(() => {
  changeLoading(loading.textContent);
}, 500);
