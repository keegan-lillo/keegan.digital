```yaml
title: Clay
order: 3
organization: src/content/organizations/pebble
technology:
  - JavaScript
  - HTML
  - Sass
  - C
  - Browserify
  - Karma
images:
  - image: images/clay.png
    alt: Screenshot of the a Clay settings page inside the Pebble mobile app.
    caption: Clay settings page inside the Pebble mobile app.
  - image: images/clay-color-picker.png
    alt: Screenshot of the Clay colour picker widget.
    caption: Clay colour picker widget. The Pebble smartwatch could only display 64
      colours without dithering so I created this custom colour picker. The goal
      was to create something that roughly fit on a standard HSL colour wheel
      whilst still being easy to interact with using finger taps on a small
      display.
```
Clay started off as a passion project of mine that was eventually recognised by the team and promoted to a key part of the Pebble Developer SDK. It was an open source framework that allowed Pebble app developers to easily create web-based configuration pages for their watch apps. These would allow users to configure various settings from their phone. Previously, developers needed to go through the arduous process of hosting their own configuration pages, which for C developers, was often very difficult. It also meant users would not be able to adjust the settings in their favourite apps without having a data connection. Clay replaced this clunky mechanism with a totally offline, JSON and JavaScript (for advanced use cases) based solution that significantly reduced the barrier to entry for developers. 

From a technical perspective, Clay was definitely a creative solution. In order to support legacy versions of the mobile app, and get around limited local file access, Clay bundled the entire page at run time into a Data URI. Whilst unconventional, this technique did have the advantage of being super fast and completely offline. It also meant that app developers didn’t have to worry about mismatched versions of their configuration pages and watch apps. Clay featured 100% test coverage that was enforced during CI.
