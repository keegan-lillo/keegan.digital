```yaml
title: Bixby Component Library
order: 1002
organization: src/content/organizations/bixby
technology:
  - TypeScript
  - React
  - CSS Modules
  - Jest
images:
  - image: images/dev-ui-demo.png
    caption: Overview of the demo webapp generated as part of the CI process.
    alt: Screenshot of all the different components in the library
  - image: images/dev-ui-docs-checkbox-group.png
    caption: Documentation website showcasing the `CheckboxGroup` component.
    alt: Screenshot of the "Checkbox Group" page of the documentation site.
      Depicting the available options, code example, and visual demo.
  - image: images/dev-ui-docs-toggle.png
    alt: Screenshot of the "Toggle" page of the documentation site. Depicting the
      available options and visual demo.
    caption: Documentation website showcasing the `Toggle` component.
```
To fulfil the need of sharing visual assets between our Developer Centre Website and Bixby Studio, I created a shared component library. This was definitely a valuable learning experience for me around both UI design and API design. I found it’s often a challenge to strike a balance between API flexibility and ease-of-use. The library took full advantage of Continuous Integration (CI) where pull requests would auto-deploy both a demo and documentation webapp. Designers and other engineers could then review the proposed changes before merging. It also features 100% test coverage (except code branches) that is enforced during CI.
