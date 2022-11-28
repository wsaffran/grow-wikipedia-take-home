import { Pin } from "../utils/interfaces";

export function getPinsFromStorage(): Pin {
  const current = localStorage.getItem("pin");

  return !!current ? JSON.parse(current) : {};
}

export function setPinsToStorage(value: Pin) {
  localStorage.setItem("pin", JSON.stringify(value));
}
