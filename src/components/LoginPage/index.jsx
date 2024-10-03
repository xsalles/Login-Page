import { Container } from "."
import LoginPageHeader from "./pattern/composition/header/loginPage-header.composition"

export default function LoginPage () {
    return(
      <Container>
        <LoginPageHeader/>
      </Container>
    )
    
}