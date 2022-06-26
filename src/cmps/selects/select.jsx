import { Select, MenuItem, InputLabel } from '@mui/material'

const SelectInput = ({value, text, action, options}) => (
    <>
        <InputLabel id="demo-simple-select-label">{text}</InputLabel>

          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={action}
          >
              {
                  options?.map(({value,text}) => {
                      return <MenuItem value={value}>{text}</MenuItem>
                  })
              }
        </Select>
            </>
  )


export default SelectInput