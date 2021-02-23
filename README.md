# BlanjaIn ReactJs

## Contents

- [Description](#description)
- [Features](#features)
- [Requirements](#requirements-for-development)
- [Installation](#installation-for-development)
- [Screenshot](#screenshot)
- [Related project](#related-project)

## Description

**BlanjaIn** is a website-based e-commerce application that allows buyers to order
products of their choice. Consists of 2 types of users, namely buyers and
sellers.

## Features

- Browsing items
- Order product
- History transaction
- Add or edit product (sellers only)
- Chat with seller ( still development )
- Edit profile
- Reset Password
- etc

## Requirements for Development

- [`Node Js`](https://nodejs.org/en/)
- [`npm`](https://www.npmjs.com/get-npm)
- [`React.Js`](https://reactjs.org/)
- [`BlanjaIn Backend`](https://github.com/ariefw96/blanja-restAPI)

## Installation for Development

1. Open your terminal or command prompt
2. Type `git clone https://github.com/ariefw96/BlanjaIn-React.git`
3. Open the folder and type `npm install` or `yarn install` for install dependencies from package.json
4. Create file **_.env_** in root directory with the following contents :

```bash
REACT_APP_BASE_URL = "your_backend_API_URL"
```

Example :

- http://host_backend:port_backend is http://localhost:8000

so, you can write in .env file like this :

```bash
REACT_APP_BASE_URL = "http://localhost:8000"
```

5. Before run this project, you must configure and run backend. You can find backend for this project [here](https://github.com/ariefw96/blanja-restAPI)
6. Type `npm run server` in terminal for running backend.
7. If you want to build this project, type `npm start` or `yarn start`.

## Screenshot

### Login Screen

<img src="https://user-images.githubusercontent.com/70320451/108819959-1a5e8380-75ee-11eb-82f0-acf572dae37a.png" />

### Home Screen
<img src="https://user-images.githubusercontent.com/70320451/108819969-1d597400-75ee-11eb-8787-471405084482.png" />

### Category
<img src="https://user-images.githubusercontent.com/70320451/108819974-1fbbce00-75ee-11eb-95fc-91e1496e8163.png" />

### Product Details
<img src="https://user-images.githubusercontent.com/70320451/108819975-20ecfb00-75ee-11eb-970e-360712053499.png" />

### My Bag
<img src="https://user-images.githubusercontent.com/70320451/108819980-221e2800-75ee-11eb-8490-c191556f69ea.png" />

## Related Project

You can find backend for this project here

[`BlanjaIn-restAPI`](https://github.com/ariefw96/BlanjaIn-restAPI)

Other project

[`BlanjaIn (ReactNative)`](https://github.com/ariefw96/BlanjaIn-React-Native)






