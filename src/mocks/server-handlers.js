/*
 *  Author: Christopher Muller
 */
import { rest } from "msw";

const MAPS = "https://bnd-entertainment-default-rtdb.firebaseio.com/maps.json";

const handlers = [
  rest.get(MAPS, async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          title: "Mocked Map 1",
        },
      ])
    );
  }),
  rest.post(MAPS, async (req, res, ctx) => {
    //const map = JSON.parse(req.body);
    // TODO: whatever other things you need to do with this map
    return res(ctx.json({ success: true }));
  }),
];

export { handlers };
