const ContentContact = () => {
  let formCurrentData = language === "en" ? formData[1] : formData[0];
  return (
    <div className="content-form" id="content-form">
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
                  "https://formsubmit.co/ajax/jcarloscrespo18@hotmail.com",
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
    </div>
  );
};

//ReactDOM.render(<FormContent />, document.getElementById("formDivContainer"));
