# Reproduction repository for html lang attribute issue

## Steps

- `yarn install`
- `yarn dev`
- visit [localhost:3000](localhost:3000)
- open browser developer tools, verify that `<html lang="cn">` is present
- click any of the links to navigate within the app
- verify that the `lang` attribute has changed to `de`, the default defined locale

The expected behavior is that the `lang` attribute remains unchanged