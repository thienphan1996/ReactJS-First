import React, { Component } from 'react'

export default class WorldTotal extends Component {
    render() {
        return (
            <div>
                <p className="badge-world">Thế giới</p>
                <div className="row">
                    <div className="col-md-6 text-danger text-center">
                        <span>Số ca nhiễm</span>
                    </div>
                    <div className="col-md-6 text-warning text-center">
                        <span>Đang điều trị</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-danger text-center">
                        <span className="text-number">28.961.478</span>
                    </div>
                    <div className="col-md-6 text-warning text-center">
                        <span className="text-number">7.195.738</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-success text-center">
                        <span>Hồi phục</span>
                    </div>
                    <div className="col-md-6 text-secondary text-center">
                        <span>Tử vong</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-success text-center">
                        <span className="text-number">20.840.856</span>
                    </div>
                    <div className="col-md-6 text-secondary text-center">
                        <span className="text-number">20.840.856</span>
                    </div>
                </div>
            </div>
        )
    }
}
