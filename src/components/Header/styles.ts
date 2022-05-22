import styled from 'styled-components';
type HeaderModalProps = {
  isActive: boolean;
};
export const HeaderContainer = styled.div`
  z-index: 9;
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.shadow};
  overflow: hidden;
  height: 4rem;
  > div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px 1rem;

    @media screen and (max-width: 860px) {
      justify-content: space-between;
    }
  }
`;
export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  svg {
    display: none;
  }
  @media screen and (max-width: 860px) {
    position: fixed;
    left: 0px;
    right: 0px;
    /* padding: 1rem; */
    border-radius: 5px 5px 0px 0px;
    box-shadow: ${props => props.theme.shadow};
    bottom: 0px;
    background-color: #fff;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    svg {
      display: block;
    }
    .textLink {
      display: none;
    }
  }
`;
export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  .profile {
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    > img {
      cursor: pointer;
      display: block;
      width: 100%;
      border-radius: ${props => props.theme.radius};
    }
  }
  @media screen and (max-width: 880px) {
    > span {
      display: none;
    }
    > button {
      display: none;
    }
  }
  > span {
    cursor: pointer;

    font-weight: ${props => props.theme.normalFontWidth};
  }
  > button {
    background: none;
  }
`;
export const HeaderLogo = styled.a`
  display: block;
  @media screen and (max-width: 880px) {
    .headerText {
      display: none;
    }
  }
`;
export const HeaderModal = styled.div<HeaderModalProps>`
  position: fixed;
  transition: all 0.3s ease;
  min-width: 13rem;
  height: max-content;
  background: #ffff;
  border-radius: ${props => props.theme.radius};
  box-shadow: ${props => props.theme.shadow};
  padding: 0.4rem;
  z-index: ${props => (props.isActive ? '1' : '.5')};
  top: ${props => (props.isActive ? '4.5rem' : '-100%')};
  @media screen and (max-width: 880px) {
    right: 0.5rem;
  }
  right: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > li {
      padding: 0.6rem 0.4rem;
      margin-left: 0.5rem;
      border-radius: ${props => props.theme.radius};
      &:hover {
        background-color: ${props => props.theme.grayColorAlt};
      }
      a {
        svg {
          fill: ${props => props.theme.grayColor1};
        }
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
  > a {
    /* background: ${props => props.theme.grayColorAlt2}; */
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-top: 2px solid ${props => props.theme.grayColor3};
    color: ${props => props.theme.red};
    padding: 0.6rem 0.4rem;
  }
`;
