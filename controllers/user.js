const { writeFile, readFile } = require('../helper/index')

module.exports.setup = function (app) {
    /**
     * @swagger
     * /getUser:
     *   get:
     *     description: getToDoList
     *     tags:
     *       - user
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Get user data
     */

    app.get('/getUser', async (req, res) => {
        const result = await readFile()

        res.send(result)
    })

    /**
     * @swagger
     * /addUser:
     *   post:
     *     description: addUser
     *     tags:
     *       - user
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: User data
     *         schema:
     *           type: object
     *           properties:
     *               user_id:
     *                   type: string
     *               name:
     *                   type: string
     *               surname:
     *                   type: string
     *               birthDate:
     *                   type: string
     *                   
     *     responses:
     *       200:
     *         description: Add user success
     */

    app.post('/addUser', async (req, res) => {
        const {
            body: data,
        } = req
        const addUserResult = await writeFile(data)

        res.send(addUserResult)
    })
}
