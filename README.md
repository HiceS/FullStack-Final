This project is temporarily named **Harnec Web App**,

It provides the following functionality:

1. Reads JSON file and populates a switch that contains categories and items.
2. Uses Redux to add component to a cart object that gets stored to a databse on purchase to review purchase.
3. Uses react-Bootstrap for styling
4. Runs on Firebase using Firestore for the NoSQL DB

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.

### `yarn build` or `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Data

### Category and Project Data

          {
            "version": "2019-12-02T22:43:23.573Z",
            "categories": [
              {
                "id": 12345345123123124,
                "name": "thing number 1",
                "description": "pretty okay stuff",
                "photo": "www.facebook.com",
                "items": [
                  {
                    "id": 216745,
                    "name": "good stuff1",
                    "price": 123,
                    "info": "pretty good shape",
                    "photos": [
                      "www.google.com",
                      "www.imgur.com"
                    ]
                  },
                  {
                    "id": 216745,
                    "name": "good stuff1",
                    "price": 123,
                    "info": "pretty good shape",
                    "photos": [
                      "www.google.com",
                      "www.imgur.com"
                    ]
                  }
                ]
              },
              {
                "id": 12312312312312334,
                "name": "thing number 2",
                "description": "much better stuff",
                "photo": "www.facebook.com",
                "items": [
                  {
                    "id": 216745,
                    "name": "good stuff1",
                    "price": 123,
                    "info": "pretty good shape",
                    "photos": [
                      "www.google.com",
                      "www.imgur.com"
                    ]
                  },
                  {
                    "id": 216745,
                    "name": "good stuff1",
                    "price": 123,
                    "info": "pretty good shape",
                    "photos": [
                      "www.google.com",
                      "www.imgur.com"
                    ]
                  }
                ]
              }
            ]
          }
