import express from "express";
import passport from "passport";
import { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);



router.get("/google/callback", (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("google", { failureRedirect: "/login" }, (err, user, info) => {
    if (err || !user) {
      return res.status(500).json({ message: "Authentication failed." });
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Login failed." });
      }

      
      return res.redirect(`${process.env.CLIENT_URL}/dashboard`);
    });
  })(req, res, next); 
});



router.get("/current-user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie("connect.sid"); // Clear the session cookie
      res.status(200).json({ status: "ok" });
    });
  });
});


export default router;
