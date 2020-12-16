// React
import React from 'react';

// Material UI
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


export default function AlertWrapper(props) {
    const {
        alertMessageObj,
        alertIsActive,
        deactivateAlert
    } = props;
    
    return (
        <>
            <Snackbar open={alertIsActive} autoHideDuration={alertMessageObj.duration} onClose={deactivateAlert}>
                <MuiAlert elevation={6} variant="filled" transition={null} onClose={deactivateAlert} severity={alertMessageObj.severity}>
                    {alertMessageObj.text}
                </MuiAlert>
            </Snackbar>
        </>
    );
};