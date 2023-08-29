import passport from 'passport';
import { Request, Response, NextFunction } from 'express';

export const signinForm = (req: Request, res: Response) => {
  res.render('auth/auth-form', {
    errors: null,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
  });
};

export const signin = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', (err: any, user: Express.User, info: { message: any; }) => {
    if (err) {
      next(err);
    } else if (!user) {
      res.render('auth/auth-form', {
        errors: [info.message],
        isAuthenticated: req.isAuthenticated(),
        currentUser: req.user,
      });
    } else {
      req.login(user, (err) => {
        if (err) {
          next(err);
        } else {
          res.redirect('/tweets');
        }
      });
    }
  })(req, res, next);
};

export const signout = (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/auth/signin/form');
  });
};