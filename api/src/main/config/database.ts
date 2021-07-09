import { Connection, createConnection } from "typeorm";
import { CONNECTION_STRING, DATABASE_TYPE } from "./env";

export default async () => {
  const connection = await createConnection({
    type: DATABASE_TYPE,
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "123",
    database: "database",
    synchronize: true,
    logging: true,
    entities: ['src/repository/postgres/schemas/*.ts'],
  })

  if (connection.isConnected) console.log("database connected")

  return connection
};