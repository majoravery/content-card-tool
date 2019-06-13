# In-App-Tool

This web app allows the CRM team to create HTML/CSS modals for Braze in-app messages.

## Development

`npm install` to install all dependencies.

`npm start` will start a development server at [http://localhost:3000](http://localhost:3000). The server has live-reload enabled.

## Architecture

The app is split into three main parts: `editor`, `export` and `preview`.

- `editor`: Contains all components that are needed for the changing the config of a template
- `export`: The component and logic that we use to copy the generated markup into the users clipboard
- `preview`: The templates and components that make up the in-app message

### Styling

The in-app-tool uses [styled-components](https://www.styled-components.com/) to style its own components as well as to style the static exported components. We chose `styled-components` after carful considerations of all alternatives. The goal of this app is to generate static HTML/CSS that we can generate solely on the client. Other styling solutions usually require webpack to generate the styles during the build process. With `styled-components` we are able to extract all of the app's CSS on the client. Previous concerns with `styled-components` were all related to its runtime performance which don't apply in the case of our generated HTML/CSS since the output of the export are regular CSS classes. The runtime-concerns might apply for running the tool itself, but it's a very tiny codebase so we should not see a performance hit there.

### Export

The exported HTML/CSS is generated with the help of `ReactDOM`'s `renderToString`. We essentially render a template and it's config to a string which returns the final HTML. In addition to that we use `styled-components` secret `StyleSheet` API to extract the CSS. We then combine the HTML and CSS into a static template and render that to a combined static HTML file.

### Making templates interactive

Since we do not include React in the exported markup to keep the in-app messages as small as possible, we cannot use React to make our components interactive. The components are rendered statically into an HTML string and none of the React code makes it into the export. What we can do instead though, is to render `<script />` tags into our components that contain old-school JS that manipulates the DOM. A good example for the usage can be found in the implementation of the `<Modal />` component.
