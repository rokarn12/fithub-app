import React, {useState} from "react";

// design
import {TextField,
    InputAdornment,
    IconButton,
    OutlinedInput,
    FormControl,
    InputLabel,
    Button,
    FormHelperText,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Signup = () => {
    // form states
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // password validation
    let hasSixChar = password.length >= 6;

    return (
        <div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
            <div className="text-center mb-5 alert alert-primary">
                <label htmlFor="" className="h2">
                    Sign Up for FitHub
                </label>
            </div>

            <div className="form-group">
                <TextField 
                    size="small"
                    variant="outlined"
                    className="form-control"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
            </div>

            <div className="form-group">
                <TextField 
                    size="small"
                    variant="outlined"
                    className="form-control"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
            </div>

            <div className="form-group">
                <FormControl 
                    variant="outlined"
                    size="small"
                    className="form-control"
                    >
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput 
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment>
                                    <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? (<VisibilityIcon />) : (<VisibilityOffIcon />)}
                                    </IconButton>
                                </InputAdornment>
                            }
                            />
                </FormControl>
                {password && (<div className="ml-1">
                    <div>
                        {hasSixChar ? (
                            <span className="text-success">
                                <CheckCircleIcon
                                    className="mr-1"
                                    fontSize="small"
                                />
                                <small>At least 6 characters</small>
                            </span>
                        ) : (
                            <span className="text-danger">
                                <CancelIcon
                                    className="mr-1"
                                    fontSize="small"
                                />
                                <small>At least 6 characters</small>
                            </span>
                        )}
                    </div>
                </div>)}
            </div>

            <div className="form-group">
                <TextField 
                    size="small"
                    type="password"
                    variant="outlined"
                    className="form-control"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {password && confirmPassword && (<FormHelperText className="ml-1 mt-1">
                        {password === confirmPassword ? 
                        <span className="text-success">Password matches</span> : 
                        <span className="text-danger">Password does not match</span>}
                    </FormHelperText>)}
            </div>

            <div className="text-center mt-4">
                <Button variant="contained" disabled={!username || !email || !password || !confirmPassword || password !== confirmPassword || !hasSixChar}>
                            Submit
                </Button>
            </div>
        </div>
    );
};

export default Signup;