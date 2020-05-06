import BaseRepository from './BaseRepository';

class GolfCoursesRepository extends BaseRepository {
    getAll() {
        return this.get('/golf-courses', undefined, true);
    }
}

export default GolfCoursesRepository;