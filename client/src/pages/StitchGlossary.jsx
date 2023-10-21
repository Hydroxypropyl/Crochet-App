import React, { useState, useEffect } from 'react'
import api from '../api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Sortable table example in Material UI: https://mui.com/material-ui/react-table/#sorting-amp-selecting

const StitchGlossary = () => {
    const [stitches, setStitches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api.getAllStitches().then(res => {
          if (res.success) {
            console.log(res.data);
            setStitches(res.data);
          } else {
            window.alert(`Unable to fetch stiches`);
          }
          setIsLoading(false);
        })
    }, [])

    /*const addStitch = async () => {
        const payload = { name: "Stitch_test", difficulty: "4", image: "my_image"}

        await api.insertStitch(payload).then(res => {
            window.alert(`Stitch inserted successfully`);
            window.location.reload();
        })
    }*/

    console.log('TCL: StitchesList -> render -> stitches', stitches)

    //Check if there is stitches to render
    let showTable = true
    if (!stitches.length) {
        showTable = false
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Difficulty</TableCell>
                  <TableCell>Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stitches.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.difficulty}</TableCell>
                    <TableCell>{row.image}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>
    )
    
}

export default StitchGlossary