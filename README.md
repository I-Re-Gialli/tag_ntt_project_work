# LeroyMerlin Wizard by I Re Gialli #

## The Project ##
This is a multi-platform Web App that allows the users to do a personalized search. They can select from different cards and at the end of the wizard, they will be redirected on the page with the products that they need.

## The Team ##
This is developed by Matteo Bernabei [https://github.com/mtberna], Gerardo Vollono [https://github.com/DinoVol], Andrea Pessot [https://github.com/andreapessot], Nina Micleusanu [https://github.com/ninamicle]. The development of this project was proposed by NTTDATA for LeroyMerlin.

## Technologies ## 
We used React, axios for HTTP calls and CSS.

## Grafiche

Le grafiche sono reperibili da questo [link](https://zpl.io/Vxvl4lR) con le credenziali:

> **username**: tag_ntt_project_work <br> >**password**: zeplin123!

## Servizi

I servizi REST disponibili sono:

- Store lis
  > **URL**: https://mctsuite.it.nttdata-emea.com/preview/tag_ntt_project_work/stores.json <br> > **Method**: GET
- Wizard config
  > **URL**: https://mctsuite.it.nttdata-emea.com/preview/tag_ntt_project_work/wizard_config.json <br> > **Method**: GET
- Login
  > **URL**: https://api-dev-commercio.leroymerlin.it/api/v1/customer/1_0_0/authentication/login <br> > **Method**: POST <br> > **Headers**: {x-square-api-key: testToken} <br> > **Body**: {
      "username": "tonio.cartonio@authent.it",
      "password": "Prova123",
      "rememberMe": false
  }

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

