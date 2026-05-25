export function copyToClipboard(text){
  navigator.clipboard.writeText(text).then(
    () => showToast("Copied to clipboard!", false),
    () => showToast("Copy failed", true)
  );
}

export function showToast(msg, isError = false){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = "toast" + (isError ? " error" : "");
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1800);
}