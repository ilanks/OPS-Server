// Created on 2023/04/12 - 11:40
const { tencentTranslate } = require("./tencentTranslate")

async function translate(input){
    if (input.text == "") return ""
    let re

    try {
        if (input?.server === "google") {
            // todo
        } else if (input?.server === "tencent") {
            re = await tencentTranslate({ text: input.text, from: input?.from, to: input?.to })
            console.log("[translate]", input.text.length + "words.", { input, re })
        }
    } catch (e) {
        console.error('[translate] translate failed.', input, e)
    }
    return re
}

module.exports = {
    translate
}
