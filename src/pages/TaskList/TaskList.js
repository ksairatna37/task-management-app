import React from 'react'
import TaskButtons from './TaskButtons'
import TaskTable from './TaskTable'
import Navbar from '../common/Navbar'

export default function TaskList() {
  return (
    <>
    <div className="container mx-1 mt-4 mb-4"><h1 className="text-start">Task List</h1></div>
    <TaskButtons></TaskButtons>
    <TaskTable></TaskTable>

    </>
  )
}
