function Project({
  id,
  title,
  description,
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
  linkBack,
  linkFront,
  linkLive,
  toolsUsed,
  verticalImgs
}) {
  return (
    <div className="project" id={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={!verticalImgs ? "screenshots" : "screenshots-vertical"}>
        {screenshot1 && <img src={screenshot1} alt="Screenshot 1" />}
        {screenshot2 && <img src={screenshot2} alt="Screenshot 1" />}
        {screenshot3 && <img src={screenshot3} alt="Screenshot 1" />}
        {screenshot4 && <img src={screenshot4} alt="Screenshot 1" />}
      </div>
      <div className="links">
        {linkFront && (
          <a href={linkFront} target="_blank" rel="noopener noreferrer">
            GitHub (Front-end)
          </a>
        )}
        {linkBack && (
          <a href={linkBack} target="_blank" rel="noopener noreferrer">
            GitHub (Back-end)
          </a>
        )}
        {linkLive && (
          <a href={linkLive} target="_blank" rel="noopener noreferrer">
            Project live
          </a>
        )}
      </div>
      <div className="tools-used">
        <h3>Tools Used:</h3>
        <ul>
          {toolsUsed.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
