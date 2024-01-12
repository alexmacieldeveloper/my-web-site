import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image'

export default function Me() {
    return (
        <Box sx={{ width: '100%', textAlign: 'center', margin: '100px 0' }}>
            <Card sx={{ width: '136px', height:'136px', backgroundColor: '#727272', borderRadius: '50%', margin: '0 auto'}}>
                <Image src="/profile1.png" alt="me" height={127} width={104} style={{ margin: '9px auto'}}/>
            </Card>
            <Typography variant="h5" sx={{ color: "primary.light", fontSize: '24px', fontWeight: 800 }}>DESENVOLVEDOR</Typography>
            <Typography variant="h5" sx={{ color: "primary.light", fontSize: '20px', fontWeight: 500, letterSpacing: '19px' }}>CRIATIVO</Typography>
            <Typography variant="h5" sx={{ color: "primary.light", fontSize: '18px', fontWeight: 300, letterSpacing: '17.1px' }}>FRONT END</Typography>
        </Box>
    )
}