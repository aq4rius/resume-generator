import React from "react";

const AddedExperience = (props) => {
  const { allExperience, deleteExperience } = props;

  const handleDelete = (index) => {
    deleteExperience(index);
  };

  return (
    <div className="added-experience-component">
      {allExperience.map((experience, index) => {
        return (
          <div key={experience.id + index}>
            <div>
              <div key={experience.id + "_company" + index}>
                {"Company: " + experience.company.text}
              </div>
              <div key={experience.id + "_position" + index}>
                {"Position: " + experience.position.text}
              </div>
            </div>
            <div key={experience.id + "_dateFrom" + index}>
              {experience.dateFrom.text + " to " + experience.dateTo.text}
            </div>
            <div>
              <div className="tasks" key={experience.id + "_tasks" + index}>
                {"Tasks: " + experience.tasks.text}
              </div>
            </div>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default AddedExperience;
