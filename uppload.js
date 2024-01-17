const express = require("express")
const multer = require("multer")
const app = express()
const upload = multer({ dest: 'upload/' })
