module.exports = {
  title: 'Tillhub Design System',
  ga: 'UA-112313836-6',
	themeConfig: {
		sidebar: [
      '/',
      {
        title: 'Guides',
        children: [
          ['/guides/', 'Overview'],
          ['/guides/spacing', 'Spacing']
        ]
      },
      {
        title: 'Components',
        children: [
          ['/components/', 'Overview'],
          ['/components/currencies', 'Currencies']
        ]
      },
      ['/about', 'About']
    ],
    docsRepo: 'tillhub/tillhub-design-system',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    nav: [
      // { text: 'Explorer', link: '/explorer/' }
    ]
  }
}
