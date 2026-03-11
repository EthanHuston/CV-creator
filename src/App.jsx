import { useState } from "react";
import EditorPanel from "./components/EditorPanel";
import CVPreview from "./components/CVPreview";
import "./App.css";

function App() {
  // CV Data State
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    dates: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  });

  //UI State
  const [sectionState, setSectionState] = useState({
    general: { isOpen: true, isEditing: true },
    education: { isOpen: false, isEditing: true },
    experience: { isOpen: false, isEditing: true },
  });

  //Handler Callbacks

  //Used to toggle the open or closed state of a section
  function toggleSection(key) {
    setSectionState((prev) => ({
      ...prev,
      [key]: { ...prev[key], isOpen: !prev[key].isOpen },
    }));
  }

  //Used to close a section when done filling or editing
  function saveSection(key) {
    setSectionState((prev) => ({
      ...prev,
      [key]: { isOpen: false, isEditing: false },
    }));
  }

  //Used for reopening a section to edit the contents
  function editSection(key) {
    setSectionState((prev) => ({
      ...prev,
      [key]: { isOpen: true, isEditing: true },
    }));
  }

  return (
    <div className="app-layout">
      <EditorPanel
        generalInfo={generalInfo}
        education={education}
        experience={experience}
        sectionState={sectionState}
        onToggleSection={toggleSection}
        onSaveSection={saveSection}
        onEditSection={editSection}
        onChangeGeneral={setGeneralInfo}
        onChangeEducation={setEducation}
        onChangeExperience={setExperience}
      />

      <CVPreview
        generalInfo={generalInfo}
        education={education}
        experience={experience}
      />
    </div>
  );
}

export default App;
