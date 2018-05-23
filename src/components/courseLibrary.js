import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { fetchCourses } from '../actions'

class CourseLibrary extends Component {

    constructor(props) {
        super(props)


        this.renderCourse = this.renderCourse.bind(this);
    }


    componentDidMount() {
        this.props.fetchCourses()
    }
 
    renderCourse(course) {
        return ( 
        <li key={course.title} className='course'>
            <div className='course_info'>
                <div className='course_title-container'>
                    <div className='course_title'>{course.title}</div>
                </div>
            </div>
            <div className='course_description'>
                <h6 className='course_description-title'>Course Description</h6>
                <p>{course.description}</p>
            </div>

        </li>
        )
    }

    render() {
      
        return (
            <ul>

                {this.props.fetchCourses}
                {this.props.courses.map(this.renderCourse)}
                
            </ul>
        )

    }

 }

 function mapStateToProps(state) {
     console.log(`state courses are : ${JSON.stringify(state.courses)}`)
     return { courses: state.courses }
 }

 function mapDispatchToProps(dispatch) {
     return {
        fetchCourses:() => {
           dispatch(fetchCourses())
        }
    }
 }



 export default  connect(mapStateToProps, mapDispatchToProps)(CourseLibrary);

