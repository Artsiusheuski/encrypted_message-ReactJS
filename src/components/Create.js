import React from "react";
import { useState } from "react";
import env from "../env.json";

function Create() {
  const [url, setUrl] = useState("");
  const [lineClass, setLineClass] = useState("hide");
  const [formClass, setFormClass] = useState("");

  let sendData = (obj) => {
    setFormClass("hide");
    setLineClass("");
    fetch(env.urlBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.result) {
          setUrl(env.url + "/" + response.url);
        }
      });
  };

  let loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value.trim();
    if (note === "") {
      alert("Fill in the notes"); // заменить на вспл.окно bootstrep
      return false;
    }
    sendData({ note: note });
  };

  return (
    <div>
      <form onSubmit={loadDataFromForm} className={formClass}>
        <label htmlFor="note">Enter notes</label>
        <textarea
          name="note"
          id="note"
          defaultValue="massage"
          className="form-control"
        ></textarea>
        <p>Warning!Maximum length 1000 characters</p>
        <button type="submit" className="btn btn-warning">
          Create
        </button>
      </form>
      <div className={lineClass}>
        <div className="alert alert-primary" role="alert">
          {url}
        </div>
        <p>Copy this URL.</p>
        <div>
          <button
            className="btn btn-dark"
            onClick={function () {
              window.location.reload();
            }}
          >
            Create new notes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
