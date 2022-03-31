// pages/index.tsx
import type { NextPage } from 'next'
import InfoContact from '../components/InfoContact'
import Page from '../components/Page'
import Sidepage from '../components/SidePages'
import Works from '../components/Works'

const Home: NextPage = () => {
  return (
  <>
    <Page>

      <Sidepage>
        <InfoContact></InfoContact>
        <Works></Works>
      </Sidepage>

    


    
    
      
      </Page>
  </>
  )
}

export default Home