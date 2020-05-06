import BaseRepository from './BaseRepository';

class RoundHolesRepository extends BaseRepository {
    addRoundStroke(roundHoleId, userId) {
        return this.post(`users/${userId}/rounds-holes/${roundHoleId}/round-stroke`, {}, undefined, true)
    }
}

export default RoundHolesRepository;