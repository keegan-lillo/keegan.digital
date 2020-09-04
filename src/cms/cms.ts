import 'normalize.css'
import '../styles/theme.scss'
import '../styles/global.scss'

import CMS from 'netlify-cms-app'

import PagesPreviewTemplate from './preview-templates/pages'

CMS.registerPreviewTemplate('pages', PagesPreviewTemplate)
