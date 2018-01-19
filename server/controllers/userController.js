

const createUser = (req, res, next) => {
    const db = req.app.get('db')
    // THIS IS A POST REQUEST SO WE USE REQ.BODY
    const { email, password } = req.body
    db
        .createUser([email, password])
}


// const createUser = (req, res, next) => {
//     const db = req.app.get('db')
//     // THIS IS A GET REQUEST SO WE USE REQ.PARAMS
//     const { email, password } = req.params
//     db
//         .createUser([email, password])
// }

module.exports = {
    createUser
}