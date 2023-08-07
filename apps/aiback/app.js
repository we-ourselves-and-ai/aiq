require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { API_KEY, PORT } = process.env;
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json())
app.use(cors());

app.post('/chat', async (req, res) => {
    console.log(req.body);
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: req.body.text}],
        });
        res.json(completion.data.choices[0].message);
    } catch (e) {
        res.status(e.response.status).json({
            message: e.response.messages,
        });
    }
});
app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});
