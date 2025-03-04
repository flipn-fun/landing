import { Connection } from "@solana/web3.js";
// import Cropper from "cropperjs";
// @ts-ignore
import Croppie from "croppie";

const BASE_URL =
  process.env.NEXT_PUBLIC_API || "https://api.dumpdump.fun/api/v1";
const TOKEN_ERROR_CODE = -401;
// const BASE_URL = '/api/v1'

const AUTH_KEY = "sex-ui-auth";

export async function http(
  path: string,
  method: string,
  params?: any,
  headers?: any,
  isRepeat?: boolean
) {
  if (!path) return;
  let _path = path,
    postBody = {};
  if (method === "GET" && params) {
    const _paramsString = Object.keys(params)
      .map((key) => {
        return `${key}=${encodeURIComponent(params[key])}`;
      })
      .join("&");
    if (path.indexOf("?") > -1) {
      _path = `${_path}&${_paramsString}`;
    } else {
      _path = `${_path}?${_paramsString}`;
    }
  } else if (method === "POST") {
    postBody = {
      body: JSON.stringify(params)
    };
  }

  let _header = headers
    ? {
        headers: headers
      }
    : {
        headers: {
          authorization: getAuthorizationByLocal()
        }
      };

  const response = await fetch(`${BASE_URL}${_path}`, {
    method: method,
    ...postBody,
    ..._header
  });
  const data = await response.json();
  if (typeof data?.code === "undefined") return data;

  if (data.code === TOKEN_ERROR_CODE) {
    if (!window.connecting) {
      window.connect();
      window.localStorage.removeItem(AUTH_KEY);
    }
    if (isRepeat) {
      return await http(path, method, params, headers, false);
    }
    return data;
  }
  if (data.code !== 0) {
    return data;
  } else {
    return data;
  }
}

export async function httpGet(
  path: string,
  params: any = {},
  isRepeat: boolean = true
): Promise<any> {
  return await http(path, "GET", params, null, isRepeat);
}

export async function httpAuthGet(
  path: string,
  params: any = {},
  isRepeat: boolean = true
): Promise<any> {
  const authorization = await getAuthorization();
  if (!authorization) {
    return {
      code: -1,
      data: null
    };
  }
  return await http(
    path,
    "GET",
    params,
    {
      authorization
    },
    isRepeat
  );
}

export async function httpAuthPost(
  path: string,
  params: any = {},
  isRepeat: boolean = true,
  isJson?: boolean
) {
  const authorization = await getAuthorization();

  return await http(
    path,
    "POST",
    params,
    isJson
      ? {
          authorization,
          "Content-Type": "application/json"
        }
      : { authorization },
    isRepeat
  );
}

export async function httpAuthDelete(
  path: string,
  params: any = {},
  isRepeat: boolean = true
) {
  const authorization = await getAuthorization();

  return await http(
    path,
    "DELETE",
    params,
    {
      authorization
    },
    isRepeat
  );
}

export async function httpAuthPut(
  path: string,
  params: any = {},
  isRepeat: boolean = true
) {
  const authorization = await getAuthorization();

  return await http(
    path,
    "PUT",
    params,
    {
      authorization
    },
    isRepeat
  );
}

export function getDeviceType() {
  if (typeof window === "undefined")
    return { pc: true, ios: false, android: false, mobile: false };
  const userAgent = navigator.userAgent || navigator.vendor;

  const isAndroid = /Android/i.test(userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
  const isMobile =
    /Mobile|Tablet|iPad|iPhone|iPod|Android/i.test(userAgent) ||
    window.innerWidth < 640;

  return {
    pc: !isAndroid && !isIOS && !isMobile,
    ios: isIOS,
    android: isAndroid,
    mobile: isMobile
  };
}

export async function bufferToBase64(buffer: Uint8Array) {
  const base64url: any = await new Promise((r) => {
    const reader = new FileReader();
    reader.onload = () => r(reader.result);
    reader.readAsDataURL(new Blob([buffer]));
  });
  return base64url.slice(base64url.indexOf(",") + 1);
}

let authorization: string | undefined;
const watingQuene: any[] = [];

// const rejectDuration = 1000 * 30;
// let rejectTime = Date.now() - rejectDuration - 1;

export async function getAuthorization() {
  authorization = getAuthorizationByLocal();

  if (!authorization) {
    if (window?.isInitingAuthorization) {
      return new Promise((resolve, reject) => {
        watingQuene.push(resolve);
      });
    } else {
      // await initAuthorization();
    }
  }

  return authorization;
}

export function getAuthorizationByLocal() {
  const auth = window.localStorage.getItem(AUTH_KEY)?.toString();
  return auth;
}

export async function getAuthorizationByLocalAndServer() {
  const auth = window.localStorage.getItem(AUTH_KEY)?.toString();
  if (auth) {
    const val = await httpGet("/project/list?limit=1&launchType=preLaunch");

    if (val.code === TOKEN_ERROR_CODE) {
      return null;
    }
  }

  return auth;
}

export function removeAuth() {
  window.localStorage.removeItem(AUTH_KEY);
}




export function sleep(time: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

export function formatAddress(address: string, len?: number) {
  if (!address) {
    return "";
  }
  const _len = len || 5;
  return (
    address.slice(0, _len) +
    "...." +
    address.slice(address.length - _len, address.length)
  );
}

const addressLastReg = /(\w{35}).+(\w{1})/;
export function formatAddressLast(address: string) {
  if (!address) {
    return "";
  }

  if (address.length > 12) {
    return address.replace(addressLastReg, ($1, $2, $3) => {
      return $2 + "...." + $3;
    });
  }
}


export function formatDateTime(
  _datetime: any,
  formatStr: string = "YYYY-MM-DD hh:mm:ss"
) {
  if (!_datetime) return "";
  const datetime = new Date(_datetime);
  const values: any = {
    "M+": datetime.getMonth() + 1,
    "D+": datetime.getDate(),
    "h+": datetime.getHours(),
    "m+": datetime.getMinutes(),
    "s+": datetime.getSeconds(),
    S: datetime.getMilliseconds()
  };
  let fmt = formatStr;
  const reg = /(Y+)/;
  if (reg.test(fmt)) {
    const y = (reg.exec(fmt) as string[])[1];
    fmt = fmt.replace(y, (datetime.getFullYear() + "").substring(4 - y.length));
  }
  for (const k in values) {
    const regx = new RegExp("(" + k + ")");
    if (regx.test(fmt)) {
      const t = (regx.exec(fmt) as string[])[1];
      fmt = fmt.replace(
        t,
        t.length === 1
          ? values[k]
          : ("00" + values[k]).substring(("" + values[k]).length)
      );
    }
  }
  return fmt;
}
export function base64ToBlob(base64Data: string) {
  const dataArr: any = base64Data.split(",");
  const imageType = dataArr[0].match(/:(.*?);/)[1];
  const textData = window.atob(dataArr[1]);
  const arrayBuffer = new ArrayBuffer(textData.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < textData.length; i++) {
    uint8Array[i] = textData.charCodeAt(i);
  }
  return [new Blob([arrayBuffer], { type: imageType }), imageType.slice(6)];
}

