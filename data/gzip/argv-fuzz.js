import ChartUtil from "../../chartUtil.js";
import {chisel_gzip_argv as crashInfo_chisel_gzip_argv} from "../../crash_info_display/chisel/gzip_argv.js";
import {blade_gzip_argv as crashInfo_blade_gzip_argv} from "../../crash_info_display/blade/gzip_argv.js"
import {cov_gzip_argv as crashInfo_cov_gzip_argv} from "../../crash_info_display/cov/gzip_argv.js"
import {covf_gzip_argv as crashInfo_covf_gzip_argv} from "../../crash_info_display/covf/gzip_argv.js"
import {cova_gzip_argv as crashInfo_cova_gzip_argv} from "../../crash_info_display/cova/gzip_argv.js"

const ChiselCrashInfo = crashInfo_chisel_gzip_argv;
const BladeCrashInfo = crashInfo_blade_gzip_argv;
const CovCrashInfo = crashInfo_cov_gzip_argv;
const CovACrashInfo = crashInfo_cova_gzip_argv;
const CovFCrashInfo = crashInfo_covf_gzip_argv;

import {chisel_gzip_argv as debLines_chisel_gzip_argv} from "../../deb_lines_new/chisel/gzip_argv.js";
import {blade_gzip_argv as debLines_blade_gzip_argv} from "../../deb_lines_new/blade/gzip_argv.js"
import {cov_gzip_argv as debLines_cov_gzip_argv} from "../../deb_lines_new/cov/gzip_argv.js"
import {cova_gzip_argv as debLines_cova_gzip_argv} from "../../deb_lines_new/cova/gzip_argv.js"
import {covf_gzip_argv as debLines_covf_gzip_argv} from "../../deb_lines_new/covf/gzip_argv.js"

const ChiselDebLines = debLines_chisel_gzip_argv;
const BladeDebLines = debLines_blade_gzip_argv;
const CovDebLines = debLines_cov_gzip_argv;
const CovADebLines = debLines_cova_gzip_argv;
const CovFDebLines = debLines_covf_gzip_argv;

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
  {beginLoc: 2443,name: "inflate_codes",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 2443,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 2743,name: "end",position: "bottom-left",textBaseline:"top"},
  
  {beginLoc: 7609,name: "get_method",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 7609,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 8170,name: "end",position: "bottom-left",textBaseline:"top"},

  {beginLoc: 4576,name: "build_tree___0",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 4576,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 4703,name: "end",position: "bottom-left",textBaseline:"top"},
];

export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
