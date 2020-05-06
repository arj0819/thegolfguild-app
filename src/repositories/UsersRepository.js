import BaseRepository from '../repositories/BaseRepository';

class UsersRepository extends BaseRepository {
    login(email, password) {
        return this.post('/users/login', {
            email,
            password,
        }, undefined, false);
    }

    signUp(email, password, firstName, lastName) {
        return this.post('/users/sign-up', {
            email,
            password,
            firstName,
            lastName
        }, undefined, false)
    }

    getActiveRounds(userId) {
        return this.get(`/users/${userId}/active-rounds`, undefined, true)
    }

    getActiveRound(roundId, userId) {
        return this.get(`/users/${userId}/active-rounds/${roundId}`, undefined, true)
    }

    endActiveRound(roundId, userId) {
        return this.post(`/users/${userId}/rounds/${roundId}/end`, undefined, undefined, true)
    }

    addRoundStroke(roundHoleId, userId) {
        return this.post(`/users/${userId}/round-holes/${roundHoleId}/round-strokes`, undefined, undefined, true)
    }

    deleteRoundStroke(roundStrokeId, roundHoleId, userId) {
        return this.delete(`/users/${userId}/round-holes/${roundHoleId}/round-strokes/${roundStrokeId}`, undefined, true)
    }
}

export default UsersRepository;