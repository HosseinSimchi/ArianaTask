import React from 'react';

import {Table,Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { Link } from 'react-router-dom';



const SecondPage = () => {


    const data = JSON.parse(localStorage.getItem('InfoData'))
    const addNewData = () => {
        localStorage.name = ""
        localStorage.family = ""
        localStorage.value = ""
        localStorage.educationType = ""
    }


    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell >ID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Family</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">Education Type</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <>
                    {data.map((item, index) => {
                        return (<>
                            <TableRow>
                                <TableCell component="th" scope="row">{index+1}</TableCell>
                                <TableCell component="th" align="right" scope="row">{item[0]}</TableCell>
                                <TableCell component="th" align="right" scope="row">{item[1]}</TableCell>
                                <TableCell component="th" align="right" scope="row">{item[2]}</TableCell>
                                <TableCell component="th" align="right" scope="row">{item[3]}</TableCell>
                            </TableRow>
                        </>)
                    })}
                    </>
                </TableBody>
            </Table>
        </TableContainer>
        <br /> <br />
        <Link to='/'>
        <Button onClick={addNewData} variant="contained">Add Data</Button>
        </Link>
        </>
    )
}


export default SecondPage;