const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const patientRoutes = require("./routes/patientRoute");
const doctorRoutes = require("./routes/doctorRoute");
const departmentRoute = require("./routes/departmentRoute");
const nurseRoute = require("./routes/nurseRoute");
const roomRoute = require("./routes/roomsRoute");
const operationsRoom = require("./routes/operationsRoom");
const icuRoom = require("./routes/IcuRoom");
const lapRoom = require("./routes/lapRoom");
const regularRoom = require("./routes/regularRoom");
const wardBoy = require("./routes/wardBoyRoute");

dotenv.config({ path: "config.env" });

const app = express();
app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1/patient", patientRoutes);
app.use("/api/v1/doctor", doctorRoutes);
app.use("/api/v1/department", departmentRoute);
app.use("/api/v1/nurse", nurseRoute);
app.use("/api/v1/rooms", roomRoute);
app.use("/api/v1/operationsRoom", operationsRoom);
app.use("/api/v1/icuRoom", icuRoom);
app.use("/api/v1/lapRoom", lapRoom);
app.use("/api/v1/regularRoom", regularRoom);
app.use("/api/v1/wardBoy", wardBoy);

const Port = process.env.PORT || 8000;

app.listen(Port, () => {
  console.log("App Running on port " + Port);
});

// Handle rejection outside express
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});
