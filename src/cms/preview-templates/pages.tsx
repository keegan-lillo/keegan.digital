import { PreviewTemplateComponentProps } from 'netlify-cms-core'
import React from 'react'

import { BasicTemplateContent } from '../../templates/basic'

export default function PagesPreviewTemplate({
  entry,
  widgetFor,
}: PreviewTemplateComponentProps) {
  const title: string = entry.getIn(['data', 'title'])
  switch (entry.getIn(['data', 'template'])) {
    case 'basic':
      return (
        <BasicTemplateContent title={title}>
          {widgetFor('body')}
        </BasicTemplateContent>
      )

    // Todo add other templates
  }

  return null // <div>Missing Template!</div>
}
