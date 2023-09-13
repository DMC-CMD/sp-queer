import styled from "styled-components";
import { useState } from "react";
import SpQueerLogo from "../media/sp_queer_logo.png";
import MenuBarsIcon from "../media/menu-bars.svg";
import CloseSvg from "../media/close-icon.svg";
import { Link } from "./CommonComponents";
import { Link as RouterLink } from "react-router-dom";

const DesktopNavbar = styled.nav`
  height: 100px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 780px) {
    padding: 0 5px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
const SpLogo = styled.img`
  height: 85px;
  transition: all 300ms;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 700px) {
    height: 60px;
  }
  @media (max-width: 600px) {
    height: 85px;
  }
`;
const Right = styled.div`
  display: flex;
`;
const Links = styled.ul``;

const Language = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
`;
const LangOption = styled.a`
  color: white;
  text-decoration: none;
  border: 1px solid white;
  padding: 4px 8px;
  margin-left: 10px;
  font-size: 18px;
  transition: all 300ms;

  &:hover {
    color: #ef199a;
    background-color: white;
  }
`;
const A = styled(Link)`
  font-size: 32px;
  margin: 0 12px;

  @media (max-width: 875px) {
    margin: 0;
  }

  @media (max-width: 780px) {
    font-size: 24px;
  }
`;

const HrDesktop = styled.hr`
  border: 1px solid white;

  @media (max-width: 600px) {
    display: none;
  }
`;

const MobileBox = styled.div`
  display: flex;
  justify-content: flex-end;

  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
`;
const MobileNavbar = styled.nav`
  position: fixed;
  padding: 12px;
  height: 100vh;
  padding-bottom: 0;
  background-color: #ef199a;
  z-index: 30;
  @media (min-width: 601px) {
    display: none;
  }
`;
const MobileLinks = styled.ul`
  display: flex;
  background-color: #ef199a;
  z-index: 3;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  margin-bottom: 48px;

  position: relative;
  bottom: 50px;
`;
const MobileLink = styled(Link)`
  font-size: 50px;
  font-weight: 700;

  @media (max-width: 370px) {
    font-size: 40px;
  }
`;
const MobileLangBox = styled.div`
  margin-top: 22px;
`;
const MobileLangOption = styled.a`
  color: white;
  border: 2px solid white;
  padding: 8px 16px;
  font-size: 28px;
  margin: 8px;

  text-decoration: none;
  transition: all 300ms;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: #ef199a;
  }
`;

const MenuBars = styled.img`
  width: 80px;
  padding: 12px;
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (min-width: 601px) {
    display: none;
  }
`;
const CloseBox = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const CloseIcon = styled.img`
  width: 80px;

  &:hover {
    cursor: pointer;
  }
`;
const LogoBox = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;

  @media (min-width: 601px) {
    display: none;
  }
`;
const HrMobile = styled.hr`
  border: 1px solid white;
  margin: 0;

  @media (min-width: 601px) {
    display: none;
  }
`;

export const Navbar = (props: { isFrench: boolean }) => {
  const { isFrench } = props;
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <DesktopNavbar>
        <RouterLink to="/">
          <SpLogo src={SpQueerLogo} />
        </RouterLink>
        <Right>
          <Links>
            <A smooth to={isFrench ? "/#demandes" : "/#forderungen"}>
              {isFrench ? "Demandes" : "Forderungen"}
            </A>
            <A smooth to={isFrench ? "/#candidat.e.s" : "/#kandidierende"}>
              {isFrench ? "Candidat.e.s" : "Kandidierende"}
            </A>
            <A smooth to={isFrench ? "/#participer" : "/#mitmachen"}>
              {isFrench ? "Participer" : "Mitmachen"}
            </A>
          </Links>
          <Language>
            <LangOption href="https://queer-waehlen.ch/">DE</LangOption>
            <LangOption href="https://vote-queer.ch/">FR</LangOption>
          </Language>
        </Right>
      </DesktopNavbar>

      <HrDesktop />

      <MobileBox>
        <LogoBox>
          <a href="/">
            <SpLogo src={SpQueerLogo} />
          </a>
        </LogoBox>
        {showMobileMenu ? (
          <MobileNavbar id="mobileNav">
            <MobileLinks>
              <CloseBox>
                <CloseIcon
                  src={CloseSvg}
                  onClick={() => setShowMobileMenu(false)}
                />
              </CloseBox>

              <div>
                <MobileLink
                  onClick={() => setShowMobileMenu(false)}
                  smooth
                  to="/"
                >
                  Home
                </MobileLink>
              </div>
              <div>
                <MobileLink
                  to={isFrench ? "/#demandes" : "/#forderungen"}
                  onClick={() => setShowMobileMenu(false)}
                  smooth
                >
                  {isFrench ? "Demandes" : "Forderungen"}
                </MobileLink>
              </div>
              <div>
                <MobileLink
                  to={isFrench ? "/#candidat.e.s" : "/#kandidierende"}
                  onClick={() => setShowMobileMenu(false)}
                  smooth
                >
                  {isFrench ? "Candidat.e.s" : "Kandidierende"}
                </MobileLink>
              </div>
              <div>
                <MobileLink
                  to={isFrench ? "/#participer" : "/#mitmachen"}
                  onClick={() => setShowMobileMenu(false)}
                  smooth
                >
                  {isFrench ? "Participer" : "Mitmachen"}
                </MobileLink>
              </div>
              <MobileLangBox>
                <MobileLangOption href="https://queer-waehlen.ch/">
                  DE
                </MobileLangOption>
                <MobileLangOption href="https://vote-queer.ch/">
                  FR
                </MobileLangOption>
              </MobileLangBox>
            </MobileLinks>

            <HrMobile />
          </MobileNavbar>
        ) : (
          <MenuBars
            onClick={() => setShowMobileMenu(true)}
            src={MenuBarsIcon}
          />
        )}
      </MobileBox>
    </>
  );
};
