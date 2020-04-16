import React, { Component } from 'react';

class WeatherPerDay extends Component {
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
            <div onMouseEnter = {this.props.onHover}>
                <div className="card text-center" style={{ width: "10rem" ,padding: "5px"}}>
                    <img src={this.state[this.props.forecast]} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.day}</h5>
                        <p className="card-text">{this.props.forecast} </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default WeatherPerDay;