const _userRepository = require('./user.repository');
const dbContext = require('../../Database/dbContext');

module.exports = function (router) {
    const userRepository = _userRepository(dbContext);

router.route('/users')
        .get(userRepository.getAll)
        .post(userRepository.post);
        
    router.route('/users')
    .get(userRepository.getMulti);

router.use('/users/:userID', userRepository.intercept);

router.route('/users/:userID')
        .get(userRepository.get)
        .put(userRepository.put)
        .delete(userRepository.delete);
}