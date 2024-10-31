import ChartUtil from "../../chartUtil.js";
import {chisel_rm_argv as crashInfo_chisel_rm_argv} from "../../crash_info_display/chisel/rm_argv.js";
import {blade_rm_argv as crashInfo_blade_rm_argv} from "../../crash_info_display/blade/rm_argv.js"
import {cov_rm_argv as crashInfo_cov_rm_argv} from "../../crash_info_display/cov/rm_argv.js"
import {cova_rm_argv as crashInfo_cova_rm_argv} from "../../crash_info_display/cova/rm_argv.js"

const ChiselCrashInfo = crashInfo_chisel_rm_argv;
const BladeCrashInfo = crashInfo_blade_rm_argv;
const CovCrashInfo = crashInfo_cov_rm_argv;
const CovACrashInfo = crashInfo_cova_rm_argv;
const CovFCrashInfo = [];

import {chisel_rm_argv as debLines_chisel_rm_argv} from "../../deb_lines_new/chisel/rm_argv.js";
import {blade_rm_argv as debLines_blade_rm_argv} from "../../deb_lines_new/blade/rm_argv.js"
import {cov_rm_argv as debLines_cov_rm_argv} from "../../deb_lines_new/cov/rm_argv.js"
import {cova_rm_argv as debLines_cova_rm_argv} from "../../deb_lines_new/cova/rm_argv.js"
import {covf_rm_argv as debLines_covf_rm_argv} from "../../deb_lines_new/covf/rm_argv.js"

const ChiselDebLines = debLines_chisel_rm_argv;
const BladeDebLines = debLines_blade_rm_argv;
const CovDebLines = debLines_cov_rm_argv;
const CovADebLines = debLines_cova_rm_argv;
const CovFDebLines = debLines_covf_rm_argv;

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
  {beginLoc: 1843,name: "quotearg_buffer_restyled",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 1843,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 2793,name: "end",position: "bottom-right",textBaseline:"top"},

  {beginLoc: 6968,name: "main",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 6968,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 7197,name: "end",position: "bottom-right",textBaseline:"top"},

  {beginLoc: 5762,name: "fts_palloc",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 5762,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 5786,name: "end",position: "bottom-left",textBaseline:"top"},
];

export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
