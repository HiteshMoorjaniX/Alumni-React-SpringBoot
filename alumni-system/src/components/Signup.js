import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function Signup() {
    return (
        <div style={{ textAlign: 'center' }}>

            <h1 >Signup <LockOpenIcon color="info" /> </h1>
            <div>
                <Grid
                    container
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Grid item>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" style={{ width: '400px' }} />
                    </Grid>
                    <br />
                    <Grid item>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{ width: '400px' }} />
                    </Grid>
                    <br />
                    <Grid item>
                        <TextField type="number" id="outlined-basic" label="Enrollment No." variant="outlined" style={{ width: '400px' }} />
                    </Grid>
                    <br />
                    <Grid item>
                        <TextField type="password" id="outlined-basic" label="Password" variant="outlined" style={{ width: '400px' }} />
                    </Grid>
                    <br />
                    <Grid item>
                        <TextField type="password" id="outlined-basic" label="Confirm Password" variant="outlined" style={{ width: '400px' }} />
                    </Grid>
                    <br />
                    <Grid item>

                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select style={{ width: '400px' }} 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>Passout</MenuItem>
                            <MenuItem value={20}>Pursuing</MenuItem>
                            
                        </Select>


                    </Grid>
                    <br /><br />
                    <Grid item>
                        <Button style={{ width: '150px', marginRight: '20px' }} variant="contained">Submit</Button>
                        <Button style={{ width: '150px', marginLeft: '20px' }} variant="contained">Cancel</Button>
                        </Grid>
                    <br /><br />
                </Grid>
            </div>


        </div>
    )
}
