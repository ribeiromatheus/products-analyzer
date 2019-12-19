const User = require('../model/User');

module.exports = {
    async login(req, res) {
        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user)
            return res.status(404).json('Login inválido');

        return res.json(user);
    }
}