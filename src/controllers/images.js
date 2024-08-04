const { default: axios } = require("axios");

exports.detectTongue = async (req, res) => {
    try {
        const { base64_data } = req.body;
        const formData = new FormData();
        formData.append("base64_data", base64_data);
        const response = await axios.post("https://34.143.207.78/api/wlh/images/", formData, {
            headers: {
                'Content-Type': `multipart/form-data`,
            }
        })
        console.log(response)

        if (response.data) {
            return res.json({
                data: response.data
            })
        }

        return res.json({
            data: JSON.stringify(response)
        })

    } catch (error) {
        // console.log(error)
        return res.status(500).json({
            error: error.message
        })
    }
}