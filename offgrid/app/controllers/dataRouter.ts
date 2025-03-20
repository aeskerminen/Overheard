const dataRouter = require("express").Router();
import sql from "../database";

dataRouter.get("/:id", async (req : Express.Request, res : Express.Response) => {
  const id = req.params.id;
  const result = await sql`SELECT * FROM geonames WHERE geonameid = ${id}`;

  return res.json({
    data: result[0],
  });
});

dataRouter.get("/:lat/:lon", async (req, res) => {
  const lat = req.params.lat;
  const lon = req.params.lon;

  console.log(lat, lon);

  const result = await sql`
    SELECT 
        *, 
        (
            6371 * acos (
            cos ( radians(${lat}) )
            * cos( radians( latitude ) )
            * cos( radians( longitude ) - radians(${lon}) )
            + sin ( radians(${lat}) )
            * sin( radians( latitude ) )
            )
        ) AS distance
    FROM 
        geonames
    ORDER BY 
        distance
    LIMIT 1;
  `;

  return res.json({ data: result[0] });
});

export default dataRouter;
