import React from "react";
import { Box } from "@mui/system";
import CopyrightIcon from '@mui/icons-material/Copyright';

const FooterIcon: React.VFC = () => {
  return(
    <Box sx={{bgcolor: 'orange',}}>
      <CopyrightIcon /> 2022年
    </Box>
  );
};

export default FooterIcon
