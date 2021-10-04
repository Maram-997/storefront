import { Button } from "@mui/material";
//import React from "react";
import { connect } from "react-redux";
import { activatedCategory, reset } from '../store/categories';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const category = (props) => {
    const [type, setType] = React.useState('');
    
    const handleChange = (event) => {
        setType(event.target.value);
    };
            
          return (
            <div>
              <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-required-label">Categories</InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={type}
                  label="Category Type"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Electronics</MenuItem>
                  <MenuItem value={20}>Food</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
            </div>
          );
    
}

// const mapStateToProps  = (state) => ({
//     categories: state.categoriesReducer.categories
// })

// const mapDispatchToProps  = { activatedCategory, reset }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
//   )(category);

export default category;