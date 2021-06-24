import { useEffect } from "react";
import classes from "./social-card.module.scss";

export const SocialList: React.FC<{ next: () => void }> = ({ next }) => {
  useEffect(() => {
    setTimeout(() => {
      next();
    }, 1000);
  }, []);
  const name = "John Doe";
  const imageUrl =
    "https://cdn.dribbble.com/users/14374/screenshots/3147608/programer.gif";
  const title = "JavaScript Developer";
  const socialLinks: { faClass: string; url: string }[] = [
    { faClass: "fa-facebook", url: "#" },
    { faClass: "fa-github", url: "#" },
    { faClass: "fa-tumblr", url: "#" },
    { faClass: "fa-linkedin", url: "#" },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className={classes.box}>
            <img className={classes.profile} src={imageUrl} alt={name} />

            <div className={classes.boxTitle}>{name}</div>

            <div className={classes.boxText}>
              <span>{title}</span>
            </div>

            <div className={classes.icons}>
              {socialLinks.map(({ faClass, url }) => (
                <a href={url}>
                  <i className={`${classes.icon} fa ${faClass}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
