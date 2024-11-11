let content = document.querySelector("#content");

function data() {
  fetch("https://api.github.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    content.innerText = data.map((item) => item.login).join("\n");
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
} 