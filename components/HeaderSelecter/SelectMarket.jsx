import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Chip from "@mui/joy/Chip";

export default function SelectDecorators({ symbolsArray }) {
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
      {symbolsArray && symbolsArray.map((data, Index) => (
        <Option key={data.allow_forward_starting} value={data.display_order}>
          {data.display_name}
        </Option>
      ))}
    </Select>
  );
}
