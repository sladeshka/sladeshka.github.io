import "./style.css";
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


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

$(document).ready(function($) {
    console.log(window.location);
    // $('.dropdown-item').on('change', function() {
    //     if ($(this).val() == 'en' || $(this).val() == 'ru') {
    //         window.location.href = window.location.href.replace(/(en)|(ru)/g, $(this).val());
    //     }
    // })
    $('.collapse').collapse()
});