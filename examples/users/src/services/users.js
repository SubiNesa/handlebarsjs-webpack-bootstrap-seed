class UsersService {
    list(page = 1) {
        try {
            return $.ajax({
                url: `https://reqres.in/api/users?page=${page}`,
                type: "GET"
            });

        } catch (error) {
            console.error(error);
        }
    }

    one(userId) {
        try {
            if (!userId) {
                return null;
            }

            return $.ajax({
                url: `https://reqres.in/api/users/${userId}`,
                type: "GET"
            });

        } catch (error) {
            console.error(error);
        }
    }
}

export default UsersService;