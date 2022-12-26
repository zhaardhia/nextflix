# next-flix

> Live on [frontend-sde-test-campaign](https://frontend-sde-test-campaign.vercel.app/)

### Stack used

- [Next.js](https://nextjs.org/)

### Developing

A Node.js LTS setup with [yarn](https://yarnpkg.com/) is recommended.

In the project directory, you can run:

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:3000
yarn dev

# build for production
yarn build

# run unit tests
yarn test
```

## Architecture

### Rendering Data

I used Client-Side Rendering concept since the program itself doesn't needs that much interactions with API data based on the requirement and let [React Context](https://reactjs.org/docs/context.html) managing the data state then spread it through every components.

### State management

[React Context](https://reactjs.org/docs/context.html)

### Testing Framework

- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)

### Directory structure

- `/components` - UI/Layout components that are used globally throughout project.
- `/images` - Images that are used as Default Value Image.
- `/pages` - Pages Campflix Website.
- `/contexts` - React Context file for state management.
- `/services` - JS files used for API Variable & fetching API data method.
- `/public` - Next.js public directory, used for storing static assets.
- `/styles` - Contains CSS files for every pages & components.
