import React, { Component } from 'react'
import NewsItem from '../items/NewsItem'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NewsDetail from '../detail/NewsDetail';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import VietNamTotal from './VietNamTotal';
import WorldTotal from './WorldTotal';

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            list: [],
            loading: false
        }
    }

    componentDidMount() {
        this.showLoading();
        fetch("https://demo8626627.mockable.io/news")
            .then(data => data.json())
            .then(json => {
                this.setState({
                    list: json
                });
                this.hideLoading();
            })
    }

    showLoading() {
        this.setState({ loading: true });
    }

    hideLoading() {
        this.setState({ loading: false })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <Router>
                        <div>
                            {
                                this.state.loading &&
                                <div className="d-flex justify-content-center">
                                    <CircularProgress className="margin-20" />
                                </div>
                            }
                            <Switch>
                                <Route path="/" exact>
                                    {
                                        this.state.list.map((item, i) => <NewsItem News={item} GoDetail={() => this.props.updateGlobalState("Detail")} />)
                                    }
                                </Route>
                                <Route path="/Detail"><NewsDetail showLoading={() => this.showLoading()} hideLoading={() => this.hideLoading()} /></Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
                <div className="col-md-4">
                    <div className="padding-right-15">
                        <Paper elevation={3} className="total-content">
                            <VietNamTotal/>
                            <WorldTotal/>
                        </Paper>
                    </div>
                </div>
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
        updateGlobalState: (type, payload) => {
            dispatch({ type: type })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)