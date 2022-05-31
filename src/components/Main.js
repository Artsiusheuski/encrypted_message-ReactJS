function Main() {
  return (
    <div className="row">
      <div className="col">
        <a
          href="/create"
          className="list-group-item list-group-item-action list-group-item-success "
        >
          Creating notes
        </a>
      </div>
      <div className="col">
        <a
          href="/note"
          className="list-group-item list-group-item-action list-group-item-success"
        >
          Whatching notes
        </a>
      </div>
      <div>
        <p>
          <b>
            Thanks to this application, you can easily create and send encrypted
            notes and send the URL to the recipient.
          </b>
        </p>
        <p>
          <b>
            By clicking on the URL, the recipient will be able to see your
            message!
          </b>
        </p>
      </div>
    </div>
  );
}

export default Main;
