import { useEffect } from "react";
import { socialLinks, user } from "../../user.config";
import classes from "./social-card.module.scss";

export const SocialCard: React.FC<{ next: () => void }> = ({ next }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 1000);
    return () => clearTimeout(timer);
  }, [next]);
  const imageUrl =
    "https://cdn.dribbble.com/users/14374/screenshots/3147608/programer.gif";
  const title = "JavaScript Developer";

  return (
    <div className={`container ${classes.container}`}>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className={classes.box}>
            <img className={classes.profile} src={imageUrl} alt={user} />

            <div className={classes.boxTitle}>{user}</div>

            <div className={classes.boxText}>
              <span>{title}</span>
            </div>

            <div className={classes.icons}>
              {socialLinks.map(({ ficon, path }) => (
                <a href={path} key={ficon + path}>
                  <i className={`${classes.icon} fa ${ficon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
