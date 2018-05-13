import React from 'react'
import LoadingImage from './images/loading.gif'
import './LoadingIndicator.scss'

export default function LoadingIndicator() {
    return (
        <div className="LoadingIndicator">
            <img className="LoadingIndicator-image" src={LoadingImage} alt=""/>
            <div className="LoadingIndicator-text">Loading...</div>
        </div>
    )
}