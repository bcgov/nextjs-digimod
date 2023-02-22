import { Collapse } from "antd";
import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import { CollapseStyled, PanelStyled } from "../components/collapseMenu";
import Link from 'next/link'
import { StyleRichText } from "../components/styledMarkdown";
import parse, {
  attributesToProps, DOMNode,
  Element,
  domToReact,
  HTMLReactParserOptions,
} from 'html-react-parser';
import { HrefLink, HrefLinkInternal } from "../components/htmlTags";
const { renderToStaticMarkup } = require('react-dom/server');

var customReactNode = {
  "CollapseStyled": CollapseStyled,
  "PanelStyled": PanelStyled,
  "StyleRichText": StyleRichText,
};
let title: JSX.Element | React.ReactFragment | null | undefined;
const options = {
  replace: (domNode: DOMNode) => {
    // if (domNode instanceof Element && domNode.attribs) {
    //   const props = attributesToProps(domNode.attribs);
    //   return <div {...props} />;
    // }
    if(domNode instanceof Element && domNode.name === 'img') {
      const props = attributesToProps(domNode.attribs);
      console.log(props);
      console.log(parseInt(props["width"]));
      return (<Image src={props["src"]} alt={props["alt"]} width={parseInt(props["width"])} height={parseInt(props["height"])}/>);
    }
    if (domNode instanceof Element && domNode.name === 'a') {
      const props = attributesToProps(domNode.attribs);
      if (props["href"]) {
        if (props["href"].substring(0, 1) == "/")
          // internal  links need to be handled differently in order for SPA experience to work, otherwise reloads the page
          return (
            <HrefLinkInternal href={props["href"]} className="internalLink">
              {(domNode.children[0] as any).data}
            </HrefLinkInternal>

          )
        else
          return (
            <HrefLink href={props["href"]} className="externalLink">
              {(domNode.children[0] as any).data}
            </HrefLink>
          )
      }
    }
    if (domNode instanceof Element && domNode.name === 'h1') {
      const props = attributesToProps(domNode.attribs);
      title = <Head>
        <title>{(domNode.children[0] as any).data}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>;
      return domNode;

    }
    if (domNode instanceof Element && domNode.attribs) {
      if (domNode.attribs["react-component"]) {
        const props = attributesToProps(domNode.attribs);
        //console.log(domNode);
        if ("assign-inner-content-to-prop" in props) {
          if (props["assign-inner-content-to-prop"] === "htmlOrMarkdown") {
            // props["htmlOrMarkdown"] = domNode;
            // domNode.children = [];
            return React.createElement(
              "div",
              props,
              domToReact(domNode.children , options)
            );
          }
        }
        return React.createElement(
          customReactNode[props["react-component"] as keyof typeof customReactNode],
          props,
          domToReact(domNode.children , options)
        );
      }
    }
  }
};



export const StringToJSX = (props: { domString: string; }) => {
  let output = parse(props.domString, options);
//   console.log('--- Before ---');
// console.log(props.domString);

// console.log('--- After ---');
// console.log(renderToStaticMarkup(output));
//console.log(title);
  return <><div>{title}</div>{output}</>;
};