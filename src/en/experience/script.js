import "./style.css";
// import $ from 'jquery';
// window.$ = window.jQuery = $;
// import 'bootstrap';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


/**
 * images
 */
// import './images/arrow.svg';
// import all file from folder
const importFileFromFolder = require =>
    require.keys().reduce((acc, next) => {
        acc[next.replace("./", "")] = require(next);
        return acc;
    }, {});

importFileFromFolder(
    require.context("./images", true, /\.(png|jpe?g|svg)$/)
);
/**
 * fonts
 */

// import './fonts/Roboto-Thin.ttf';