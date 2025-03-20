import fs from "fs";
import csv from "csv-parser";
import util from "util";
import stream from "stream";

const pipeline = util.promisify(stream.pipeline);

import sql from "./database";

interface dataParams {
  geonameid: string,
  name: string,
  latitude: string,
  longitude: string,
  cc: string,
  timezone: string
};

const dataLocation = "./data/cities15000.csv";

const insertData = async (data : dataParams) => {
  const query = sql`
    INSERT INTO geonames (geonameid, name, latitude, longitude, cc, timezone)
    VALUES (
      ${data.geonameid},
      ${data.name},
      ${data.latitude},
      ${data.longitude},
      ${data.cc},
      ${data.timezone}
    )
  `;

  try {
    await query;
  } catch (err) {
    console.error("Error inserting to database.", err);
  }
};

const initializeDatabase = async () => {
  fs.createReadStream(dataLocation)
    .pipe(csv({ separator: "\t" }))
    .on("data", (row) => {
      insertData(row);
    })
    .on("end", () => {
      console.log("CSV succesfully parsed!");
    })
    .on("error", (err) => {
      console.error("Error parsing CSV file: ", err);
    });
};

export default initializeDatabase;
