export const BASE_URL = "http://192.168.1.25/auto-kar/public/crmapi/";

export const URL = {
  // LOGIN
  LOGIN: "admin/login",
  LOGOUT: "admin-logout",

  // ROLES
  ROLE: "role",

  // ADMIN
  ADMIN: "admin",
  ADMIN_ROLES: "active-roles",

  // SUBSCRIPTIONS

  SUBSCRIPTION: "subscription",

  // ZONES
  ZONE: "zone",

  // FARE

  FARE: "price",
  // FARE -  PEAK

  PEAK: "peak-charge",

  // FARE - OTHER CHARGES

  OTHERCHARGES: "other-charge",

  // SETTING

  SETTING: "setting",

  // DRIVER REQUEST

  DRIVER_REQUSET: "driver-request",
  DRIVER_REQUSET_REJECT: "request-reject",
  PROOF_ACCEPT: "proof-approve",
};

export const TOKEN = "token";
export const USER_DETAILS = "user_details";
export const PROFILE = "profile";

export const EMAIL =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
