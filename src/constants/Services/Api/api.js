import { post, get, deletes } from "./method";
import { URL } from "../constants";

// LOGIN

export const login = async (data) => await post(URL.LOGIN, data);

export const logout = async () => await get(URL.LOGOUT);

// ROLES

export const getRole = async () => await get(URL.ROLE);

export const createRole = async () => await get(URL.ROLE + "/" + "create");

export const addRole = async (data) => await post(URL.ROLE, data);

export const editRole = async (id) =>
  await get(URL.ROLE + "/" + id + "/" + "edit");

export const updateRole = async (id, data) =>
  await post(URL.ROLE + "/" + id, data);

export const statusRole = async (id) => await get(URL.ROLE + "/status/" + id);

// ADMIN

export const getAdmin = async () => await get(URL.ADMIN);

export const getAdminRoles = async () => await get(URL.ADMIN_ROLES);

export const addAdmin = async (data) => await post(URL.ADMIN, data);

export const viewAdmin = async (id) =>
  await get(URL.ADMIN + "/" + id + "/edit");

export const editAdmin = async (id, data) =>
  await post(URL.ADMIN + "/" + id, data);

export const statusAdmin = async (id) => await get(URL.ADMIN + "/status/" + id);

// SUBSCRIPTION

export const getSubscription = async () => await get(URL.SUBSCRIPTION);

export const addSubscription = async (data) =>
  await post(URL.SUBSCRIPTION, data);

export const editSubscription = async (id) =>
  await get(URL.SUBSCRIPTION + "/" + id);

export const updateSubscription = async (id, data) =>
  await post(URL.SUBSCRIPTION + "/" + id, data);

export const statusSubscription = async (id) =>
  await get(URL.SUBSCRIPTION + "/status/" + id);

// ZONE

export const getZone = async () => await get(URL.ZONE);

export const addZone = async (data) => await post(URL.ZONE, data);

export const editZone = async (id) => await get(URL.ZONE + "/" + id);

export const updateZone = async (id, data) =>
  await post(URL.ZONE + "/" + id, data);

export const statusZone = async (id) => await get(URL.ZONE + "/status/" + id);

// FARE

export const getFare = async () => await get(URL.FARE);

export const addFare = async (data) => await post(URL.FARE, data);

export const viewFare = async (id) => await get(URL.FARE + "/" + id);

export const updateFare = async (id, data) =>
  await post(URL.FARE + "/" + id, data);

export const deleteFare = async (id) => await deletes(URL.FARE + "/" + id);

// FARE - PEAK

export const getPeak = async () => await get(URL.PEAK);

export const addPeak = async (data) => await post(URL.PEAK, data);

export const viewPeak = async (id) => await get(URL.PEAK + "/" + id);

export const updatePeak = async (id, data) =>
  await post(URL.PEAK + "/" + id, data);

export const deletePeak = async (id) => await deletes(URL.PEAK + "/" + id);

// FARE - OTHER CHARGES

export const getOthers = async () => await get(URL.OTHERCHARGES);

export const addOthers = async (data) => await post(URL.OTHERCHARGES, data);

export const viewOthers = async (id) => await get(URL.OTHERCHARGES + "/" + id);

export const updateOthers = async (id, data) =>
  await post(URL.OTHERCHARGES + "/" + id, data);

export const deleteOthers = async (id) =>
  await deletes(URL.OTHERCHARGES + "/" + id);

// DRIVER REQUSET

export const driver_requets = async () => await get(URL.DRIVER_REQUSET);

export const driver_request_view = async (id) =>
  await get(URL.DRIVER_REQUSET_REJECT + "/view/" + id);

export const accept = async (data) => await post(URL.PROOF_ACCEPT, data);

// SETTING

export const getSetting = async () => await get(URL.SETTING);

export const addSetting = async (data) => await post(URL.SETTING, data);

export const viewSetting = async (id) => await get(URL.SETTING + "/" + id);

export const updateSetting = async (id, data) =>
  await post(URL.SETTING + "/" + id, data);

export const deleteSetting = async (id) =>
  await deletes(URL.SETTING + "/" + id);
