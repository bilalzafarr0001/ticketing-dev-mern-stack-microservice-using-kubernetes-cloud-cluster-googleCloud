import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  req.session = null;

  res.send({});
  req.on("close", () => {
    console.log("closed connection");
  });
});

export { router as signoutRouter };
