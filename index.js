const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const { translate } = require("./translate")
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

app.get('/api/shit', (req, res) => {
    res.send('你好 vercel')
})

app.post("/api/translate/prompts", async (req, res) => {
    let input = req.body
    let orgText = input.words.join("\n")
    const finText = await translate({ text: orgText, to: input.to ?? "zh-cn", server: "tencent" })

    if (finText) {
        let words = finText.split("\n")
        res.json(words)
    } else {
        res.json([])
    }
})

module.exports = app
