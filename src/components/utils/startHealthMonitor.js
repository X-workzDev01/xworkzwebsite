import api from "../interceptors/axiosConfig";
import { Urlconstant } from "../constant/Urlconstant";
import { sendServerAlert } from "./sendServerAlert";

let monitorStarted = false;

export const startHealthMonitor = () => {
  if (monitorStarted) {
    return;
  }
  monitorStarted = true;

  const apis = [
    {
      service: "Dream Service",

      url: Urlconstant.url + "utils/dropdown",

      headers: {
        spreadsheetId: Urlconstant.spreadsheetId,
      },
    },

    {
      service: "Batch Service",

      url: Urlconstant.BACTH_URL + "api/getCourseName?status=Active",

      headers: {
        spreadsheetId: Urlconstant.spreadsheetId,
      },
    },
  ];

  const checkApis = async () => {
    const outageActive = localStorage.getItem("backend_outage") === "true";

    let failedApi = null;

    for (const item of apis) {
      try {
        await api.get(
          item.url,

          {
            timeout: 10000,

            headers: item.headers,
          },
        );
      } catch (error) {
        failedApi = {
          service: item.service,

          url: item.url,

          status: error.response?.status || "NETWORK_ERROR",

          message: error.message || "Unknown Error",

          method: error.config?.method?.toUpperCase() || "GET",
        };

        break;
      }
    }

    if (!failedApi && outageActive) {
      localStorage.removeItem("backend_outage");

      return;
    }

    if (failedApi && outageActive) {
      return;
    }

    if (failedApi) {
      await sendServerAlert(
        `Backend Failure Detected

Service: ${failedApi.service}

API: ${failedApi.url}

Method: ${failedApi.method}

Status: ${failedApi.status}

Message: ${failedApi.message}

Frontend URL: ${window.location.href}

Time: ${new Date().toLocaleString()}
`,
      );

      localStorage.setItem(
        "backend_outage",

        "true",
      );
    }
  };

  checkApis();

  setInterval(
    checkApis,
    60 * 60 * 1000,
  );
};
