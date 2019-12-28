import './users.scss';

let usersTpl = require('../../views/templates/users.hbs');
let userTpl = require('../../views/templates/user.hbs');

// Services
import UsersService from '../../services/users.js';

const usersService = new UsersService();
const data = {};

class UsersComponents {

    async loadUsers(page) {
        try {
            let users = await usersService.list(page);
            data.loadedPage = users.page;

            $('#results').html(usersTpl({ users: users, selected: data.loadedPage }));

            this.loadDetail();
            this.pagination();
        } catch (error) {
            console.error(error);
        }
    }

    loadDetail() {
        let that = this;
        $('.see-details').on('click', function(e) {
            e.preventDefault();
            let userId = $(this).attr('href');
            that.loadedDetail(userId);
        });
    }

    async loadedDetail(userId) {
        try {
            let user = await usersService.one(userId);
            $('#results').html(userTpl({ user: user.data }));

            this.goBack(data.loadedPage);
        } catch (error) {
            console.error(error);
        }
    }

    goBack(page) {
        let that = this;
        $('.go-back').on('click', function(e) {
            e.preventDefault();
            that.loadUsers(page);
        });
    }

    pagination() {
        let that = this;
        $('.page-link').on('click', function(e) {
            e.preventDefault();
            let page = $(this).attr('href');
            that.loadUsers(page);
        });
    }
}

export default UsersComponents;