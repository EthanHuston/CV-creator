import "../styles/CVPreview.css";

function CVPreview({ generalInfo, education, experience }) {
  const { name, email, phone } = generalInfo;
  const { school, degree, dates } = education;
  const { company, position, reponsibilities, from, until } = experience;

  const hasEducation = school || degree || dates;
  const hasExperience = company || position;

  const dateRange = [from, until].filter(Boolean).join(" - ");

  return (
    <div className="preview-panel">
      <p className="preview-label">Live Preview</p>
      <div className="cv-paper">
        <header className="cv-header">
          <h1 className="cv-name">
            {name || <span className="cv-placeholder">Your Name</span>}
          </h1>
          {(email || phone) && (
            <div className="cv-contact">
              {email && <span>{email}</span>}
              {email && phone && (
                <span className="cv-dot" aria-hidden="true">
                  .
                </span>
              )}
              {phone && <span>{phone}</span>}
            </div>
          )}
        </header>
        {hasEducation && (
          <section className="cv-section">
            <h2 className="cv-section-title">Education</h2>
            <div className="cv-entry">
              <div className="cv-entry-top">
                <span className="cv-entry-main">{degree}</span>
                <span className="cv-entry-date">{dates}</span>
              </div>
              {school && <p className="cv-entry-sub">{school}</p>}
            </div>
          </section>
        )}
        {hasExperience && (
          <section className="cv-section">
            <h2 className="cv-section-title">Experience</h2>
            <div className="cv-entry">
              <div className="cv-entry-top">
                <span className="cv-entry-main">{position}</span>
                {dateRange && (
                  <span className="cv-entry-date">{dateRange}</span>
                )}
              </div>
              {company && <p className="cv-entry-sub">{company}</p>}
              {reponsibilities && (
                <p className="cv-entry-body">{reponsibilities}</p>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default CVPreview;
