"use client"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link'

import { LuLinkedin, LuGithub } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';


export default function Footer() {
    return (
        <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none', lg: 'none'}, position: 'fixed', bottom: 0, width: '100%', padding: '24px 0', backgroundColor: '#0E0E0E'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '24px'}}>
                <Link href="https://github.com/alexmacieldeveloper/" target="_blank">
                    <LuGithub color='#FDFDFD' size='1.5em' title='GitHub' />
                </Link>
                <Link href="https://www.linkedin.com/in/alexmacieldeveloper/" target="_blank">
                    <LuLinkedin color='#FDFDFD' size='1.5em' title='Linkedin' />
                </Link>
                <Link href="https://wa.me/11952988030" target="_blank">
                    <FaWhatsapp color='#FDFDFD' size='1.5em' title='Whatsapp' />
                </Link>
                <Link href="mailto:alexmacielsilva29@gmail.com" target="_blank">
                    <MdOutlineMailOutline color='#FDFDFD' size='1.5em' title='E-mail' />
                </Link>
            </Box>
        </Box>
    )
}