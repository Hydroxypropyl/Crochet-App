import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class StitchGlossary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stitches: [],
            columns: [],
            isLoading: false,
        }
    }

    addStitch = async () => {
        const payload = { name: "Stitch_test", difficulty: "4", image: "my_image"}

        await api.insertStitch(payload).then(res => {
            window.alert(`Stitch inserted successfully`);
            window.location.reload();
        })
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllStitches().then(stitches => {
            this.setState({
                stitches: stitches.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { stitches, isLoading } = this.state
        console.log('TCL: StitchesList -> render -> stitches', stitches)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Difficulty',
                accessor: 'difficulty',
                filterable: true,
            },
            {
                Header: 'Image',
                accessor: 'image',
                filterable: false,
            },
        ]

        //Check if there is stitches to render
        let showTable = true
        if (!stitches.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={stitches}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default StitchGlossary