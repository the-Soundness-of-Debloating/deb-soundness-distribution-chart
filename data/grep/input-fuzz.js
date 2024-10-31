import ChartUtil from "../../chartUtil.js";
import {chisel_grep_input as crashInfo_chisel_grep_input} from "../../crash_info_display/chisel/grep_input.js";
import {blade_grep_input as crashInfo_blade_grep_input} from "../../crash_info_display/blade/grep_input.js"
import {cov_grep_input as crashInfo_cov_grep_input} from "../../crash_info_display/cov/grep_input.js"
import {covf_grep_input as crashInfo_covf_grep_input} from "../../crash_info_display/covf/grep_input.js"
import {cova_grep_input as crashInfo_cova_grep_input} from "../../crash_info_display/cova/grep_input.js"

const ChiselCrashInfo = crashInfo_chisel_grep_input;
const BladeCrashInfo = crashInfo_blade_grep_input;
const CovCrashInfo = crashInfo_cov_grep_input;
const CovACrashInfo = crashInfo_cova_grep_input;
const CovFCrashInfo = crashInfo_covf_grep_input;

import {chisel_grep_input as debLines_chisel_grep_input} from "../../deb_lines_new/chisel/grep_input.js";
import {blade_grep_input as debLines_blade_grep_input} from "../../deb_lines_new/blade/grep_input.js"
import {cov_grep_input as debLines_cov_grep_input} from "../../deb_lines_new/cov/grep_input.js"
import {cova_grep_input as debLines_cova_grep_input} from "../../deb_lines_new/cova/grep_input.js"
import {covf_grep_input as debLines_covf_grep_input} from "../../deb_lines_new/covf/grep_input.js"

const ChiselDebLines = debLines_chisel_grep_input;
const BladeDebLines = debLines_blade_grep_input;
const CovDebLines = debLines_cov_grep_input;
const CovADebLines = debLines_cova_grep_input;
const CovFDebLines = debLines_covf_grep_input;

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
  {beginLoc: 21056,name: "grep",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 21056,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 21275,name: "end",position: "bottom-left",textBaseline:"top"},
  
  {beginLoc: 1911,name: "quotearg_buffer_restyled",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 1911,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 3011,name: "end",position: "bottom-left",textBaseline:"top"},

  {beginLoc: 10895,name: "kwsincr",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 10895,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 11222,name: "end",position: "bottom-left",textBaseline:"top"},
  
  {beginLoc: 708,name: "xstrtoimax",position: "top-right",textBaseline:"bottom"},
  {beginLoc: 708,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 934,name: "end",position: "bottom-left",textBaseline:"top"},
];

export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
