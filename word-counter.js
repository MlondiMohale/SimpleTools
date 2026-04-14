const input = document.getElementById("textInput");

input.addEventListener("input", () => {
  const text = input.value;

  // Words
  const words = text.trim().split(/\s+/).filter(w => w.length > 0);

  // Characters
  const chars = text.length;

  // Sentences
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);

  document.getElementById("words").textContent = words.length;
  document.getElementById("chars").textContent = chars;
  document.getElementById("sentences").textContent = sentences.length;
});

// Copy text
function copyText() {
  const text = document.getElementById("textInput").value;

  if (!text) {
    alert("Nothing to copy!");
    return;
  }

  navigator.clipboard.writeText(text);
  alert("Text copied to clipboard!");
}

// Clear text
function clearText() {
  document.getElementById("textInput").value = "";

  // reset counters
  document.getElementById("words").textContent = 0;
  document.getElementById("chars").textContent = 0;
  document.getElementById("sentences").textContent = 0;
}