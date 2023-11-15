import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardActions';
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography';

const listQualifications = ['HTML5', 'CSS', 'JavaScript', 'TypeScript', 'ReactJs', 'Git', 'Nextjs', 'Nodejs']
type Props = {
    id: string
}
export default function Qualifications(props: Props) {
    const { id } = props;
    return (
        <Box sx={{ width: '100%', margin: '80px 0' }} id={id}>
            <Typography sx={{ color: 'primary.light', textAlign: 'center', fontSize: '18px'}}>Qualificações</Typography>
            <Divider sx={{ backgroundColor: 'primary.main', height: '4px', width: '136px', borderRadius: '2px', margin: '0 auto'}} />
            <Box sx={{ marginTop: '24px'}}>
                <Typography sx={{ color: 'primary.light', fontSize: '16px', fontWeight: 600, marginBottom: '16px'}}>DESENVOLVEDOR FRONT END</Typography>
                <Typography sx={{ color: 'primary.light', fontSize: '16px', fontWeight: 100}}>Eu sou o Álex! 
                    Estou há mais de 3 anos na área de tecnologia, tenho acumulado mais de três anos de experiência dedicada a aprimorar interfaces e experiências na web. 
                    Minha principal ferramenta de trabalho é o JavaScript, uma linguagem que utilizo com maestria para criar sites interativos e dinâmicos que cativam os usuários.
                </Typography>

                {listQualifications.map((itens, index) => ((
                    <Box sx={{ display: 'flex', margin: '16px 0'}} key={index}>
                        <Typography sx={{ color: 'primary.light', fontSize: '10px', width: '26%'}}>{itens}</Typography>
                        <Divider sx={{ backgroundColor: 'primary.main', height: '6px', width: '52%', borderRadius: '2px'}} />
                        <Divider sx={{ backgroundColor: 'primary.light', height: '6px', width: '22%', borderRadius: '2px', margin: '0 auto'}} />
                    </Box>
                )))}
            </Box>
            <Card sx={{ width: '136px', height: '136px', backgroundColor: '#727272', borderRadius: '50%', margin: '10px auto'}}>
            </Card>
        </Box>
    )
}