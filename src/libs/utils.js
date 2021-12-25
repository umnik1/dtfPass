/**
 * Created by Layman <anysome@gmail.com> (http://github.com/anysome) on 16/10/31.
 */

import langs from "./cn.json";

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function translate(message) {
  if (message.indexOf(".")) {
    let keys = message.split(".");
    try {
      let result = langs;
      for (let key of keys) {
        result = result[key];
      }
      return result;
    } catch (e) {
      console.error("no langs for " + message);
      return message;
    }
  } else {
    return message;
  }
}

const units = new Map();
units.set("0", translate("objective.unit.check"));
units.set("1", translate("objective.unit.tomato"));
units.set("3", translate("objective.unit.piece"));
units.set("4", translate("objective.unit.km"));
units.set("5", translate("objective.unit.item"));
units.set("2", translate("objective.unit.paper"));

function getUnitName(unitValue) {
  if (units.has(unitValue)) {
    return units.get(unitValue);
  } else {
    return unitValue;
  }
}

function setBadge(number, chrome) {
  try {
    chrome.browserAction.setBadgeText({ string: number });
  } catch (e) {
    console.log("only show badge in chrome");
  }
}

function sendBackground(eventName, chrome) {
  try {
    chrome.runtime.sendMessage(eventName, function(response) {
      console.log("%o", response);
    });
  } catch (e) {
    console.warn("can't connect to background page");
  }
}

function openWeb(url, chrome) {
  try {
    chrome.tabs.create({ url: url });
  } catch (e) {
    window.open(url, "_blank");
  }
}

export { timeout, translate, getUnitName, setBadge, sendBackground, openWeb };

export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function removeItem(key) {
  localStorage.removeItem(key);
}
