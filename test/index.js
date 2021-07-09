import Clunch from 'clunch';
import sankey from '../index';
import image from './test.clunch';
import demoData from './data.json';

window.clunch = new (Clunch.series('ui-sankey', sankey))({
    el: document.getElementById('root'),
    data: function () {
        return {
            data: demoData
        };
    },
    render: image
});
