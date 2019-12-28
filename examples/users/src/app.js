import 'babel-polyfill';
import $ from 'jquery';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import 'tooltipster';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tooltipster/dist/css/tooltipster.main.min.css';
import 'tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-shadow.min.css';
import './index.scss';

// Fontawesome
library.add(fas, far, fab);
dom.watch();

// Templates
let navTpl = require('./views/templates/nav.hbs');

// Components
import UsersComponents from './components/users/users.js';

const usersComponents = new UsersComponents();

const load = () => {
    document.title = 'Seed project';
    $('.navbar').html(navTpl());
    usersComponents.loadUsers();
};

$(document).ready(() => {
    load();
});