import React, { Component } from 'react';
import styles from "../styles/glossary.module.css"

class StitchItem extends Component {
    toggleFavorite() {
        //TODO: add/remove to the list of favorite and sync with server
    }

    render() {
        return (
            <div className={styles.stitch_container}>
                <figure className={styles.stitch_image}>
                  <img src={"images/" + this.props.image} alt=""></img>
                  <figcaption className={styles.stitch_name}>{this.props.name}</figcaption>
                </figure>
                <button className={styles.favorite_button} onClick={this.toggleFavorite}>FAV</button>
            </div>
        )
    }
}

export default StitchItem