const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let text = markdownInput.value;

  // Headings
  text = text.replace(/^\s*###\s+(.*)$/gm, "<h3>$1</h3>");
  text = text.replace(/^\s*##\s+(.*)$/gm, "<h2>$1</h2>");
  text = text.replace(/^\s*#\s+(.*)$/gm, "<h1>$1</h1>");

  // Blockquotes
  text = text.replace(/^\s*>\s+(.*)$/gm, "<blockquote>$1</blockquote>");

  // Images
  text = text.replace(
    /!\[([^\]]+)\]\(([^)]+)\)/g,
    '<img alt="$1" src="$2">'
  );

  // Links
  text = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>'
  );

  // Bold (** or __)
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/__(.*?)__/g, "<strong>$1</strong>");

  // Italic (* or _)
  text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
  text = text.replace(/_(.*?)_/g, "<em>$1</em>");

  // Remove line breaks between converted elements
  text = text.replace(/\n/g, "");

  return text;
}

markdownInput.addEventListener("input", () => {
  const converted = convertMarkdown();

  htmlOutput.textContent = converted;
  preview.innerHTML = converted;
});
