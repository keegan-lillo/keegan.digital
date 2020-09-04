import 'normalize.css'
import '../styles/theme.scss'
import '../styles/global.scss'

import CMS from 'netlify-cms-app'

import PagesPreviewTemplate from './preview-templates/pages'

CMS.registerPreviewTemplate('pages', PagesPreviewTemplate)

// CMS.registerEventListener({
//   name: 'preSave',
//   // eslint-disable-next-line sort-keys-fix/sort-keys-fix
//   handler: ({ entry }) => {
//     return entry.get('data').merge({
//       collection: entry.get('collection'),
//       // folder: `/${entry
//       //   .get('meta')
//       //   .get('path')
//       //   .replace(/^\/|\/$/g, '')}`,
//     })
//   },
// })
