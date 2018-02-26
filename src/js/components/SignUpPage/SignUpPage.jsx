import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


import SignUpForm from './SignUpForm.jsx';


// const SignUpPage = ({history})=>{
//         return(
//             <div>
//                 <h1>sign up</h1>
//                 <SignUpForm history={history}/>
//             </div>
//         )
// }


class SignUpPage extends Component {
    static propTypes = {
    	match: PropTypes.object.isRequired,
    	location: PropTypes.object.isRequired,
    	history: PropTypes.object.isRequired,
    }

    render() {
    	const { match, location, history } = this.props;
    	return (
    			<SignUpForm history={history}/>
    	);
    }
}

// un componente que entra en withRouter obtiene acceso
// a todas las propiedades del enrutador
// por lo tanto ahora SignUpPage tiene su propia función
// al acceso a todos los puntos ded react router
export default withRouter(SignUpPage);