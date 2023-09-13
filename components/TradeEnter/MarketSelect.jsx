import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Chip from '@mui/joy/Chip';


export default function MarketSelect() {
  return (
    <Select
      placeholder="Select Market"
      endDecorator={
        <Chip size="sm" color="danger" variant="soft">
          +5
        </Chip>
      }
      sx={{ width: 240 }}
    >
   <Option value="1">Jump 10 Index</Option>
   <Option value="2">Jump 11 Index</Option>
    </Select>
  );
}