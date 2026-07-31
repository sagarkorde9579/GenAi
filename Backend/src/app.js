const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cookieParser())
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173"
const allowedOrigins = CLIENT_URL.split(",").map((o) => o.trim())
app.use(cors({
    origin: (origin, cb) => {
        if (!origin || allowedOrigins.includes(origin)) return cb(null, true)
        return cb(null, false)
    },
    credentials: true
}))

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)



module.exports = app