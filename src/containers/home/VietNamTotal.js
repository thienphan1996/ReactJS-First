import React, { Component } from 'react'

export default class VietNamTotal extends Component {
    render() {
        return (
            <div>
                <p className="badge-vn">Việt Nam</p>
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
                        <span className="text-number">1.060</span>
                    </div>
                    <div className="col-md-6 text-warning text-center">
                        <span className="text-number">112</span>
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
                        <span className="text-number">910</span>
                    </div>
                    <div className="col-md-6 text-secondary text-center">
                        <span className="text-number">35</span>
                    </div>
                </div>
            </div>
        )
    }
}
