import React from 'react'
import "./Header.css"
import PersonIcon from "@material-ui/icons/Person"
import ForumIcon from "@material-ui/icons/Forum"
import IconButton from "@material-ui/core/IconButton"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import { Link, useHistory } from "react-router-dom"

function Header({ backButton }) {
    const history = useHistory()
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)} >
                    <ArrowBackIosIcon className="header_icon" fontSize="large" />
                </IconButton>
            ) : (
                    <IconButton>
                        <PersonIcon className="header_icon" fontSize="large" />
                    </IconButton>
                )}
            <Link to="/">
                <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-768x432.png"
                    alt="Tinder_Logo" />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header_icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
