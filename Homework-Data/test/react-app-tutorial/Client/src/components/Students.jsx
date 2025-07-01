//Props è un oggetto di javascript che permette di chiamare qualsiasi caratteristica aggiuntiva di tag HTML
//in base alle caratteristiche dettate.

import PropTypes from "prop-types"

function Students(props) {
    return(
        <div className="box-props">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes":"No"}</p>
        </div>
    );
}

Students.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Students.defaultProps = {
    name: 'Guest',
    age: 0,
    isStudent: false,
}


export default Students