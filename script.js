const searchBtn = document.getElementById("searchBtn")
const input = document.getElementById("searchInput")
const loading = document.getElementById("loading")
const error = document.getElementById("error")
const profile = document.getElementById("profile")
const repos = document.getElementById("repos")

searchBtn.addEventListener("click", () => {
  const username = input.value.trim()
  if (username !== "") {
    fetchUser(username)
  }
});

async function fetchUser(username) {
  try {
    error.classList.add("hidden")
    profile.classList.add("hidden")
    repos.classList.add("hidden")
    loading.classList.remove("hidden")

    const res = await fetch(`https://api.github.com/users/${username}`)

    if (!res.ok) {
      throw new Error("User not found")
    }

    const data = await res.json()

    displayUser(data)

    fetchRepos(data.repos_url)

  } catch (err) {
    error.classList.remove("hidden")
  } finally {
    loading.classList.add("hidden")
  }
}

function displayUser(data) {
  profile.classList.remove("hidden")

  document.getElementById("avatar").src = data.avatar_url
  document.getElementById("name").innerText = data.name || data.login
  document.getElementById("bio").innerText = data.bio || "No bio available"

  const date = new Date(data.created_at)
  document.getElementById("joined").innerText =
    "Joined: " + date.toDateString()

  document.getElementById("profileLink").href = data.html_url
}

async function fetchRepos(url) {
  const res = await fetch(url)
  const data = await res.json()

  const repoList = document.getElementById("repoList")
  repoList.innerHTML = ""

  data.slice(0, 5).forEach(repo => {
    const li = document.createElement("li")
    li.innerHTML = `
      <a href="${repo.html_url}" target="_blank">
        ${repo.name}
      </a>
    `
    repoList.appendChild(li)
  })

  repos.classList.remove("hidden")
}