// Contact section
// First get the data to display according to the language and split it to style it.
// The submit is handled through the website formsubmit.co and axios wich depending on the result will trigger a response to the users to see

// Seccion de Contacto
// primero se obtiene la informacion dependiendo del lenguaje y se separa en piezas para darle estilo.
// El envio del formato es manejado a traves del sitio formsubmit.co y axio con el cual a partir del resultado de la operacion dara un resultado que el usuario puede ver

const ContentContact = () => {
  let formCurrentData = language === "en" ? formData[1] : formData[0];
  return (
    <section className="content-form" id="content-form">
      <div className="content-form-container">
        <div className="content-form-text">
          <h2>{formCurrentData.title}</h2>
          <p id="content-form-text-text">
            {formCurrentData.text.split("\n")[0]}
            <br></br>
            <br></br>
            {formCurrentData.text.split("\n")[1]}
            <br></br>
            <br></br>
            {formCurrentData.text.split("\n")[2]}
          </p>
        </div>
        <div className="content-form-form">
          <p id="formSent">{formCurrentData.formSent}</p>
          <form
            className="form"
            id="ContactForm"
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              let form = e.target;

              document.getElementById("submitLoading").style.display = "block";
              document.getElementById("submitButton").style.display = "none";

              axios.defaults.headers.post["Content-Type"] = "application/json";
              axios
                .post(
                  "https://formsubmit.co/ajax/6b09db79274ba4b5e642ee65d5f484ce",
                  {
                    name: form.elements["name"].value,
                    email: form.elements["email"].value,
                    message: form.elements["message"].value,
                  },
                  { timeout: 2000 }
                )
                .then((response) => {
                  console.log(response, "success");
                  form.style.display = "none";
                  document.getElementById("ContactForm").style.display = "none";
                  document.getElementById("formSent").style.display = "block";
                })
                .catch((error) => {
                  console.log(error, "Error");
                  alert("Error");
                  document.getElementById("submitLoading").style.display =
                    "block";
                  document.getElementById("submitButton").style.display =
                    "none";
                });
            }}
          >
            <label htmlFor="name">{formCurrentData.nameLabel}</label>
            <input
              type="text"
              placeholder={formCurrentData.namePlaceholder}
              id="name"
              name="name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={formCurrentData.emailPlaceholder}
              required
            />
            <label htmlFor="message">{formCurrentData.textAreaLabel}</label>
            <textarea
              className="contactanos-form-textarea"
              placeholder={formCurrentData.textAreaPlaceholder}
              id="message"
              name="message"
              required
            ></textarea>
            <button id="submitButton" type="submit">
              {formCurrentData.submitButtonText}
            </button>
            <p id="submitLoading">{formCurrentData.submitLoadingText}</p>
          </form>
        </div>
      </div>
    </section>
  );
};
