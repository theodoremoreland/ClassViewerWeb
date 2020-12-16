const mongoose = require('mongoose');

const getTeamSchema = mongoose.Schema({
    leader: String
});

module.exports = mongoose.model("Team", getTeamSchema);