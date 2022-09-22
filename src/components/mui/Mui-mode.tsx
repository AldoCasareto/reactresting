import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

type Props = {};

const MuiMode = (props: Props) => {
  const theme = useTheme();
  return <Typography component='h1'>{theme.palette.mode} mode</Typography>;
};

export default MuiMode;
