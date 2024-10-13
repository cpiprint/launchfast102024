# Favicon

This directory contains a few versions of icons to account for different
devices.

## All platforms

- favicon.svg - used in the browser tab
- favicon.png (16x16) - fallback for browsers that do not support SVG favicons.
- favicon.png (32x32) - fallback for browsers that do not support SVG favicons
  in high-resolution displays.
- favicon.ico (48x48) - fallback for older browsers that do not support SVG or
  PNG favicons. Figma doesn’t support ICO output, so take this PNG and transform
  it into a favicon.ico using https://convertio.co/png-ico/

## Apple

- apple-touch-icon.png (180x180) - used when users add a website to their home
  screen on iOS devices. Only icon that cannot have a transparent background, as
  per Apple's design guidelines.
- mask-icon.svg - used for Safari’s pinned tabs.

## Android

- android-chrome-512x512.png (512x512) - used for the splash screen when the app
  is launched on Android devices.
- android-chrome-192x192.png (192x192) - used when users add a website to their
  home screen on Android devices.

Note, the `favicon.ico` should be put in the root of `/public`. This is a
fallback for older browsers.
