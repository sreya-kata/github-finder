// Search input
const searchUser = document.querySelector("#searchUser");
const github = new GitHub;
const ui = new UI;

searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;
  if (userText !== "") {
    // Make HTTP call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === "Not Found") {
          // Show alert
          ui.showAlert("User does not exist", "alert alert-danger");
        } else {
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
    } else {
      // Clear profile
      ui.clearProfile();
    }
});