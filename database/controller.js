
/** Controller */
import Users from '../model/user'


// get : http://localhost:3000/api/users
export async function getUsers(req, res) {
    try {
        const users = await Users.find({});

        if (!users) return res.status(404).json({ error: "Data not Found" })
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}

// get : http://localhost:3000/api/users/1
export async function getUser(req, res) {
    try {
        const { userId } = req.query;

        if (userId) {
            const user = await Users.findById(userId);
            res.status(200).json(user)
        }
        res.status(404).json({ error: "User not Selected...!" });
    } catch (error) {
        res.status(404).json({ error: "Cannot get the User...!" })
    }
}

// post : http://localhost:3000/api/users
export async function createUser(req, res) {
    try {
        if (!req.body.name || !req.body.email || !req.body.number) return res.status(404).json({ error: "Form Data Not Provided...!" });
        Users.create({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
        }, function (err, data) {
            return res.status(200).json(data)
        })
    } catch (error) {
        return res.status(404).json({ error })
    }
}

// put : http://localhost:3000/api/users/1
export async function updateUser(req, res) {
    try {
        const { userId } = req.query;
        if (userId) {
            const user = await Users.findByIdAndUpdate(userId,{
                name: req.body.name,
                email: req.body.email,
                number: req.body.number,
            });
            res.send("User Update")
            res.status(200).json(user)
        }
        res.status(404).json({ error: "User Not Selected...!" })
    } catch (error) {
        res.status(404).json({ error: "Error While Updating the Data...!" })
    }
}

// delete : http://localhost:3000/api/users/1
export async function deleteUser(req, res) {
    try {
        const { userId } = req.query;

        if (userId) {
            const user = await Users.findByIdAndDelete(userId)
            return res.status(200).json(user)
        }

        res.status(404).json({ error: "User Not Selected...!" })

    } catch (error) {
        res.status(404).json({ error: "Error While Deleting the User...!" })
    }
}