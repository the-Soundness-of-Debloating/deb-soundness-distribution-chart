import ChartUtil from "../../chartUtil.js";

import {chisel_grep_argv as crashInfo_chisel_grep_argv} from "../../crash_info_display/chisel/grep_argv.js";
import {blade_grep_argv as crashInfo_blade_grep_argv} from "../../crash_info_display/blade/grep_argv.js"
import {cov_grep_argv as crashInfo_cov_grep_argv} from "../../crash_info_display/cov/grep_argv.js"
import {covf_grep_argv as crashInfo_covf_grep_argv} from "../../crash_info_display/covf/grep_argv.js"
import {cova_grep_argv as crashInfo_cova_grep_argv} from "../../crash_info_display/cova/grep_argv.js"

const ChiselCrashInfo = crashInfo_chisel_grep_argv;
const BladeCrashInfo = crashInfo_blade_grep_argv;
const CovCrashInfo = crashInfo_cov_grep_argv;
const CovACrashInfo = crashInfo_cova_grep_argv;
const CovFCrashInfo = crashInfo_covf_grep_argv;

import {chisel_grep_argv as debLines_chisel_grep_argv} from "../../deb_lines_new/chisel/grep_argv.js";
import {blade_grep_argv as debLines_blade_grep_argv} from "../../deb_lines_new/blade/grep_argv.js"
import {cov_grep_argv as debLines_cov_grep_argv} from "../../deb_lines_new/cov/grep_argv.js"
import {cova_grep_argv as debLines_cova_grep_argv} from "../../deb_lines_new/cova/grep_argv.js"
import {covf_grep_argv as debLines_covf_grep_argv} from "../../deb_lines_new/covf/grep_argv.js"

const ChiselDebLines = debLines_chisel_grep_argv;
const BladeDebLines = debLines_blade_grep_argv;
const CovDebLines = debLines_cov_grep_argv;
const CovADebLines = debLines_cova_grep_argv;
const CovFDebLines = debLines_covf_grep_argv;

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
  {beginLoc: 18788,name: "dfamust",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 18788,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 19224,name: "end",position: "bottom-left",textBaseline:"top"},
  
  {beginLoc: 10896,name: "kwsincr",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 10896,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 11223,name: "end",position: "bottom-left",textBaseline:"top"},

  {beginLoc: 22427,name: "main",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 22427,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 23294,name: "end",position: "bottom-left",textBaseline:"top"},
  
  {beginLoc: 708,name: "xstrtoimax",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 708,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 934,name: "end",position: "bottom-left",textBaseline:"top"},
];

export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
