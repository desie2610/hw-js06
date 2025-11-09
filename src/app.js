import { createButton } from "./btn.js";
import { showMessage } from "./message.js";

const app = document.getElementById("app");

const button = createButton("Натисни мене", () => {
  showMessage(app, "Click");
});

app.appendChild(button);