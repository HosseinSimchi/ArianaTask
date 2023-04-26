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

    const editHandler = (index) => {
        localStorage.name = data[index][0]
        localStorage.family = data[index][1]
        localStorage.age = data[index][2]
        localStorage.educationType = data[index][3]

    }
    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell >Name</TableCell>
                    <TableCell align="right">Family</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">Education Type</TableCell>
                    <TableCell align="right">Edit Info</TableCell>
                    <TableCell align="right">Delete Info</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <>
                    {data.map((item, index) => {
                        console.log(index);
                        return (<>
                            <TableRow>
                                <TableCell component="th" scope="row">{item[0]}</TableCell>
                                <TableCell component="th" align="right" scope="row">{item[1]}</TableCell>
                                <TableCell component="th" align="right" scope="row">{item[2]}</TableCell>
                                <TableCell component="th" align="right" scope="row">{item[3]}</TableCell>
                                <TableCell component="th" align="right" scope="row">
                                    <Link to="/">
                                        <Button onClick={editHandler(index)}>Edit</Button>
                                    </Link>
                                </TableCell>
                                <TableCell component="th" align="right" scope="row"><Button>Delete</Button></TableCell>
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