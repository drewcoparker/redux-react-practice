import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReduxStyle extends Component {
    render() {
        var studentArray = [];
        this.props.students.map((student, index) => {
            studentArray.push(<li key={student.seat}>{student.name}, seat: {student.seat}</li>);
        })
        return(
            <div>
                <ol>
                    {studentArray}
                </ol>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // From our master reducer, we have a state obj. Inside there is a
        // propery: students. We need to set up the state of theta object to
        // the props of this Component
        students: state.students
    }
}

export default connect(mapStateToProps)(ReduxStyle);
