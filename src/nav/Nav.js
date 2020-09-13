import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { common } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark nav-home">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {
                                this.props.detail.detail &&
                                <li>
                                    <a href="/" onClick={() => { this.props.back("Home") }}>
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <Icon fontSize="small" style={{ color: common.white }}>arrow_back</Icon>
                                        </IconButton>
                                    </a>
                                </li>
                            }
                            <li className="nav-item active">
                                <a className="nav-link" href="/"> Trang chủ <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Tin tức</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        detail: state.detail
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        back: (type, payload) => {
            dispatch({ type: type })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)