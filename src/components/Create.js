import React from "react";
import { useState } from "react";
import env from "../env.json";

function Create() {
  const [url, setUrl] = useState("");
  const [lineClass, setLineClass] = useState("hide");
  const [formClass, setFormClass] = useState("");
  const [modalClass, setModalClass] = useState("hide");

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
        if (response.result) {
          setUrl(env.url + "/" + response.url);
        }
      });
  };

  let loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value.trim();
    if (note === "") {
      setModalClass("modal");
      return false;
    }
    sendData({ note: note });
  };
  const closeModal = () => {
    setModalClass("hide");
  };

  return (
    <div>
      <div className={modalClass} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">WARNING!!!!!</h5>
              <button
                onClick={closeModal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                You are trying to send an empty message - in my opinion this
                makes no sense. Therefore, enter at least something !!!!!
              </p>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
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
