let allMessages = [{ username: "Boba Fett", message: "AHHHHHHHHHHHHH!!!!" }];
module.exports = {
  getAllMessages(req, res) {
    return res.status(200).json(allMessages);
  },
  createMessage(req, res) {
    allMessages.push(req.body);
    if (req.session.history) {
      req.session.history.push(req.body);
    } else {
      req.session.history = [req.body];
    }
    return res.status(200).json(allMessages);
  },
  getHistory(req, res) {
    console.log("req.session: ", req.session);
    return res.status(200).json(req.session.history);
  }
};
