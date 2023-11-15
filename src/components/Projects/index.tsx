"use client"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const lists = [
    {
      name: "Felippe Mattoso",
      site: "https://www.fmattoso.com.br/"
    },
    {
      name: "Grupo Fleury",
      site: "https://www.fleury.com.br/"
    },
    {
      name: "Fleury Genomica",
      site: "https://www.fleurygenomica.com.br/"
    },
    {
      name: "Sommos Dna",
      site: "https://sommosdna.com.br/"
    }
  ];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: '40px',
    textAlign: 'center',
    color: theme.palette.primary.light,
    width: '100%',
    height: '140px',
    borderRadius: '8px',
}));

export default function Projects(id:string) {
    return (
        <Box sx={{ width: '100%', marginBottom: '90px' }} id={id}>
            <Typography sx={{ color: 'primary.light', textAlign: 'center', fontSize: '18px'}}>Projetos</Typography>
            <Divider sx={{ backgroundColor: 'primary.main', height: '4px', width: '136px', borderRadius: '2px', margin: '0 auto'}} />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: '24px'}}>
                {lists.map((list, index) => ((
                    <Grid item xs={6} key={index}>
                        <Item>
                            <Link href={list.site} target='_blank' underline="none" sx={{ color: 'primary.light', fontSize: '18px'}}>{list.name}</Link>
                        </Item>
                    </Grid>
                )))}
            </Grid>
        </Box>
        
    )
}