// Contact section
// First get the data to display according to the language and split it to style it.
// The submit is handled through the website formsubmit.co and axios wich depending on the result will trigger a response to the users to see

// Seccion de Contacto
// primero se obtiene la informacion dependiendo del lenguaje y se separa en piezas para darle estilo.
// El envio del formato es manejado a traves del sitio formsubmit.co y axio con el cual a partir del resultado de la operacion dara un resultado que el usuario puede ver

var ContentContact = function ContentContact(_ref) {
  var formCurrentData = _ref.formCurrentData;

  // let formCurrentData = language === "en" ? formData[1] : formData[0];
  return React.createElement(
    "section",
    { className: "content-form", id: "content-form", tabIndex: "0" },
    React.createElement(
      "div",
      { className: "content-form-container" },
      React.createElement(
        "div",
        { className: "content-form-text" },
        React.createElement(
          "h2",
          null,
          formCurrentData.title
        ),
        React.createElement(
          "p",
          { id: "content-form-text-text" },
          formCurrentData.text.split("\n")[0],
          React.createElement("br", null),
          React.createElement("br", null),
          formCurrentData.text.split("\n")[1],
          React.createElement("br", null),
          React.createElement("br", null),
          formCurrentData.text.split("\n")[2]
        )
      ),
      React.createElement(
        "div",
        { className: "content-form-form" },
        React.createElement(
          "p",
          { id: "formSent" },
          formCurrentData.formSent
        ),
        React.createElement(
          "form",
          {
            className: "form",
            id: "ContactForm",
            method: "post",
            onSubmit: function onSubmit(e) {
              e.preventDefault();
              var form = e.target;

              document.getElementById("submitLoading").style.display = "block";
              document.getElementById("submitButton").style.display = "none";

              axios.defaults.headers.post["Content-Type"] = "application/json";
              axios.post("https://formsubmit.co/ajax/6b09db79274ba4b5e642ee65d5f484ce", {
                name: form.elements["name"].value,
                email: form.elements["email"].value,
                message: form.elements["message"].value
              }, { timeout: 2000 }).then(function (response) {
                console.log(response, "success");
                form.style.display = "none";
                document.getElementById("ContactForm").style.display = "none";
                document.getElementById("formSent").style.display = "block";
              }).catch(function (error) {
                console.log(error, "Error");
                alert("Error");
                document.getElementById("submitLoading").style.display = "block";
                document.getElementById("submitButton").style.display = "none";
              });
            }
          },
          React.createElement(
            "label",
            { htmlFor: "name" },
            formCurrentData.nameLabel
          ),
          React.createElement("input", {
            type: "text",
            placeholder: formCurrentData.namePlaceholder,
            id: "name",
            name: "name",
            required: true
          }),
          React.createElement(
            "label",
            { htmlFor: "email" },
            "Email"
          ),
          React.createElement("input", {
            type: "email",
            id: "email",
            name: "email",
            placeholder: formCurrentData.emailPlaceholder,
            required: true
          }),
          React.createElement(
            "label",
            { htmlFor: "message" },
            formCurrentData.textAreaLabel
          ),
          React.createElement("textarea", {
            className: "contactanos-form-textarea",
            placeholder: formCurrentData.textAreaPlaceholder,
            id: "message",
            name: "message",
            required: true
          }),
          React.createElement(
            "button",
            { id: "submitButton", type: "submit" },
            formCurrentData.submitButtonText
          ),
          React.createElement(
            "p",
            { id: "submitLoading" },
            formCurrentData.submitLoadingText
          )
        )
      )
    )
  );
};