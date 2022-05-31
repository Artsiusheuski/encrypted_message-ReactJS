import Test from "./test";
function About() {
  return (
    <div>
      <Test test="Hello"></Test>
      <h3>
        Front end development hasn't always gotten the respect it deserves
        compared to back end development.
      </h3>
      <p>
        Many engineers used to look down on JavaScript. But times have changed.
        Web applications are growing rapidly, mainly due to the development of
        open-source tools.
      </p>
      <p>
        This development has moved us farther away from jQuery and has made
        almost every tech company use the latest JavaScript and tools like
        Eslint, Babel, and Webpack.
      </p>
      <p>
        <b>
          Nowadays, the front end is moving at a speed that makes it hard to
          follow.
        </b>
      </p>
    </div>
  );
}

export default About;
