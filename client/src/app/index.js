import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { StitchGlossary, StitchInsert, StitchUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/stitches/glossary" exact component={StitchGlossary} />

                <Route path="/stitches/create" exact component={StitchInsert} />
                <Route
                    path="/stitches/update/:id"
                    exact
                    component={StitchUpdate}
                />
            </Switch>
        </Router>
        
    )
}

export default App