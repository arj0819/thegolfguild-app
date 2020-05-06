export class User {
    userId;
    email;
    firstName;
    lastName;
    iat;
    exp;

    get userId() {
        return this.userId;
    }

    constructor(user) {
        if (user) {
            this.userId = user.userId;
            this.email = user.email;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.iat = user.iat;
            this.exp = user.exp;
        } else {
            this.userId = '';
            this.email = '';
            this.firstName = '';
            this.lastName = '';
            this.iat = 0;
            this.exp = 0;
        }
    }
}