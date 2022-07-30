const checkbox = document.getElementById("checkbox");
const CurrentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;
const bUseLegacyCode = false;

window.onload = Startup();

function Startup() {
  console.log("Startup function called and executed successfully.");
  if (CurrentTheme) {
    document.documentElement.setAttribute("data-theme", CurrentTheme);

    if (CurrentTheme === "dark") {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  } else {
    GetSysColorMode();
  }
}

checkbox.addEventListener("change", () => {
  IfChecked();
});

function GetSysColorMode() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    checkbox.checked = true;
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    checkbox.checked = false;
  }
  console.log("GetSysColorMode function called and executed successfully.");
}

function IfChecked() {
  if (checkbox.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
  console.log("IfChecked function called and executed successfully.");
}
