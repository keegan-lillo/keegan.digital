/* eslint-disable import/order */
// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"

declare module '*.module.scss' {
  const s: { [className: string]: string }
  export default s
}

declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react'

  export const ReactComponent: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string }
  >

  const dataUri: string
  export default dataUri
}

declare module 'csstype' {
  import { THEME } from '../src/components/Theme'

  interface Properties {
    // Add a CSS Custom Property
    '--theme'?: THEME
  }
}

declare module 'netlify-cms-core' {
  import { EntryMap, EntryObject } from 'netlify-cms-core/src/types/redux'
  import { StaticallyTypedRecord } from 'netlify-cms-core/src/types/immutable'

  type EventName =
    | 'prePublish'
    | 'postPublish'
    | 'preUnpublish'
    | 'postUnpublish'
    | 'preSave'
    | 'postSave'

  type EventHandler = (data: {
    author: { login?: string; name?: string }
    entry: EntryMap
  }) => StaticallyTypedRecord

  export interface CMS {
    registerEventListener: (
      event: {
        handler: EventHandler
        name: EventName
      },
      options = {},
    ) => void
  }
}
