import { socialLinks } from "../../configs/user.config";
import classes from "./Toolbar.module.scss";

export const Toolbar = () => {
  return (
    <div className="row justify-content-end mb-2 toolbar">
      <div className="col col-md-6 col-lg-4">
        <div className="row justify-content-end">
          {socialLinks.map(({ ficon, path, title }) => {
            return (
              <div className={`col-1 ${classes.icon}`} key={ficon + path}>
                <a href={path} title={title}>
                  <i className={`fa ${ficon}`}></i>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
