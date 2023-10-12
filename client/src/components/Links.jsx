import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Crochet App
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/stitches/glossary" className="nav-link">
                                Stitches
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/favorites" className="nav-link">
                                Favorites
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/counters" className="nav-link">
                                Counters
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links