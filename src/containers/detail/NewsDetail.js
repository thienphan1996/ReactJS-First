import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import { useLocation } from "react-router-dom";
import Paper from '@material-ui/core/Paper';

export default function NewsDetail(props) {
    const [Data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    let location = useLocation();

    useEffect(() => {
        props.showLoading();
        setLoading(true);
        fetch("https://demo8626627.mockable.io/detail/" + location.state)
            .then(data => data.json())
            .then(json => {
                setData(json);
                props.hideLoading();
                setLoading(false);
            })
    }, [])

    return (
        <div>
            {
                !loading &&
                <Paper elevation={3} className="detail-content" >
                    <div>
                        <h3>{Data.title}</h3>
                        <h5 className="header-detail">{Data.header}</h5>
                        {
                            Data.imgUrl1 &&
                            <div className="d-flex justify-content-center">
                                <img src={Data.imgUrl1} className="margin-20" />
                            </div>
                        }
                        {
                            Data.content1 &&
                            Data.content1.map((item, i) => <p>{item}</p>)
                        }
                        {
                            Data.imgUrl2 &&
                            <div className="d-flex justify-content-center">
                                <img src={Data.imgUrl2} className="margin-20" />
                            </div>
                        }
                        {
                            Data.content2 &&
                            Data.content2.map((item, i) => <p>{item}</p>)
                        }
                        {
                            Data.imgUrl3 &&
                            <div className="d-flex justify-content-center">
                                <img src={Data.imgUrl3} className="margin-20" />
                            </div>
                        }
                        {
                            Data.content3 &&
                            Data.content3.map((item, i) => <p>{item}</p>)
                        }
                        {
                            Data.imgUrl4 &&
                            <div className="d-flex justify-content-center">
                                <img src={Data.imgUrl4} className="margin-20" />
                            </div>
                        }
                        {
                            Data.content4 &&
                            Data.content4.map((item, i) => <p>{item}</p>)
                        }
                    </div>
                </Paper>
            }
        </div>
    )
}
