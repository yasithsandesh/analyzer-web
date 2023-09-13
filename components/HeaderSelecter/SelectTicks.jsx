import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Chip from '@mui/joy/Chip';


export default function SelectTicks() {
  return (
    <Select
      placeholder="Number of Ticks"
      endDecorator={
        <Chip size="sm" color="danger" variant="soft">
          +5
        </Chip>
      }
      sx={{ width: 240 }}
    >
   <Option value="1">100</Option>
   <Option value="2">200</Option>
    </Select>
  );
}