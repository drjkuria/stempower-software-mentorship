import express from "express";
import routes from "./src/routes/provinceRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/provincesdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();
routes(router);

router.get('/', (req, res) => {
    res.send(`Node and express server running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});

app.use('/api/v1', router);

export { router }