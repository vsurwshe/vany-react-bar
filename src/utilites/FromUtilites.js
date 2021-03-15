import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

// this will render the textfield
const renderTextFiled=({type, name, placeholder, dataValidate, label, input, meta: { touched, invalid, error }, ...custom})=>(
    <div className="form-group">
        <label className="form-label">{label}</label>
        <input 
            type={type}
            className="form-control"
            name={name} 
            placeholder={placeholder}
            error={touched ? invalid : undefined}
            placeholder={placeholder} 
            {...input}
            {...custom}
        />
    </div>
)

// this compoent render sanck bar
const renderSanckBar=({open, color, message})=>(
    <Snackbar open={open} autoHideDuration={1000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert severity={color}> {message} </Alert>
    </Snackbar>
)

export{
    renderTextFiled,
    renderSanckBar
}