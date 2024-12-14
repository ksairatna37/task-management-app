import React from 'react'
import Navbar from '../common/Navbar'
import TaskDetailsCard from './TaskDetailsCard'
import TaskDetailsTable from './TaskDetailsTable'

export default function Dashboard() {
    
    return (
        <div>
            <div className="container mx-1 mt-4"><h1 className="text-start">Dashboard</h1></div>
            <div className="summary-card">
                <div className="container my-4 mx-1"><h5 className="text-start">Summary</h5></div>
                <div class="container">
                    <div class="row row-cols-auto">
                        <TaskDetailsCard value="25" title="Total Task"/>
                        <TaskDetailsCard value="25" title="Task Completed"/>
                        <TaskDetailsCard value="25" title="Task Pending"/>
                        <TaskDetailsCard value="25" title={<span>Avg Time per <br/> completed Task</span>} />

                    </div>
                </div>

            </div>
            <div className="pending-task-summary-card mb-5">
                <div className="container my-4 mx-1"><h5 className="text-start">Pending Task Summary</h5></div>
                <div class="container">
                    <div class="row row-cols-auto">
                        <TaskDetailsCard value="25" title="Pending Task"/>
                        <TaskDetailsCard value="25" title="Total Time Elapsed"/>
                        <TaskDetailsCard value="25" title={<span>Total Time to finish <br/> <i>Estimated based on endtime</i> </span>} />
                    </div>
                </div>
            </div>
            <TaskDetailsTable/>
        </div>
    )
}
