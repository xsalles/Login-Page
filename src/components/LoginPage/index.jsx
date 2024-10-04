import { Container } from "."
import LoginPageContent from "./pattern/composition/content/loginPage-content.composition.jsx"
import LoginPageHeader from "./pattern/composition/header/loginPage-header.composition.jsx"

export default function LoginPage () {
    return(
      <Container>
        <LoginPageHeader/>
        <LoginPageContent/>
      </Container>
    )
    
}