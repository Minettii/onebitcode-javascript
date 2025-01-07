import keyEvents from "./keyEvents.js";
import copy from "./copyToClipboard.js";
import { addThemeSwitch as themeSwitcher } from "./themeSwitcher.js";
import { calculate } from "./calculate.js";

keyEvents();

calculate();

themeSwitcher();

copy();
