import "../styles/forms.css";

function GeneralInfoForm({ data, isEditing, onChange, onSave, onEdit }) {
  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  if (!isEditing) {
    return (
      <div className="form-summary">
        <dl>
          <div className="summary-row">
            <dt>Name</dt>
            <dd>{data.name || "-"}</dd>
          </div>
          <div className="summary-row">
            <dt>Email</dt>
            <dd>{data.email || "-"}</dd>
          </div>
          <div className="summary-row">
            <dt>Phone</dt>
            <dd>{data.phone || "-"}</dd>
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
        <label htmlFor="gen-name">Full Name</label>
        <input
          id="gen-name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Jane Doe"
        />
      </div>
      <div className="field-group">
        <label htmlFor="gen-email">Email</label>
        <input
          type="email"
          name="email"
          id="gen-email"
          value={data.email}
          onChange={handleChange}
          placeholder="jane@example.com"
        />
      </div>
      <div className="field-group">
        <label htmlFor="gen-phone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="gen-email"
          value={data.phone}
          onChange={handleChange}
          placeholder="+1 (555) 555-5555"
        />
      </div>
      <button className="btn btn--primary" onClick={onSave}>
        Save
      </button>
    </div>
  );
}

export default GeneralInfoForm;
