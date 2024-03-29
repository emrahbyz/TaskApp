import { useState } from "react";

function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {
  const [title, settitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (e) => {
    settitle(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }
    settitle("");
    setTaskDesc("");
  };
  return (
    <div>
      {" "}
      {""}{" "}
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Düzenleyiniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button " onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
