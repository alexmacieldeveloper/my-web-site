"use client"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LuLinkedin, LuGithub } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';


export default function Footer() {
    return (
        <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none', lg: 'none'}, position: 'fixed', bottom: 0, width: '100%', padding: '24px 0', backgroundColor: '#0E0E0E'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '24px'}}>
                <LuGithub color='#FDFDFD' size='1.5em' title='GitHub' />
                <LuLinkedin color='#FDFDFD' size='1.5em' title='Linkedin' />
                <FaWhatsapp color='#FDFDFD' size='1.5em' title='Whatsapp' />
                <MdOutlineMailOutline color='#FDFDFD' size='1.5em' title='E-mail' />
            </Box>
        </Box>
    )
}