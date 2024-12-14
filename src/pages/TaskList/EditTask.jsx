import React , { useState }from 'react'

export default function EditTask({ task, show, onClose, onUpdate }) {
    const [title, setTitle] = useState(task ? task.title : '');
  const [priority, setPriority] = useState(task ? task.priority : 1);
    const [status, setStatus] = useState(task ? task.status === "Finished" : false);
  const [startTime, setStartTime] = useState(task ? task.startTime : '');
  const [endTime, setEndTime] = useState(task ? task.endTime : '');

  const handleUpdate = () => {
    const updatedTask = {
      ...task,
        title: title,
        priority: priority,
        status: status ? "Finished" : "Pending",
        startTime: startTime,
        endTime: endTime
    };
    onUpdate(updatedTask);
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit task</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
             <div>
              <label>Task ID: {task.id}</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Priority</label>
             <input
                type="number"
                className="form-control"
                value={priority}
               onChange={(e) => setPriority(parseInt(e.target.value))}
              />
            </div>
              <div className="mb-3 d-flex align-items-center justify-content-between">
                    <label className="form-label">Status</label>
                <div className="d-flex gap-2">
                       Pending
                   <div className="form-check form-switch">
                       <input
                           className="form-check-input"
                           type="checkbox"
                           role="switch"
                            checked={status}
                            onChange={(e) => setStatus(e.target.checked)}
                       />
                   </div>
                    Finished
                    </div>
              </div>
              <div className="mb-3 d-flex gap-3">
              <div className='flex-grow-1'>
                  <label className="form-label">Start time</label>
                      <input
                         type="text"
                         className="form-control"
                          value={startTime}
                           onChange={(e) => setStartTime(e.target.value)}
                  />
              </div>
                 <div className='flex-grow-1'>
                  <label className="form-label">End time</label>
                     <input
                        type="text"
                        className="form-control"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
              </div>
              </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleUpdate}>
              Update
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
