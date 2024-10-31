import ChartUtil from "../../chartUtil.js";
import {chisel_sort_argv as crashInfo_chisel_sort_argv} from "../../crash_info_display/chisel/sort_argv.js";
import {blade_sort_argv as crashInfo_blade_sort_argv} from "../../crash_info_display/blade/sort_argv.js"
import {cov_sort_argv as crashInfo_cov_sort_argv} from "../../crash_info_display/cov/sort_argv.js"
import {cova_sort_argv as crashInfo_cova_sort_argv} from "../../crash_info_display/cova/sort_argv.js"
import {covf_sort_argv as crashInfo_covf_sort_argv} from "../../crash_info_display/covf/sort_argv.js"

const ChiselCrashInfo = crashInfo_chisel_sort_argv;
const BladeCrashInfo = crashInfo_blade_sort_argv;
const CovCrashInfo = crashInfo_cov_sort_argv;
const CovACrashInfo = crashInfo_cova_sort_argv;
const CovFCrashInfo = crashInfo_covf_sort_argv;

import {chisel_sort_argv as debLines_chisel_sort_argv} from "../../deb_lines_new/chisel/sort_argv.js";
import {blade_sort_argv as debLines_blade_sort_argv} from "../../deb_lines_new/blade/sort_argv.js"
import {cov_sort_argv as debLines_cov_sort_argv} from "../../deb_lines_new/cov/sort_argv.js"
import {cova_sort_argv as debLines_cova_sort_argv} from "../../deb_lines_new/cova/sort_argv.js"
import {covf_sort_argv as debLines_covf_sort_argv} from "../../deb_lines_new/covf/sort_argv.js"

const ChiselDebLines = debLines_chisel_sort_argv;
const BladeDebLines = debLines_blade_sort_argv;
const CovDebLines = debLines_cov_sort_argv;
const CovADebLines = debLines_cova_sort_argv;
const CovFDebLines = debLines_covf_sort_argv;

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
  {beginLoc: 13472,name: "main",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 13472,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 14288,name: "end",position: "bottom-right",textBaseline:"top"},

  {beginLoc: 11727,name: "write_line",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 11727,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 11784,name: "end",position: "bottom-left",textBaseline:"top"},

  {beginLoc: 9964,name: "fillbuf___7",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 9964,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 10164,name: "end",position: "bottom-right",textBaseline:"top"},
];

export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
