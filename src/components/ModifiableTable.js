// import React, { useEffect, useState, Fragment } from "react";


function ModifiableTable(props){
    return (
        <>
            <table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Jobs</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(person => (
                    <tr key={person.id}>
                        <td>{person.first_name} {person.last_name}</td>
                        <td>
                        <ul>
                            {person.jobs.map(job => (
                            <li key={job.id}>{job.description} ({job.latitude}, {job.longitude})</li>
                            ))}
                        </ul>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ModifiableTable;