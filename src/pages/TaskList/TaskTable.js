import React, { useState } from 'react'
import EditTask from './EditTask';


function AddTaskModal({ show, onClose, onAdd }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState(1);
  const [status, setStatus] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title: title,
      priority: priority,
      status: status ? "Finished" : "Pending",
      startTime: startTime,
      endTime: endTime,
      totalTime: 0
    };
    onAdd(newTask);
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
            <h5 className="modal-title">Add new task</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
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
            <button type="button" className="btn btn-primary" onClick={handleAddTask}>
              Add task
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function TaskTable() {
  const initialTasks = [
    {
      id: 1,
      title: 'Buy clothes',
      priority: 5,
      status: 'Pending',
      startTime: '26-Nov-24 11:00 AM',
      endTime: '30-Nov-24 11:00 AM',
      totalTime: 96,
    },
    {
      id: 2,
      title: 'Finish code',
      priority: 3,
      status: 'Finished',
      startTime: '19-Nov-24 01:15 PM',
      endTime: '20-Nov-24 03:15 PM',
      totalTime: 6.17,
    },
    {
      id: 3,
      title: 'Book travel tickets',
      priority: 4,
      status: "Pending",
      startTime: '19-Nov-24 10:00 PM',
      endTime: '20-Nov-24 11:00 PM',
      totalTime: 25,
    },
    {
      id: 4,
      title: 'Order groceries',
      priority: 4,
      status: 'Pending',
      startTime: '27-Nov-24 09:00 AM',
      endTime: '27-Nov-24 10:30 AM',
      totalTime: 60,
    },
    {
      id: 5,
      title: 'Medical checkup',
      priority: 4,
      status: 'Finished',
      startTime: '19-Nov-24 09:00 AM',
      endTime: '20-Nov-24 05:00 PM',
      totalTime: 51.75,
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);


  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task
    });
    setTasks(updatedTasks)
  };

  const handleToggleAll = () => {
    setAllSelected(!allSelected);

    if (!allSelected) {
      const allTaskIds = tasks.map((task) => task.id);
      setSelectedTasks(allTaskIds);
    } else {
      setSelectedTasks([]);
    }
  };

  const handleCheckboxChange = (taskId) => {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
    if (selectedTasks.length === tasks.length - 1) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }

  };


  const handleEdit = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenAddModal = () => {
    setShowAddModal(true);
  }

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  }

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };


  const handleDeleteSelected = () => {
    const updatedTasks = tasks.filter((task) => !selectedTasks.includes(task.id));
    setTasks(updatedTasks);
    setSelectedTasks([]);
    setAllSelected(false);
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="d-flex gap-2">
        <button className="btn btn-outline-primary" onClick={handleOpenAddModal}>
          <span className="me-1">+</span> Add task
        </button>
        <button className="btn btn-outline-danger" onClick={handleDeleteSelected} disabled={selectedTasks.length === 0}>
          <span className="me-1">🗑</span> Delete selected
        </button>
      </div>
      </div>

      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">
              <input type="checkbox" checked={allSelected} onChange={handleToggleAll} />
            </th>
            <th scope="col">Task ID</th>
            <th scope="col">Title</th>
            <th scope="col">Priority</th>
            <th scope="col">Status</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Total time to finish (hrs)</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedTasks.includes(task.id)}
                  onChange={() => handleCheckboxChange(task.id)}
                />
              </td>
              <td>{`T-0000${task.id}`}</td>
              <td>{task.title}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
              <td>{task.startTime}</td>
              <td>{task.endTime}</td>
              <td>{task.totalTime}</td>
              <td>
                <span className="edit-icon" onClick={() => handleEdit(task)}>
                  ✏️
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditTask task={selectedTask} show={showModal} onClose={handleCloseModal} onUpdate={handleUpdateTask} />
      <AddTaskModal show={showAddModal} onClose={handleCloseAddModal} onAdd={handleAddTask} />
    </div>
  );
}


export default TaskTable