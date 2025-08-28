import _express from "express"
import { fileURLToPath } from "url";
import path from "path";

//port as you like.
let port = 2312;

const _app = _express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

_app.use(_express.urlencoded({ extended: true }));
_app.use(_express.json({limit: "50mb"}));

_app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
});

_app.use("/", _express.static(path.join(__dirname, "frontend", "src")))


_app.listen(port, () => {
    console.log('Encryption test server running ' + port)
})