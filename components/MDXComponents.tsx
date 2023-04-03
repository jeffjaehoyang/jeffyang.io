import { useMDXComponent } from 'next-contentlayer/hooks';
/* eslint-disable react/display-name */
import React from 'react';

import { coreContent } from '@/lib/utils/contentlayer';

import Image from './Image';
import CustomLink from './Link';
import Pre from './Pre';
import TOCInline from './TOCInline';

import type { BlogPost } from 'contentlayer/generated';
interface MDXLayout {
  layout: string;
  content: BlogPost;
  viewCount: string;
  [key: string]: unknown;
}

interface Wrapper {
  layout: string;
  [key: string]: unknown;
}

export const Wrapper = ({ layout, content, viewCount, ...rest }: MDXLayout) => {
  const Layout = require(`../layouts/${layout}`).default;
  return <Layout content={content} viewCount={viewCount} {...rest} />;
};

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
};

export const MDXLayoutRenderer = ({ layout, content, viewCount, ...rest }: MDXLayout) => {
  const MDXLayout = useMDXComponent(content.body.code);
  const mainContent = coreContent(content);

  return (
    <MDXLayout
      layout={layout}
      content={mainContent}
      viewCount={viewCount}
      components={MDXComponents}
      {...rest}
    />
  );
};
