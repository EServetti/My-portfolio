import locationImage from "../assets/location.png";

function EducationInfo({
  title,
  logo,
  description,
  link,
  location,
  duration,
  state,
  startedIn,
  finishedIn,
  diploma,
  linkDiploma
}) {
  return (
    <section className="college-course">
      <img className="logo" src={logo} alt="logo" />
      <section className="college-course-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && <a href={link}>Read more.</a>}
        <ul>
          <li>
            <img className="ubication" src={locationImage} />
            {location}
          </li>
          <li>Duration: {duration}</li>
          <li>State: {state}</li>
          {startedIn && <li>Started in: {startedIn}</li>}
          {finishedIn && <li>Finished in: {finishedIn}</li>}
        </ul>
        {diploma && (
          <>
            <h4>Diploma:</h4>
            <a href={linkDiploma}>
              <img className="diploma" src={diploma} />
            </a>
          </>
        )}
      </section>
    </section>
  );
}

export default EducationInfo;
