import React, {useState, useRef} from 'react';

import {Container, Box, TextField, Button,OutlinedInput , ListItemText ,InputLabel,MenuItem,Select,Checkbox,  } from '@mui/material';
import { blue } from '@mui/material/colors';

import { useContext } from 'react';
import myContext from '../../context/context';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const Education = [
    'Formal',
    'Non Formal',
    'Informal',
];

const FirstPage = () => {

    const [educationType, setEducationType] = useState ([])
    const name = useRef (localStorage.getItem('name'))
    const family = useRef (localStorage.getItem('family'))
    const age = useRef (localStorage.getItem('age'))


    const context = useContext (myContext)


    const handleChangeName = (event) => {
        name.current = event.target.value
    }

    const handleChangeFamily = (event) => {
        family.current =  event.target.value
    }

    const handleChangeAge = (event) => {
        age.current = event.target.value
    }

    const submitHandler = () => {
        localStorage.setItem('name', name.current )
        localStorage.setItem('family', family.current )
        localStorage.setItem('age', age.current )
        localStorage.setItem('EducationType', educationType )
        context.functionName(true)
        localStorage.setItem('showNextPage', true)
    }

    const handleChange = (event) => {
        setEducationType(
        typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value,
      );
    };
    return(
        <>
            <Container fixed>
                <Box sx={{ bgcolor: blue[50], height: '90vh', margin:'90px', border: `5px dashed ${blue[400]}` }}>
                    <Box component="form"  noValidateautoComplete="off" sx={{margin:"100px 400px "}}> 
                        <TextField onChange = {handleChangeName} sx={{ display:"block"}} id="outlined-basic" label="Name" defaultValue={`${localStorage.getItem('name') !== '' ? localStorage.getItem('name') : '' }`} variant="outlined" />
                        <br />
                        <TextField onChange = {handleChangeFamily} sx={{display:"block"}} id="outlined-basic" label="Famiily" defaultValue={`${localStorage.getItem('family') !== '' ? localStorage.getItem('family') : '' }`} variant="outlined" />
                        <br />
                        <TextField onChange = {handleChangeAge} sx={{ display:"block" }} id="outlined-basic" label="Age" defaultValue={`${localStorage.getItem('age') !== '' ? localStorage.getItem('age') : '' }`} variant="outlined" />
                        <br />
                        <InputLabel id="demo-multiple-checkbox-label">Education Type</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={educationType}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                            >
                        {Education.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={educationType.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                        </Select>
                        <br /><br /><br />
                        <Button onClick={submitHandler} variant="contained">Submit</Button>

                    </Box>
                </Box>
            </Container>
        </>
    )

}

export default FirstPage;