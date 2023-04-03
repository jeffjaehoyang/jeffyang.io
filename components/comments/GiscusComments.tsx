import { useTheme } from 'next-themes';
import React from 'react';

import siteMetadata from '@/data/siteMetadata';
import Giscus from '@giscus/react';

const GiscusComments: React.FC = () => {
  const { theme, resolvedTheme } = useTheme();
  const commentsTheme =
    siteMetadata.comment.giscusConfig.themeURL === ''
      ? theme === 'dark' || resolvedTheme === 'dark'
        ? siteMetadata.comment.giscusConfig.darkTheme
        : siteMetadata.comment.giscusConfig.theme
      : siteMetadata.comment.giscusConfig.themeURL;

  const COMMENTS_ID = 'comments-container';

  const {
    repo,
    repositoryId,
    category,
    categoryId,
    mapping,
    reactions,
    metadata,
    inputPosition,
    lang,
  } = siteMetadata?.comment?.giscusConfig;

  return (
    <Giscus
      id={COMMENTS_ID}
      repo="jeffjaehoyang/jeffyang.io"
      repoId={repositoryId}
      category={category}
      categoryId={categoryId}
      mapping="specific"
      term="Welcome to jeffyang.io!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition={inputPosition}
      theme={commentsTheme}
      lang={lang}
    />
  );
};

export default GiscusComments;
