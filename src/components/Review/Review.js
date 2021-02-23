import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Star from './../../assets/image/Star.png'
import axios from 'axios'
const url = process.env.REACT_APP_URL

const Review = ({ id, rating }) => {

    const [review, setReview] = useState([])

    const getReview = () => {
        axios.get(url + '/user/getReview/' + id)
            .then(({ data }) => {
                setReview(data.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getReview(id)
    }, [id])

    const oneStar = review.filter(({ rating }) => {
        return rating == 1
    }).length

    const twoStar = review.filter(({ rating }) => {
        return rating == 2
    }).length

    const threeStar = review.filter(({ rating }) => {
        return rating == 3
    }).length

    const fourStar = review.filter(({ rating }) => {
        return rating == 4
    }).length

    const fiveStar = review.filter(({ rating }) => {
        return rating == 5
    }).length

    return (

        <>
            <p className="mt-3"><strong>{review.length} Review</strong></p>
            {
                review.length > 0 ? (
                    review.map(({ fullname, rating, review, created_at }) => {
                        let starRating;
                        if (rating == 1) {
                            starRating =
                                <div className="row">
                                    <img src={Star} />
                                </div>
                        } else if (rating == 2) {
                            starRating =
                                <div className="row">
                                    <img src={Star} />
                                    <img src={Star} />
                                </div>
                        } else if (rating == 3) {
                            starRating =
                                <div className="row">
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                </div>
                        } else if (rating == 4) {
                            starRating =
                                <div className="row">
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                </div>
                        } else {
                            starRating =
                                <div className="row">
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                </div>
                        }
                        return (
                            <>
                                <div style={{ width: '100%', height: '20%', borderStyle: 'outset', marginTop: '10px', marginBottom: '10px' }} >
                                    <div className="p-3">
                                        <div className="d-flex flex-row justify-content-between">
                                            <div>
                                                <p style={{ color: 'red' }}>{fullname}</p>
                                            </div>
                                            <div>
                                                <p><strong style={{ color: 'green' }}>{created_at.split('T')[0]}</strong></p>
                                            </div>
                                        </div>
                                        <div style={{ marginLeft: '15px' }}>
                                            {starRating}
                                        </div>
                                        <div className="mt-3">
                                            <p>{review}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                ) : (
                        <>
                            <strong>Belum ada Review</strong>
                        </>
                    )
            }
        </>
    )
}
export default Review
