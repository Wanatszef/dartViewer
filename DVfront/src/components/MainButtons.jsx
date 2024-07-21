import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function MainButtons() {
  return (
    <Stack spacing={2} direction="row">
        <div>
        <Button variant="outlined">Play</Button>
        </div>
        <div>
        <Button variant="outlined">Ranking</Button>
        </div>
        <div>
        <Button variant="outlined">History</Button>
        </div>
    
    </Stack>
  );
}
export default MainButtons;