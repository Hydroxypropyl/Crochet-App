import React, { Component } from 'react';
import styles from "../styles/glossary.module.css"

class StitchItem extends Component {

    toggleFavorite() {
        //TODO: add/remove to the list of favorite and sync with server
    }

    render() {
        return (
            <div class={styles.stitch_container}>
                <div class={styles.stitch_image}>
                    <img src={this.props.image} alt="" />
                    <span class={styles.stitch_name}>{this.props.name}</span>
                </div>
                <button class={styles.favorite_button} onClick={this.toggleFavorite}>FAV</button>
            </div>
        )
    }
}

export default StitchItem