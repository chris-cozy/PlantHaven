import {Box} from "@mui/material";
import {styled} from "@mui/system";

// A styled component to use with other components, when certain css properties are used commonly
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

export default FlexBetween;