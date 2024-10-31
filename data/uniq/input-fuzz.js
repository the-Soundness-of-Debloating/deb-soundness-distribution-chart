import ChartUtil from "../../chartUtil.js";
import {chisel_uniq_input as crashInfo_chisel_uniq_input} from "../../crash_info_display/chisel/uniq_input.js";
import {blade_uniq_input as crashInfo_blade_uniq_input} from "../../crash_info_display/blade/uniq_input.js"

const ChiselCrashInfo = crashInfo_chisel_uniq_input;
const BladeCrashInfo = crashInfo_blade_uniq_input;
const CovCrashInfo = [];
const CovACrashInfo = [];
const CovFCrashInfo = [];

import {chisel_uniq_input as debLines_chisel_uniq_input} from "../../deb_lines_new/chisel/uniq_input.js";
import {blade_uniq_input as debLines_blade_uniq_input} from "../../deb_lines_new/blade/uniq_input.js"
import {cov_uniq_input as debLines_cov_uniq_input} from "../../deb_lines_new/cov/uniq_input.js"
import {cova_uniq_input as debLines_cova_uniq_input} from "../../deb_lines_new/cova/uniq_input.js"
import {covf_uniq_input as debLines_covf_uniq_input} from "../../deb_lines_new/covf/uniq_input.js"

const ChiselDebLines = debLines_chisel_uniq_input;
const BladeDebLines = debLines_blade_uniq_input;
const CovDebLines = debLines_cov_uniq_input;
const CovADebLines = debLines_cova_uniq_input;
const CovFDebLines = debLines_covf_uniq_input;

const debLinesList = [
  ...ChiselDebLines.map((item) => ({ deb_tool: "Chisel", deb_line: item })),
  ...BladeDebLines.map((item) => ({ deb_tool: "Blade", deb_line: item })),
  ...CovDebLines.map((item) => ({ deb_tool: "Cov", deb_line: item })),
  ...CovADebLines.map((item) => ({ deb_tool: "CovA", deb_line: item })),
  ...CovFDebLines.map((item) => ({ deb_tool: "CovF", deb_line: item })),
];

const crash_info = [
  ...BladeCrashInfo,
  ...ChiselCrashInfo,
  ...CovCrashInfo,
  ...CovACrashInfo,
  ...CovFCrashInfo,
];

const specialFuncs = [
  {beginLoc: 7010,name: "main",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 7010,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 7300,name: "end",position: "bottom-left",textBaseline:"top"},

  {beginLoc: 6595,name: "find_field",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 6595,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 6669,name: "end",position: "bottom-left",textBaseline:"top"},
];

export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
