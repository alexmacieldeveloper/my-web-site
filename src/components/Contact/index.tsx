"use client"
import { Box, Typography,  } from '@mui/material';
import Divider from '@mui/material/Divider';
import { FormContact } from '../FormContact'

type Props = {
    id: string
  } 

export default function Contact(props: Props) {
    const { id } = props;

    return (
        <Box sx={{ width: '100%', marginBottom: '90px' }} id={id}>
            <Typography variant='h4' sx={{ color: 'primary.light', textAlign: 'center'}}>Contato</Typography>
            <Divider sx={{ backgroundColor: 'primary.main', height: '4px', width: '136px', borderRadius: '2px', margin: '0 auto'}} />
            <FormContact />
        </Box>
    )
}