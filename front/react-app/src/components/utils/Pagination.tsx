import React from "react";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationOutlined: React.VFC = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
    </Stack>
  );
}
