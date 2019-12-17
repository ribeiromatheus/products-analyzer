const User = require('../model/User');

module.exports = {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user)
            return res.status(404).json({ error: 'User does not exists' });

        return res.json(user);
    }
}