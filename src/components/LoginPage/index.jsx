import { Container, Header, Logo, NameCompany } from "./styles";
import LogoShopSmart from "../../assets/images/logoShopSmart.png"


export default function LoginPage (){
    return (
        <Container>
            <Header>
                <Logo src={LogoShopSmart}/>
                <NameCompany>
                    ShopSmart
                </NameCompany>
            </Header>
        </Container>
    )
}