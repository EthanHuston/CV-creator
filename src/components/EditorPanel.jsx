import AccordionSection from "./AccordionSection.jsx";
import GeneralInfoForm from "./GeneralInfoForm.jsx";
import EducationForm from "./EducationForm.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import "../styles/EditorPanel.css";

function EditorPanel({
  generalInfo,
  education,
  experience,
  sectionState,
  onToggleSection,
  onSaveSection,
  onEditSection,
  onChangeGeneral,
  onChangeEducation,
  onChangeExperience,
}) {
  return (
    <aside className="editor-panel">
      <div className="editor-header">
        <p className="editor-label">CV Builder</p>
        <h1 className="editor-title">Your Details</h1>
      </div>
      <div className="editor-sections">
        <AccordionSection
          title="Personal Info"
          isOpen={sectionState.general.isOpen}
          onToggle={() => onToggleSection("general")}
        >
          <GeneralInfoForm
            data={generalInfo}
            isEditing={sectionState.general.isEditing}
            onChange={onChangeGeneral}
            onSave={() => onSaveSection("general")}
            onEdit={() => onEditSection("general")}
          />
        </AccordionSection>
        <AccordionSection
          title="Education"
          isOpen={sectionState.education.isOpen}
          onToggle={() => onToggleSection("education")}
        >
          <EducationForm
            data={education}
            isEditing={sectionState.education.isEditing}
            onChange={onChangeEducation}
            onSave={() => onSaveSection("education")}
            onEdit={() => onEditSection("education")}
          />
        </AccordionSection>
        <AccordionSection
          title="Experience"
          isOpen={sectionState.experience.isOpen}
          onToggle={() => onToggleSection("experience")}
        >
          <ExperienceForm
            data={experience}
            isEditing={sectionState.experience.isEditing}
            onChange={onChangeExperience}
            onSave={() => onSaveSection("experience")}
            onEdit={() => onEditSection("experience")}
          />
        </AccordionSection>
      </div>
    </aside>
  );
}
export default EditorPanel;
