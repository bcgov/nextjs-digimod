import React from 'react';
import { FooterStyled, FooterContainer } from './pageContent';
import {
  FooterLinkInternal,
  FooterListItem,
  FooterUL,
} from './htmlTags';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterUL>
          <FooterListItem>
            <FooterLinkInternal href="/">Home</FooterLinkInternal>
          </FooterListItem>
          <FooterListItem>
            <FooterLinkInternal href="/disclaimer">Disclaimer</FooterLinkInternal>
          </FooterListItem>
          <FooterListItem>
            <FooterLinkInternal href="/privacy">Privacy</FooterLinkInternal>
          </FooterListItem>
          <FooterListItem>
            <FooterLinkInternal href="/copyright">Copyright</FooterLinkInternal>
          </FooterListItem>
          <FooterListItem>
            <FooterLinkInternal href="/about">About</FooterLinkInternal>
          </FooterListItem>
        </FooterUL>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
