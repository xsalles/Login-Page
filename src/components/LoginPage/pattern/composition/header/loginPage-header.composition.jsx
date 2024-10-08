import {

  Header,
  LeftHeaderContainer,
  Logo,
  NameCompany,
  RightHeaderContainer,
  Search,
  SearchLook,
  Look,
  Menu,
} from "./styles";
import LogoShopSmart from "../../../../../assets/images/logoShopSmart.png"
import LookImage from "../../../../../assets/images/look.png";
import MenuImage from "../../../../../assets/images/menu.png";

export default function LoginPageHeader() {
  return (
      <Header>
        <LeftHeaderContainer>
          <Logo src={LogoShopSmart} />
          <NameCompany>ShopSmart</NameCompany>
        </LeftHeaderContainer>
        <RightHeaderContainer>
          <Search>
            <SearchLook>
              <Look src={LookImage} />
            </SearchLook>
          </Search>
          <Menu src={MenuImage} />
        </RightHeaderContainer>
      </Header>
  );
}
