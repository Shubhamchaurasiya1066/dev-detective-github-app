# Dev Detective 🔍 

A GitHub User Search Application built using HTML, CSS, and JavaScript. This project connects to the GitHub API and displays real-time user data along with their latest repositories.

---

## 🚀 Features (Level 2)

- 🔎 Search any GitHub username
- 👤 Display user profile:
  - Avatar Image
  - Name
  - Bio
  - Join Date (Formatted)
  - Profile Link
- ⚡ Loading state while fetching data
- ❌ Error handling (User Not Found)
- 📦 Fetch and display Top 5 latest repositories
- 🔗 Clickable repository links (open in new tab)

---

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- Async/Await

---

## 📡 API Used

### 1. User API
https://api.github.com/users/{username}

### 2. Repositories API
(From `repos_url` in user data)

---

## 📂 Project Structure
github-search-app/
│── index.html
│── style.css
│── script.js

---

## ▶️ How It Works

1. User enters a GitHub username
2. App fetches user data using Fetch API
3. Displays profile details dynamically
4. Fetches repositories using `repos_url`
5. Shows top 5 latest repositories

---

## 📅 Date Formatting

API provides date in ISO format:2023-01-25T12:00:00Z

Converted to:25 Jan 2023

---

## ⚠️ Error Handling

- If user not found → Shows "User Not Found"
- App does not crash

---

## 💡 What I Learned

- API Integration
- Fetch API & Async/Await
- DOM Manipulation
- Error Handling
- Working with JSON data

---

## 📌 Future Improvements

- Battle Mode (Compare two users)
- Improved UI design
- Dark/Light theme

---

## 👨‍💻 Author

**Shubham Chaurasiya**
