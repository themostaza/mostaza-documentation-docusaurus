
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog','ff5'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','d8b'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','a9a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','488'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','a1b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','fd9'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','f61'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','811'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','ee6'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','f26'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','4a1'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','6d1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','aa6'),
    routes: [
      {
        path: '/docs/docusaurus-tutorial/intro',
        component: ComponentCreator('/docs/docusaurus-tutorial/intro','5e1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-basics/congratulations','c9e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-basics/create-a-blog-post','471'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-basics/create-a-document','e92'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-basics/create-a-page','244'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-basics/deploy-your-site','702'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-basics/markdown-features','8da'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-extras/manage-docs-versions','bde'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/docusaurus-tutorial/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/docusaurus-tutorial/tutorial-extras/translate-your-site','67b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','5ba'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/strapi/custom-endpoint',
        component: ComponentCreator('/docs/strapi/custom-endpoint','918'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/strapi/intro',
        component: ComponentCreator('/docs/strapi/intro','2b4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/strapi/mostaza-email-service',
        component: ComponentCreator('/docs/strapi/mostaza-email-service','a69'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','454'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
