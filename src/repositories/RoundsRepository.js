import BaseRepository from './BaseRepository';

class RoundsRepository extends BaseRepository {
    create(golfCourseId, teeId, userId) {
        return this.post('/rounds', {
            golfCourseId,
            teeId,
            userId,
        }, undefined, true)
    }
}

export default RoundsRepository;