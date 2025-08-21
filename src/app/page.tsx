import { Box } from '@mui/system';
import Container from '@mui/material/Container';

import Me from '@/components/Me'
import Qualifications from '@/components/Qualifications'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'


export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '20px' }}>
      <Me />
      <Qualifications id="qualifications"/>
      <Projects id="projects" />
      <Contact id="contacs"/>
    </Container>
  )
}
