import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Login() {
    return (

        <div style={{ textAlign: 'center' }}>

            <h1 >Login <LockIcon color="info" /> </h1>
            <div>
                <Grid
                    container
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    
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
                        <Button style={{ width: '150px', marginRight: '20px' }} variant="contained">Login</Button>
                        
                    </Grid>
                    <br /><br />
                    <InputLabel id="demo-simple-select-label">or Login with</InputLabel>
                    <Grid item>
                    <br />

                    <GoogleIcon color="primary" style={{marginRight : '20px'}} />
                        <LinkedInIcon color="primary" />
                    </Grid>
                </Grid>
            </div>


        </div>

    )
}
