import "../styles/forms.css";

function ExperienceForm({ data, isEditing, onChange, onSave, onEdit }) {
  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  if (!isEditing) {
    const dateRange = [data.from, data.until].filter(Boolean).join("->");

    return (
      <div className="form-summary">
        <dl>
          <div className="summary-row">
            <dt>Company</dt>
            <dd>{data.company || "-"}</dd>
          </div>
          <div className="summary-row">
            <dt>Position</dt>
            <dd>{data.position || "-"}</dd>
          </div>
          <div className="summary-row">
            <dt>Period</dt>
            <dd>{dateRange || "-"}</dd>
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
        <label htmlFor="exp-company">Company</label>
        <input
          id="exp-company"
          type="text"
          name="company"
          value={data.company}
          onChange={handleChange}
          placeholder="Acme Corp"
        />
      </div>
      <div className="field-group">
        <label htmlFor="exp-position">Position</label>
        <input
          id="exp-position"
          type="text"
          name="position"
          value={data.position}
          onChange={handleChange}
          placeholder="Senior Engineer"
        />
      </div>
      <div className="field-group">
        <label htmlFor="exp-responsibilities">Responsibilities</label>
        <input
          id="exp-responsibilities"
          type="text"
          name="reponsibilities"
          value={data.reponsibilities}
          onChange={handleChange}
          placeholder="Describe your main responsibilities..."
          rows={4}
        />
      </div>
      <div className="field-row">
        <div className="field-group">
          <label htmlFor="exp-from">From</label>
          <input
            id="exp-from"
            type="text"
            name="from"
            value={data.from}
            onChange={handleChange}
            placeholder="Jan 2020"
          />
        </div>
        <div className="field-group">
          <label htmlFor="exp-until">Until</label>
          <input
            id="exp-until"
            type="text"
            name="until"
            value={data.until}
            onChange={handleChange}
            placeholder="Present"
          />
        </div>
      </div>
      <button className="btn btn--primary" onClick={onSave}>
        Save
      </button>
    </div>
  );
}

export default ExperienceForm;
