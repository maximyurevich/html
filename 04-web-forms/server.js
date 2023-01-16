import express from "npm:express"
import path from "node:path"
import { fileURLToPath } from "node:url"

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())

app.use(express.urlencoded({
  extended: true
}))

app.get("/", function(_req, res) {
  res.sendFile(path.join(__dirname, "01-first-form/index.html"));
})

app.post("/my-handling-form-page", function(req, res) {

  const { user_name, user_mail, user_message } = req.body

  res.json({
    name: user_name,
    email: user_mail,
    message: user_message
  })

})

app.get("/fruitjuice", function(_req, res) {
  res.sendFile(path.join(__dirname, "02-structure-web-form/01-filedset-legend/index.html"))
})

app.post("/fruitjuice", function(req, res) {

  res.json({
    size: req.body.size
  })

})

app.get("/taste", function(_req, res) {
  res.sendFile(path.join(__dirname, "/02-structure-web-form/03-clickable-labels/index.html"))
})

app.post("/taste", function(req, res) {
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
