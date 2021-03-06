# electron-react-webpack
Try this Electron & React 16 & Webpack 4 template for a quick development and prototyping.

![w10 sample](https://user-images.githubusercontent.com/11739632/37350993-59ad48d4-26da-11e8-9ac5-d3539cf1e2f9.PNG)


## Note to future self:

So um, yeah. This was working. It actually compiled and built for OSX and Windows. There were some hickups, but nothing unsolvable. If you ever need (and you will) cross platform app boilerplate look no further. :) 

## Install
``` bash
# Clone the repository
$ git clone https://github.com/pastahito/electron-react-webpack

# Go into the repository
$ cd electron-react-webpack

# Install dependencies
$ npm install
```

## Develop
Just run this command to start developing with hot reloading.
``` bash
$ npm start
```

## What's included
- JSX support for React.
- CSS modules support.
- JS, CSS and assets automatic bundling.
- Hot reloading via Webpack 4.

## Builidng application
https://medium.com/how-to-electron/a-complete-guide-to-packaging-your-electron-app-1bdc717d739f


## Folder structure
```
├── electron-react-webpack/             # Your project's name, you can rename it

    ├── app/

        ├── build/                      # Webpack 4 will manage this folder for you
            ├── bundle.css              # Bundled CSS
            ├── bundle.js               # Bundled JS
            ├── ...                     # Your images will be copied here

        ├── src/

            ├── assets/                 # Images
                ├── electron.png
                ├── react.png
                ├── webpack.png

            ├── components/             # React Components
                ├── Link/               # To keep them modularized follow this structure:
                    ├── index.jsx       # Your component's React code
                    ├── styles.css      # Your component's scoped CSS
                ├── Logo/
                    ├── index.jsx
                    ├── styles.css

            ├── App.js                 # React main component where everything is tied up
            ├── renderer_process.js     # Electron's renderer-process, where you React app is called.
            ├── global.css              # Global CSS and global constants go here

        ├── index.html                  # This HTML only uses build/ folder's files

    ├── main_process.js                 # Electron's main process. Whole app is launched from here
    ├── package.json
    ├── webpack.config.js               # Webpack 4 setup
```
