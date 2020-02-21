export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4fd38a3832e0de328c674a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iotn6wvh',
                  apiId: '09e10e7f-87bb-43bf-a548-9f5cc3e6143f'
                },
                {
                  buildHookId: '5e4fd38aee454fa813f93055',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tktqo23o',
                  apiId: '6bdec540-4f3f-4877-b632-451d2fc73d89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pawelBareja/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tktqo23o.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
