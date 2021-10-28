import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About_us extends Component {

    render() {
        return (


         <div>

            <div className="container-fluid">
                <div className="col-md-12 mt-3 text center" >
                    <div className="card">
                        <div className="row">
                            <div className="card-header">
                                <h4>Ikaw Bahala Dito Renan ABOUT CONFIGURATION

                                    <Link className="btn btn-primary float-end" to="/enroll">Enroll</Link>
                                </h4>
                            </div>
                            <div className="card-body">


                                <table className="table table-bordered table-striped">

                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">FullName</th>
                                            <th scope="col">College</th>
                                            <th scope="col">Courses</th>
                                            <th scope="col">Section</th>
                                            <th scope="col">Contact Number</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Drop</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            </div >

        );
    }
}

export default About_us;
