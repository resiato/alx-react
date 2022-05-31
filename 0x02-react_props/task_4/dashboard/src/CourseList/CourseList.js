import React from "react";
import CourseListRow from "./CourseListRow";
import './CourseList.css';

function CourseList() {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell=<strong>Available courses</strong> isHeader={true}/>
                <CourseListRow textFirstCell=<strong>Course name</strong> textSecondCell=<strong>Credit</strong> isHeader={true}/>
            </thead>
            <tbody>
                <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false}/>
                <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false}/>
                <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false}/>
            </tbody>
        </table>
    );
}

export default CourseList;
