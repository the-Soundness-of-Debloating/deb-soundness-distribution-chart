import ChartUtil from "../../chartUtil.js";

import {chisel_date_argv as crashInfo_chisel_date_argv} from "../../crash_info_display/chisel/date_argv.js";
import {blade_date_argv as crashInfo_blade_date_argv} from "../../crash_info_display/blade/date_argv.js"
import {cov_date_argv as crashInfo_cov_date_argv} from "../../crash_info_display/cov/date_argv.js"
import {covf_date_argv as crashInfo_covf_date_argv} from "../../crash_info_display/covf/date_argv.js"
import {cova_date_argv as crashInfo_cova_date_argv} from "../../crash_info_display/cova/date_argv.js"

const ChiselCrashInfo = crashInfo_chisel_date_argv;
const BladeCrashInfo = crashInfo_blade_date_argv;

const CovCrashInfo = crashInfo_cov_date_argv;
const CovACrashInfo = crashInfo_cova_date_argv;
const CovFCrashInfo = crashInfo_covf_date_argv;

import {chisel_date_argv as debLines_chisel_date_argv} from "../../deb_lines_new/chisel/date_argv.js";
import {blade_date_argv as debLines_blade_date_argv} from "../../deb_lines_new/blade/date_argv.js"
import {cov_date_argv as debLines_cov_date_argv} from "../../deb_lines_new/cov/date_argv.js"
import {cova_date_argv as debLines_cova_date_argv} from "../../deb_lines_new/cova/date_argv.js"
import {covf_date_argv as debLines_covf_date_argv} from "../../deb_lines_new/covf/date_argv.js"

const ChiselDebLines = debLines_chisel_date_argv;
const BladeDebLines = debLines_blade_date_argv;
const CovDebLines = debLines_cov_date_argv;
const CovADebLines = debLines_cova_date_argv;
const CovFDebLines = debLines_covf_date_argv;

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
  {beginLoc: 9393,name: "main",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 9393,name: "start",position: "bottom-left",textBaseline:"top"},
  {beginLoc: 9682,name: "end",position: "bottom-left",textBaseline:"top"},
  
  {beginLoc: 3299,name: "yyparse",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 3299,name: "start",position: "bottom-left",textBaseline:"top"},
  {beginLoc: 4385,name: "end",position: "bottom-left",textBaseline:"top"},
  
  {beginLoc: 5004,name: "parse_datetime",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 5004,name: "start",position: "bottom-left",textBaseline:"top"},
  {beginLoc: 5580,name: "end",position: "bottom-left",textBaseline:"top"},
];

export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
