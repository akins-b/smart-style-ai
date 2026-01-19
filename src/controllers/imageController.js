const pool = require("../config/db");

exports.uploadImage = async (req, res) => {
    try {
        const imagePath = req.file.path;

        const result = await pool.query(
            "INSERT INTO user_images (image_url) VALUES ($1) RETURNING *",
            [imagePath]
        );

        res.status(201).json({
            message: "Image uploaded successfully",
            image: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};