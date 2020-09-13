import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

export default class NewsItem extends Component {
    render() {
        return (
            <div>
                <Paper elevation={3} className="item">
                    <div className="row">
                        <div className="col-md-4 row">
                            <div className="col-md-12"><img src={this.props.News.imageUrl} /></div>
                        </div>
                        <div className="col-md-8">
                            <Link to={{ pathname: '/Detail', state: this.props.News.id }} onClick={() => this.props.GoDetail()}>
                                <h3>{this.props.News.title}</h3>
                            </Link>
                            <p>{this.props.News.content}</p>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}
