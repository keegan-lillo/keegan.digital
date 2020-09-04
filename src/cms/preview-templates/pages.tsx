import { PreviewTemplateComponentProps } from 'netlify-cms-core'
import React from 'react'

import { BasicTemplateContent } from '../../templates/basic'
import { HomeTemplateContent } from '../../templates/home'

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

    case 'home':
      return (
        <HomeTemplateContent title={title}>
          {widgetFor('body')}
        </HomeTemplateContent>
      )
  }

  return <div>Missing Template!</div>
}
