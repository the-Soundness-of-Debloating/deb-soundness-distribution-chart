import ChartUtil from "../../chartUtil.js";
import {chisel_mkdir_argv as crashInfo_chisel_mkdir_argv} from "../../crash_info_display/chisel/mkdir_argv.js";
import {blade_mkdir_argv as crashInfo_blade_mkdir_argv} from "../../crash_info_display/blade/mkdir_argv.js"
import {cov_mkdir_argv as crashInfo_cov_mkdir_argv} from "../../crash_info_display/cov/mkdir_argv.js"
import {covf_mkdir_argv as crashInfo_covf_mkdir_argv} from "../../crash_info_display/covf/mkdir_argv.js"
import {cova_mkdir_argv as crashInfo_cova_mkdir_argv} from "../../crash_info_display/cova/mkdir_argv.js"

const ChiselCrashInfo = crashInfo_chisel_mkdir_argv;
const BladeCrashInfo = crashInfo_blade_mkdir_argv;
const CovCrashInfo = crashInfo_cov_mkdir_argv;
const CovACrashInfo = crashInfo_cova_mkdir_argv;
const CovFCrashInfo = crashInfo_covf_mkdir_argv;

import {chisel_mkdir_argv as debLines_chisel_mkdir_argv} from "../../deb_lines_new/chisel/mkdir_argv.js";
import {blade_mkdir_argv as debLines_blade_mkdir_argv} from "../../deb_lines_new/blade/mkdir_argv.js"
import {cov_mkdir_argv as debLines_cov_mkdir_argv} from "../../deb_lines_new/cov/mkdir_argv.js"
import {cova_mkdir_argv as debLines_cova_mkdir_argv} from "../../deb_lines_new/cova/mkdir_argv.js"
import {covf_mkdir_argv as debLines_covf_mkdir_argv} from "../../deb_lines_new/covf/mkdir_argv.js"

const ChiselDebLines = debLines_chisel_mkdir_argv;
const BladeDebLines = debLines_blade_mkdir_argv;
const CovDebLines = debLines_cov_mkdir_argv;
const CovADebLines = debLines_cova_mkdir_argv;
const CovFDebLines = debLines_covf_mkdir_argv;

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
  {beginLoc: 3433,name: "make_path",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 3433,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 4439,name: "end",position: "bottom-right",textBaseline:"top"},
];


export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
