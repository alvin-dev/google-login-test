function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential)
  console.log(data);

  fullName.textContent = data.name
  sub.textContent = data.sub
  given_name.textContent = data.given_name
  family_name.textContent = data.family_name
  email.textContent = data.email
  verifiedEmail.textContent = data.email_verified
  picture.setAttribute("src", data.picture)
}

window.onload = function () {

  google.accounts.id.initialize({
    client_id: "775206282948-4854amaggfgjfos9k9jrde4ukaovngj8.apps.googleusercontent.com", // https://console.cloud.google.com/apis/credentials
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "filled_black", 
      size: "large",
      type: "standard",
      shape: "pill",
      text: "$ {button.text}"
    }  // customization attributes https://developers.google.com/identity/gsi/web/tools/configurator
  );
    
  google.accounts.id.prompt(); // also display the One Tap dialog
}