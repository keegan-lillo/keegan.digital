```yaml
title: Bixby Studio - TEST
order: 1001
organization: src/content/organizations/bixby
technology:
  - Electron
  - TypeScript
  - React
  - CSS Modules
  - Redux
  - Webpack
  - Jest
images:
  - image: images/editor-js.png
    caption: Editor split view.
    alt: Screenshot of the editor split view with a JavaScript file on the left and
      the settings pane on the right.
  - image: images/training-1.png
    caption: 'Training overview showing all entries with the search term: "tomorrow"'
    alt: 'Screenshot of the training overview showing all entries with the search
      term: "tomorrow"'
  - image: images/training-2.png
    caption: Training editor, featuring an interactive editor and graph depicting
      the execution flow for the utterance being edited.
    alt: Screenshot of the training editor, featuring an interactive editor and
      graph depicting the execution flow for the utterance being edited.
subProjects:
  - title: Simulator
    description: A crucial component of Bixby Studio is the Simulator. Without this
      tool, developers would have no way to test their Capsules without having
      access to a physical device. This is particularly challenging for
      refrigerators. My work on the Simulator was mostly to do with replicating
      native device functionality such as playing/controlling audio or ensuring
      animations and interactivity matched the real devices as closely as
      possible.
    images:
      - image: images/simulator-tv.png
        caption: The Simulator showing the weather for Saturday, whilst simulating a TV.
        alt: Screenshot of the  Bixby Studio Simulator showing the weather for Saturday,
          whilst simulating a TV.
  - title: Debug Console
    description: The Bixby Studio Debug Console provides developers an interactive
      view of their Capsule as it is executing. Users can step through the
      execution and see exactly how Bixby has made decisions and displayed
      output. My main contribution to the Debug Console was implementing an
      inspector view. This is a tree-style view that functions similarly to a
      web browser’s DOM inspector, allowing users to interactively filter and
      drill down into all the different data points that contribute to having a
      conversation with Bixby.
    images:
      - image: images/debug-console-conversation.png
        caption: The Debug Console showing how the conversation has been interpreted,
          highlighting key words with their associated data types
        alt: Screenshot of the Debug Console showing how the conversation has been
          interpreted, highlighting key words with their associated data types.
      - image: images/debug-console-functions.png
        caption: The Debug Console showing the result of a JavaScript function
          execution, including any web requests that were made during execution.
        alt: Screenshot of the Debug Console showing the result of a JavaScript function
          execution, including any web requests that were made during execution.
  - title: Keyboard Shortcuts
    description: A very recent addition to Bixby Studio is fully customisable
      keyboard shortcuts. For what was a minor UI update, a total refactor of
      our command and focused context architectures was required. The previous
      mechanism was written in JavaScript and required team members to be
      intimately familiar with many different moving parts before adding even
      simple features. I greatly improved this by switching to a TypeScript
      based implementation that allowed each command to individually define its
      dependencies and context. This greatly lowered the cognitive load for team
      members, while also allowing things like application menus to
      automatically rebuild when a command dependency changed.
    images:
      - image: images/keyboard-shortcuts.png
        caption: Keyboard shortcuts editor.
        alt: Screenshot of the keyboard shortcuts editor.
  - title: Colour System
    description: Working very closely with our UX Designer, I architected a colour
      system that allowed us to style the application in a way that could
      smoothly adapt to a light/dark theme. CSS Custom Properties (AKA CSS
      Variables) were the key to the system. Instead of manually setting colours
      for dark and light modes, I utilised an opacity based system that would
      automatically adapt to the current colour scheme.
    images:
      - image: images/theme-dark.png
        caption: Bixby Studio with the *dark* theme enabled
        alt: Screenshot of Bixby Studio with the "dark" theme enabled
      - image: images/theme-light.png
        caption: Bixby Studio with the *light* theme enabled
        alt: Screenshot of Bixby Studio with the "light" theme enabled
```
Bixby Studio is an Electron based desktop IDE that enables developers to create Bixby “Capsules”, which are equivalent in function to Alexa Skills or Google Assistant Actions. Bixby Studio provides developers the tools for: 

* Modelling their product/service’s domain
* Training the AI to interpret conversations
* A full-featured code editor (based on Monaco)
* Simulator and debugging tools to test their Capsules on a variety of devices including smartwatches, phones, speakers, and even refrigerators.

Bixby Studio has been the primary focus of my time at Viv Labs, so I’ve had the privilege to be instrumental in many areas of the application, however some of the highlights for me are listed below.
