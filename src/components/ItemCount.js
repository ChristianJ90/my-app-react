import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemCount = () => {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);
  const max = 10;

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);  
  };

  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 3,
        },
        '& .MuiBadge-root': {
          marginRight: 3,
        },
      }}
    >
      <div>
        <ButtonGroup>
          <Button aria-label="reduce" onClick={() => {
            count > 1 && setCount(count - 1);             
              }}>
            <RemoveIcon fontSize="small" />
          </Button>
          <Badge className='mx-4 my-3' color="secondary" badgeContent={count + 0}>
        </Badge>
          <Button aria-label="increase" onClick={() => {
           count < max && setCount(count + 1);              
            }}>
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </Box>
  );
}
export default ItemCount