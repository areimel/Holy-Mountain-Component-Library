//IMPORTS
import Head from '@components/Head/Head'
import Header from '@components/Header/Header'
import Container from '@components/Container/Container'
import Sandbox from '@components/Sandbox/Sandbox'
import Footer from '@components/Footer/Footer'

//VARS
export async function getStaticProps() {
  let title = "Holy Mountain Component Demo"
  let description = "This is the inital demo template for Holy Mount frontend components."
  let footerMessage = "Proceed"

    return {
      props: {
        title,
        description,
        footerMessage,
      }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  return (
    <>
      <Head/>

      <main>
        <Header title={props.title} />
        <Container>
          <p className="description">
            {props.description}
          </p>
        </Container>
        
        <Container flex>
        	<Sandbox/>
        </Container>
      </main>

      <Footer footerMessage={props.footerMessage} />
    </>
  )
}
