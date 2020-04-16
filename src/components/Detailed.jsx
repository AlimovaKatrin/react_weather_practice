import React, { Component } from 'react';

class Detailed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sun: 'https://image.flaticon.com/icons/svg/979/979585.svg',
            rain: 'https://image.flaticon.com/icons/svg/263/263883.svg',
            snow: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT71o8MiGMW-MMxAsfRuwvkK1XlbhbuoLXxQ--bDdCJkYVtr_7W&usqp=CAU'
        }
    }

    render() {
        return (
            <div className="card mb-3" style={{ width: '540px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.state[this.props.forecast]} className="card-img-top" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.day}</h5>

                            <p className="card-text">{this.props.forecast} </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Detailed;
