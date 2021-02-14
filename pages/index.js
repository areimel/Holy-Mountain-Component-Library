//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import Header from '@components/Template/Header/Header'
import Container from '@components/Template/Container/Container'
import Sandbox from '@components/Template/Sandbox/Sandbox'
import Description from '@components/Template/Description/Description'
import Footer from '@components/Template/Footer/Footer'

import FixedSplit from '@components/FixedSplit/FixedSplit'

//VARS
export async function getStaticProps() {
  let title = "Initial Component Demo"
  let author = "Alec Reimel, Planet Caravan Studios"
  let description = "This is the inital demo template for Holy Mountain frontend components."
  let footerMessage = "Created by Planet Caravan Studios"

    return {
      props: {
        title,
        author,
        description,
        footerMessage,
      }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Holy Mountain Component</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Header title="Holy Mountain Component Demo" />
        <Container>
          <Description
            title={props.title}
            author={props.author}
            description={props.description}
          />
        </Container>
        
        <Sandbox>
          <FixedSplit 
            backgroundLeft="url('https://source.unsplash.com/1600x900/?corgi')"
            backgroundRight
          />
        </Sandbox>
        
      </main>

      <Footer footerMessage={props.footerMessage} />
    </>
  )
}
