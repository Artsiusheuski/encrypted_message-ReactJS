import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from "../env.json";

function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState("");
  const [lineClass, setLineClass] = useState("hide");
  const [formClass, setFormClass] = useState("hide");
  const [errorClass, setErrorClass] = useState("hide");
  const [modalClass, setModalClass] = useState("hide");

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ url: noteURL }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.result) {
            setNoteText(response.note);
            setLineClass("");
            setFormClass("hide");
            setErrorClass("hide");
          } else if (!response.result) {
            setLineClass("hide");
            setFormClass("hide");
            setErrorClass("");
          }
        });
    } else {
      setLineClass("hide");
      setFormClass("");
      setErrorClass("hide");
    }
  }, [noteURL]);

  function getNote(event) {
    event.preventDefault();
    let url = event.target.elements.url.value.trim();
    if (url === "") {
      setModalClass("modal");
      return false;
    }
    noteURL = url;
    window.location.href = env.url + "/" + url;
  }
  const closeModal = () => {
    setModalClass("hide");
  };

  return (
    <div>
      <div className={modalClass}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">WARNING!!!!!!</h5>
              <button
                onClick={closeModal}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you kidding? Enter URL!</p>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
      <div className={lineClass}>
        <h4>Note:</h4>
        <div>{noteText}</div>
        <div>
          <button
            className="btn btn-success"
            onClick={function () {
              window.location.href = env.url;
            }}
          >
            Watch another one note
          </button>
        </div>
      </div>
      <div className={errorClass}>
        <p>Error/Please reload the page.</p>
      </div>
      <div className={formClass}>
        <form action="" onSubmit={getNote}>
          <label htmlFor="url">Enter your hash</label>
          <input type="text" name="url" id="url" className="form-control" />
          <button type="submit" className="btn btn-warning">
            Search Notes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Note;
