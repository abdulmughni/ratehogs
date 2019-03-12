import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBProgress, MDBBtn } from "mdbreact";

import CommentAvatar from '../../../statics/images/comment-avatar.png';

class CustomerReviews extends Component {
    render() {
        return(
            <div className="section pt-0">
                <MDBContainer>                    
                    <MDBRow className="col-middle">
                        <MDBCol md="5">
                            <div className="rh-heading-style reviews-heading">
                                <h3>239 Customer Reviews</h3>
                                <div className="total-reviews-range">
                                    <span className="stars-range">
                                        <span className="fa fa-star star-check"></span>
                                        <span className="fa fa-star star-check"></span>
                                        <span className="fa fa-star star-check"></span>
                                        <span className="fa fa-star star-check"></span>
                                        <span className="fa fa-star"></span>
                                    </span>
                                    <span className="average-stars">4.3 out of 5 stars</span>
                                </div>
                            </div>

                            <div className="ratings-progress">
                                <span>5 start</span>
                                <span className="progress-wrapper"><MDBProgress value={68} /></span>
                                <span>68%</span>
                            </div>

                            <div className="ratings-progress">
                                <span>4 start</span>
                                <span className="progress-wrapper"><MDBProgress value={23} /></span>
                                <span>23%</span>
                            </div>

                            <div className="ratings-progress">
                                <span>3 start</span>
                                <span className="progress-wrapper"><MDBProgress value={12} /></span>
                                <span>12%</span>
                            </div>

                            <div className="ratings-progress">
                                <span>2 start</span>
                                <span className="progress-wrapper"><MDBProgress value={8} /></span>
                                <span>8%</span>
                            </div>

                            <div className="ratings-progress">
                                <span>1 start</span>
                                <span className="progress-wrapper"><MDBProgress value={68} /></span>
                                <span>68%</span>
                            </div>

                            <div className="reviews-heading pt-2">
                                <h3>Review this product</h3>
                                <p>Share your thoughts with other customers</p>
                                <MDBBtn className="ml-0">Sign in to write a product review</MDBBtn>
                            </div>
                        </MDBCol>
                        <MDBCol md="7">
                            <div className="review-comment">
                                <div className="comment-avatar">
                                    <img src={CommentAvatar} alt="Avatar" />
                                </div>
                                <div className="rh-heading-style reviews-heading pt-0 pb-0">
                                    <div className="comment-date">September 2, 2018</div>
                                    <h3>Hanzel E. Drummonds</h3>                                
                                    <div className="total-reviews-range mb-3">
                                        <span className="stars-range">
                                            <span className="fa fa-star star-check"></span>
                                            <span className="fa fa-star star-check"></span>
                                            <span className="fa fa-star star-check"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </span>
                                    </div>
                                    
                                    <p>Proin vestibulum eros elit, vitae dignissim enim elementum quis. Integer orci urna, congue in pellentesque et, bibendum quis odio.</p>
                                </div>
                            </div>  

                            <div className="review-comment">
                                <div className="comment-avatar">
                                    <img src={CommentAvatar} alt="Avatar" />
                                </div>
                                <div className="rh-heading-style reviews-heading pt-0 pb-0">
                                    <div className="comment-date">September 2, 2018</div>
                                    <h3>Hanzel E. Drummonds</h3>                                
                                    <div className="total-reviews-range mb-3">
                                        <span className="stars-range">
                                            <span className="fa fa-star star-check"></span>
                                            <span className="fa fa-star star-check"></span>
                                            <span className="fa fa-star star-check"></span>
                                            <span className="fa fa-star star-check"></span>
                                            <span className="fa fa-star star-check"></span>
                                        </span>
                                    </div>
                                    
                                    <p>Proin vestibulum eros elit, vitae dignissim enim elementum quis. Integer orci urna, congue in pellentesque et, bibendum quis odio.</p>
                                </div>
                            </div>                        
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default CustomerReviews;
