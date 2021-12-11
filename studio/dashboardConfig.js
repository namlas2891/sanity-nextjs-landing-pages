export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61b3ea75e5d4a60072f96384',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-u37ons7w',
                  apiId: '2533a57f-7bb3-4172-a41d-5bc31b908815'
                },
                {
                  buildHookId: '61b3ea751fcd5e00a0276cb6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dryc5ype',
                  apiId: 'a01c29b0-95f0-4e01-b480-06675bce2c37'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/namlas2891/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dryc5ype.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
