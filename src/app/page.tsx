import { Box } from '@mui/system';
import Container from '@mui/material/Container';

import Me from '@/components/Me'
import Qualifications from '@/components/Qualifications'
import Projects from '@/components/Projects'


export default function Home() {
  return (
    <Container>
      <Me />
      <Qualifications id="qualifications"/>
      <Projects id="projects" />
    </Container>
  )
}
