exports.healthCheck = (req, res) => {
    res.json({
        status: "OK",
        service: "SmartStyle AI Backend",
        time: new Date()
    });
};