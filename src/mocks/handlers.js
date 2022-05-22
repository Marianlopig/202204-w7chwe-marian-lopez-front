import { rest } from "msw";

export const usersHandlers = [
  rest.post(
    "https://two02204-w7chwe-marian-lopez.onrender.com/users/login",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          name: "Marian",
          token: "mocktoken",
        })
      );
    }
  ),
  rest.post(
    "https://two02204-w7chwe-marian-lopez.onrender.com/users/register",
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          username: "marianlop",
          id: "1",
        })
      );
    }
  ),
  rest.get(
    "https://two02204-w7chwe-marian-lopez.onrender.com/users/list",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            name: "Marian",
            username: "marianlop",
            id: "1",
            image: "marian.png",
          },
        ])
      );
    }
  ),
];
