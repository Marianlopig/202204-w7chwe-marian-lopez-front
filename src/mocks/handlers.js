import { rest } from "msw";

export const usersHandlers = [
  rest.post(
    "https://two02204-w7chwe-marian-lopez.onrender.com/users/login",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            name: "Marian",
            token: "mocktoken",
          },
        ])
      );
    }
  ),
];
