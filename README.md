# Using-React-Bootstrap-on-Server-Side
Example of using react-bootstrap on server side.

React-bootstrap does not contain any css file. So we need install bootstrap package in order to use CSS file.

`
npm install bootstrap --save
`

Note, the lastest bootstrap@4.0.0-alpha.3 version has issue to be loaded using webpack. So I am using bootstrap@3.3.7 which is the stable version before 4.0.0-alpha.3. 
Then we include the css file:

`
import 'bootstrap/dist/css/bootstrap.css';
`
To load css, we need some configuration in webpack.config.js:

```
module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query:
                    {
                      presets: [ 'react', 'es2015']
                    }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            }
        ]
    }
```

The second and third loaders are critical to load css.

Then done!

To run: npm start
