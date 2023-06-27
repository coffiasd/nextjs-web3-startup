import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { FaWindowClose } from "react-icons/fa";

import { alertService, AlertType } from "../services";

export { Alert };

Alert.propTypes = {
  id: PropTypes.string,
  fade: PropTypes.bool,
};

Alert.defaultProps = {
  id: "default-alert",
  fade: true,
};

function Alert({ id, fade }) {
  const mounted = useRef(false);
  const router = useRouter();
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    mounted.current = true;

    // subscribe to new alert notifications
    const subscription = alertService.onAlert(id).subscribe((alert) => {
      // clear alerts when an empty alert is received
      if (!alert.message) {
        setAlerts((alerts) => {
          // filter out alerts without 'keepAfterRouteChange' flag
          const filteredAlerts = alerts.filter((x) => x.keepAfterRouteChange);

          // remove 'keepAfterRouteChange' flag on the rest
          return omit(filteredAlerts, "keepAfterRouteChange");
        });
      } else {
        // add alert to array with unique id
        alert.itemId = Math.random();
        setAlerts((alerts) => [...alerts, alert]);

        // auto close alert if required
        if (alert.autoClose) {
          setTimeout(() => removeAlert(alert), 3000);
        }
      }
    });

    // clear alerts on location change
    const clearAlerts = () => alertService.clear(id);
    router.events.on("routeChangeStart", clearAlerts);

    // clean up function that runs when the component unmounts
    return () => {
      mounted.current = false;

      // unsubscribe to avoid memory leaks
      subscription.unsubscribe();
      router.events.off("routeChangeStart", clearAlerts);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function omit(arr, key) {
    return arr.map((obj) => {
      const { [key]: omitted, ...rest } = obj;
      return rest;
    });
  }

  function removeAlert(alert) {
    if (!mounted.current) return;

    if (fade) {
      // fade out alert
      setAlerts((alerts) =>
        alerts.map((x) =>
          x.itemId === alert.itemId ? { ...x, fade: true } : x
        )
      );

      // remove alert after faded out
      setTimeout(() => {
        setAlerts((alerts) => alerts.filter((x) => x.itemId !== alert.itemId));
      }, 250);
    } else {
      // remove alert
      setAlerts((alerts) => alerts.filter((x) => x.itemId !== alert.itemId));
    }
  }

  function cssClasses(alert) {
    if (!alert) return;

    const classes = ["alert", "alert-dismissable"];

    const alertTypeClass = {
      [AlertType.Success]: "alert-success",
      [AlertType.Error]: "alert-danger",
      [AlertType.Info]: "alert-info",
      [AlertType.Warning]: "alert-warning",
    };

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push("fade");
    }

    return classes.join(" ");
  }

  if (!alerts.length) return null;

  return (
    <div>
      {alerts.map((alert, index) => (
        <div
          className="alert alert-warning shadow-lg z-50 mt-5 fixed w-1/4 h-14 flex justify-center toast toast-center toast-top"
          key={index}
        >
          <div className="alert alert-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{alert.message}</span>
            <FaWindowClose
              size="1.2rem"
              onClick={() => removeAlert(alert)}
              className="float-right"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
