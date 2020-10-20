import React from 'react';
import { getCourses } from '../../api/courseApi';

class CoursesPage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {courses: []};
    // }
    state = {courses: []}
    

    componentDidMount(){

        this.setState({courses:[{"id":1,"title":"Securing React Apps with Auth0","slug":"react-auth0-authentication-security","authorId":1,"category":"JavaScript"},{"id":2,"title":"React: The Big Picture","slug":"react-big-picture","authorId":1,"category":"JavaScript"},{"id":3,"title":"Creating Reusable React Components","slug":"react-creating-reusable-components","authorId":1,"category":"JavaScript"},{"id":4,"title":"Building a JavaScript Development Environment","slug":"javascript-development-environment","authorId":1,"category":"JavaScript"},{"id":5,"title":"Building Applications with React and Redux","slug":"react-redux-react-router-es6","authorId":1,"category":"JavaScript"},{"id":6,"title":"Building Applications in React and Flux","slug":"react-flux-building-applications","authorId":1,"category":"JavaScript"},{"id":7,"title":"Clean Code: Writing Code for Humans","slug":"writing-clean-code-humans","authorId":1,"category":"Software Practices"},{"id":8,"title":"Architecting Applications for the Real World","slug":"architecting-applications-dotnet","authorId":1,"category":"Software Architecture"},{"id":9,"title":"Becoming an Outlier: Reprogramming the Developer Mind","slug":"career-reboot-for-developer-mind","authorId":1,"category":"Career"},{"id":10,"title":"Web Component Fundamentals","slug":"web-components-shadow-dom","authorId":1,"category":"HTML5"}],"authors":[{"id":1,"name":"Cory House"},{"id":2,"name":"Scott Allen"},{"id":3,"name":"Dan Wahlin"}]})
       // getCourses().then(courses=> this.setState({courses:courses}))
        // getCourses().then(function(courses){
        //     this.setState({courses: courses});
        //     console.log(courses);
        // })
    }
    render() {

        return(
            <>
        <h2>Courses</h2>

        <table className="table">
            <thead>
                <tr>
                <th>Title</th>
                <th>Author ID</th>
                <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.courses.map(function(course){
                        return(
                            <tr>
                            <td>{course.title}</td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>

                        </tr>
                        )
                    })
                }
               
            </tbody>
        </table>
            
            </>
            
            )
    }

}

export default CoursesPage;