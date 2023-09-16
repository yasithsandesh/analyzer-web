import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Chip from '@mui/joy/Chip';


export default function TradeType() {
  return (
    <Select
      placeholder="Select Trade Type"
      endDecorator={
        <Chip size="sm" color="danger" variant="soft">
          +5
        </Chip>
      }
      sx={{ width: 240 }}
    >
   <Option value="1">Digit Match</Option>
    </Select>
  );
}