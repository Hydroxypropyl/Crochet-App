import React, { Component } from 'react';
import styles from "../styles/glossary.module.css"

class StitchItem extends Component {

    toggleFavorite() {
        //TODO: add/remove to the list of favorite and sync with server
    }

    render() {
        return (
            <div className={styles.stitch_container}>
                <div className={styles.stitch_image}>
                    <img src={this.props.image} alt="" />
                    <span className={styles.stitch_name}>{this.props.name}</span>
                </div>
                <button className={styles.favorite_button} onClick={this.toggleFavorite}>FAV</button>
            </div>
        )
    }
}

export default StitchItem