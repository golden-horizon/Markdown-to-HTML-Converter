# Markdown to HTML Converter

A simple **JavaScript Markdown to HTML converter** that transforms basic Markdown syntax into HTML using **regular expressions**. The application provides both the **raw HTML output** and a **live HTML preview** as the user types.

## Features

- Convert Markdown headings:
  - `# Heading 1`
  - `## Heading 2`
  - `### Heading 3`
- Convert **bold text** using `**text**` or `__text__`
- Convert *italic text* using `*text*` or `_text_`
- Convert images  
  `![alt-text](image-source)`
- Convert links  
  `[link text](URL)`
- Convert blockquotes  
  `> quote`
- Live Markdown conversion using JavaScript **input events**
- Displays both:
  - Raw HTML code
  - Rendered HTML preview

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Regular Expressions (Regex)

## How It Works

The application listens for input inside the Markdown textarea. When the user types Markdown syntax, JavaScript uses **regular expressions** to detect patterns and convert them into the corresponding HTML elements.

Example conversions:

| Markdown | HTML |
|--------|------|
| `# Title` | `<h1>Title</h1>` |
| `**bold**` | `<strong>bold</strong>` |
| `*italic*` | `<em>italic</em>` |
| `[Google](https://google.com)` | `<a href="https://google.com">Google</a>` |
| `![alt](image.png)` | `<img alt="alt" src="image.png">` |
| `> quote` | `<blockquote>quote</blockquote>` |

## How to Run

1. Clone the repository


git clone https://github.com/yourusername/markdown-converter.git


2. Open the project folder.

3. Open **index.html** in your browser.

4. Start typing Markdown in the input box.

## Future Improvements

- Support for lists
- Code blocks
- Inline code
- Tables
- Advanced Markdown syntax

## Author

**Navid Ghobadpour**

Cybersecurity & Software Development Student  
Interested in **Cybersecurity, Web Development, and Secure Systems**.
