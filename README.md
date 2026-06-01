# Minimalist Developer Portfolio

A premium, typography-focused professional web development portfolio designed with an editorial aesthetic. This project features dynamic project filtering, responsive layouts, and clean user interactions built from scratch using semantic HTML5, Tailwind CSS, and vanilla JavaScript.

## 🚀 Live Demo
[View Live Site](https://esther-kentomahun.github.io/)

---

## ✨ Features

* **Dynamic Category Filtering:** Instantly switch views between **All**, **HTML/CSS**, and **JavaScript** projects using custom array-filtering logic.
* **Real-Time Global Search:** A built-in search bar that monitors keystrokes and filters project titles dynamically via case-insensitive matching.
* **Graceful Error Handling:** Implements a smooth "No results found" state if a user's search query doesn't match any project titles.
* **Premium Editorial Aesthetic:** High-end layout design focusing on negative space, crisp borders, sophisticated typography, and interactive grayscale hover transitions on project image cards.
* **Fully Responsive Grid:** Optimized experience across mobile, tablet, and desktop devices using modern Tailwind layout utilities.

---

## 🛠️ Tech Stack

* **Structure:** HTML5 (Semantic Elements)
* **Styling:** Tailwind CSS (Utility-first framework)
* **Logic & Interactivity:** Vanilla JavaScript (ES6+)

---

## 🧠 Key Coding Concepts Learned & Implemented

### 1. Array Filtering & UI Syncing
Instead of hardcoding layout components, all projects are stored inside a central array of objects. JavaScript processes this data dynamically using the `.filter()` method to feed the template display machine:

```javascript
const filtered = myProjects.filter((project) => project.category === "javascript");
displayProjects(filtered);

👩‍💻 Author
Kentomahun Esther
 GitHub: @esther-kentomahun