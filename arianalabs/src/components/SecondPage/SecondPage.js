import React, { useState } from 'react';

import {Table,Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

import { useContext } from 'react';
import myContext from '../../context/context';

const SecondPage = () => {
    const context = useContext(myContext)

    const [yourName, setYourName] = useState(localStorage.getItem('name'))
    const [yourFamily, setYourFamily] = useState(localStorage.getItem('family'))
    const [yourAge, setYourAge] = useState(localStorage.getItem('age'))
    const [yourEducation, setYourEducation] = useState(localStorage.getItem('EducationType'))

    const handleEditInfo = () => {
        context.functionName(false)
        localStorage.showNextPage = false
        localStorage.name = yourName;
        localStorage.family = yourFamily;
        localStorage.age = yourAge;
        localStorage.EducationType = yourEducation;
    }

    const handleDeleteInfo = () => {
        localStorage.name = '';
        localStorage.family = '';
        localStorage.age = '';
        localStorage.EducationType = '';
        setYourName(localStorage.getItem('name'))
        setYourFamily(localStorage.getItem('family'))
        setYourAge(localStorage.getItem('age'))
        setYourEducation(localStorage.getItem('EducationType'))
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
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                    <TableCell component="th" scope="row">{yourName}</TableCell>
                    <TableCell component="th" align="right" scope="row">{yourFamily}</TableCell>
                    <TableCell component="th" align="right" scope="row">{yourAge}</TableCell>
                    <TableCell component="th" align="right" scope="row">{yourEducation}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <br /> <br />
        <Button onClick={handleEditInfo} variant="contained">Edit information</Button>
        <br /> <br />
        <Button onClick={handleDeleteInfo} variant="contained">Delete information</Button>
        </>
    )
}


export default SecondPage;