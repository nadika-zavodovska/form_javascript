function showForm(formNode) {
  return new FormData(formNode);
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  showForm(form);
  const data = Array.from(showForm(form).entries());

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "your username",
    Password: "your password",
    To: "youremail@gmail.com",
    From: "youremail@gmail.com",
    Subject: "Email from $your website",
    Body: `Your name: ${data[0][1]}
    <br />
    Your age: ${data[2][1]}`,
  }).then((message) => alert(message));
}

const form = document.getElementById("form");
form.addEventListener("submit", handleFormSubmit);
