import {Component} from 'react';
import {Link} from 'react-router-dom';
import '../components/styles/404-page.css'

export default class ErrorServer extends Component{
    render() {
        return(
            <div className="body">
                <div className="error-404-card">
                    <h3 className="title-404">error 404</h3>
                    <div className="body-card">
                        <h1 className="sorry">sorry</h1>
                        <label className="text-error">has error produced</label>
                    </div>

                    <Link to="/home" className="link-home-error">go to home</Link>         
                </div>
            </div>
        );
    }
}

