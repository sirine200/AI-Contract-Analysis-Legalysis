"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
require("./config/passport");
// routes
const auth_1 = __importDefault(require("./routes/auth"));
const contracts_1 = __importDefault(require("./routes/contracts"));
const payments_1 = __importDefault(require("./routes/payments"));
const payment_controller_1 = require("./controllers/payment.controller");
const app = (0, express_1.default)();
app.set("trust proxy", 1);
mongoose_1.default
    .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) // Add this as any to avoid TypeScript issues
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
    credentials: true,
    exposedHeaders: ["set-cookie"]
}));
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
app.post("/payments/webhook", express_1.default.raw({ type: "application/json" }), payment_controller_1.handleWebhook);
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: connect_mongo_1.default.create({ mongoUrl: process.env.MONGODB_URI }),
    cookie: {
        secure: true,
        sameSite: "none",
        domain: ".onrender.com",
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true
    },
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use("/auth", auth_1.default);
app.use("/contracts", contracts_1.default);
app.use("/payments", payments_1.default);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
