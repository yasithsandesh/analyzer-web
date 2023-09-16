import * as React from "react";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import ModalClose from "@mui/joy/ModalClose";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";
import MarketSelect from "./MarketSelect";
import TradeType from "./TradeType";
import Styles from "@/components/TradeEnter/TradeView.module.css";

export default function TradeView({ open, setOpen }) {
  const [type, setType] = React.useState("Guesthouse");
  const [amenities, setAmenities] = React.useState([0, 6]);

  return (
    <React.Fragment>
      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: "md",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <DialogTitle>Manual Trade</DialogTitle>
          <ModalClose />
          <DialogContent
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MarketSelect />
            <TradeType />
            <div className=" flex flex-row justify-center items-center gap-2">
              <input placeholder="Duration" className={Styles.tradeViewInput} />
              <span>Ticks</span>
            </div>

            <div className=" flex flex-row justify-center items-center gap-2">
              <input
                placeholder="Prediction"
                className={Styles.tradeViewInput2}
              />
            </div>

            <div className=" flex flex-row justify-center items-center gap-2">
              <input placeholder="Stake" className={Styles.tradeViewInput} />
              <span>USD</span>
            </div>
            <div className=" flex flex-row justify-center items-center gap-3">
              <button className={Styles.matchesBtn}>Matches</button>
              <button className={Styles.differsBtn}>Differs</button>
            </div>
          </DialogContent>

          <Divider sx={{ mt: "auto" }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            useFlexGap
            spacing={1}
          >
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancle
            </Button>
          </Stack>
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}
