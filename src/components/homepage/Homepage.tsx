import "./Homepage.scss";

function Homepage() {
  return (
    <div className="homepageContainer">
      <div className="aboutContainer">
        <h1>Welcome!</h1>
        <br />
        <h2>This page is made to look for books.</h2>
        <br />
        <h3>
          Feel free to chceck titles or authors. <br /> Add them to your
          favourites, and eventually check more details about them on <br />{" "}
          <a href="openlibrary.com" className="openLibraryLink">
            openlibrary.com
          </a>{" "}
          <br />
          simply by clicking on author or title!
        </h3>
        <br />
        <h3>Enjoy!</h3>
      </div>
    </div>
  );
}

export default Homepage;
