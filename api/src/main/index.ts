import app from "./config/app";
import { PORT } from "./config/env";

app.listen(PORT, () => console.log(`Server running in http://localhost:3333`))