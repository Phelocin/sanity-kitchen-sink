export default {
  widgets: [
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
                  buildHookId: '5ec728dbfbfdbeb5c7c0ede9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hptt8v83',
                  apiId: 'dfe518e7-69dd-4e09-b26a-ddad446d4d28'
                },
                {
                  buildHookId: '5ec728db4499f3e31c724cf8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rjvawd8i',
                  apiId: 'b55c7706-55a8-4fe7-ab2b-4571f1cab093'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Phelocin/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rjvawd8i.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
