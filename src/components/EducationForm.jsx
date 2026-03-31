import "../styles/forms.css";

function EducationForm({ data, isEditing, onChange, onSave, onEdit }) {
  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  if (!isEditing) {
    return (
      <div className="form-summary">
        <dl>
          <div className="summary-row">
            <dt>School</dt>
            <dd>{data.school || ""}</dd>
          </div>
          <div className="summary-row">
            <dt>Degree</dt>
            <dd>{data.degree || ""}</dd>
          </div>
          <div className="summary-row">
            <dt>Dates</dt>
            <dd>{data.dates || ""}</dd>
          </div>
        </dl>
        <button className="btn btn--outline" onClick={onEdit}>
          Edit
        </button>
      </div>
    );
  }

  return (
    <div className="form-fields">
      <div className="field-group">
        <label htmlFor="edu-school">School / University</label>
        <input
          id="edu-school"
          type="text"
          name="school"
          value={data.school}
          onChange={handleChange}
          placeholder="MIT"
        />
      </div>
      <div className="field-group">
        <label htmlFor="edu-degree">Degree / Title of Study</label>
        <input
          id="edu-degree"
          type="text"
          name="degree"
          value={data.degree}
          onChange={handleChange}
          placeholder="B.Sc. Computer Science"
        />
      </div>
      <div className="field-group">
        <label htmlFor="edu-dates">Dates</label>
        <input
          id="edu-dates"
          type="text"
          name="dates"
          value={data.dates}
          onChange={handleChange}
          placeholder="Sep 2018 - Jun 2022"
        />
      </div>

      <button className="btn btn--primary" onClick={onSave}>
        Save
      </button>
    </div>
  );
}

export default EducationForm;
