import styled, { createGlobalStyle } from 'styled-components';
import { Alert, Grid } from 'antd';

export const GlobaStyleSize = createGlobalStyle`
 html {
  font-size: 10px;
 }
`;

// This will is the base style for horizontal alignment of page content
// all resposive elements must be in some kind of container object.
const HorizontalContainer = styled.div.attrs({
  className: 'horizontalAlignment',
})`
  margin: auto;
  max-width: 1065px;
  padding-left: 30px;
  padding-right: 20px;
  z-index: -2;
  @media screen and (min-width: 800px) {
    padding-left: 107px;
  }
  @media screen and (max-width: 800px) {
    padding-left: 15px;
  }
`;

export const PageContainer = styled(HorizontalContainer).attrs({
  className: 'pageContainer',
})`
  background-color: #f2f2f2;
  padding-top: 10px;
  padding-bottom: 70px;
  @media only screen and (max-width: 800px) {
    padding-top: 65px;
  }
`;

export const FooterStyled = styled.footer.attrs()`
  background-color: #036;
  border-top: 2px solid #fcba19;
  color: #fff;
  font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
`;

export const FooterContainer = styled(HorizontalContainer).attrs({
    className: 'footerContainer',
  })``;

  export const RouteBody = styled.div.attrs({
    className: 'routeBody',
  })`
    background-color: #f2f2f2;
    z-index: -2;
    @media only screen and (max-width: 800px) {
      padding-bottom: 60px;
    }
  `;