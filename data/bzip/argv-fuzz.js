import ChartUtil from "../../chartUtil.js";

import {chisel_bzip2_argv as crashInfo_chisel_bzip2_argv} from "../../crash_info_display/chisel/bzip2_argv.js";
import {blade_bzip2_argv as crashInfo_blade_bzip2_argv} from "../../crash_info_display/blade/bzip2_argv.js"
import {cov_bzip2_argv as crashInfo_cov_bzip2_argv} from "../../crash_info_display/cov/bzip2_argv.js"
import {covf_bzip2_argv as crashInfo_covf_bzip2_argv} from "../../crash_info_display/covf/bzip2_argv.js"
import {cova_bzip2_argv as crashInfo_cova_bzip2_argv} from "../../crash_info_display/cova/bzip2_argv.js"

const ChiselCrashInfo = crashInfo_chisel_bzip2_argv;
const BladeCrashInfo = crashInfo_blade_bzip2_argv;
const CovCrashInfo = crashInfo_cov_bzip2_argv;
const CovACrashInfo = crashInfo_cova_bzip2_argv;
const CovFCrashInfo = crashInfo_covf_bzip2_argv;

import {chisel_bzip2_argv as debLines_chisel_bzip2_argv} from "../../deb_lines_new/chisel/bzip2_argv.js";
import {blade_bzip2_argv as debLines_blade_bzip2_argv} from "../../deb_lines_new/blade/bzip2_argv.js"
import {cov_bzip2_argv as debLines_cov_bzip2_argv} from "../../deb_lines_new/cov/bzip2_argv.js"
import {cova_bzip2_argv as debLines_cova_bzip2_argv} from "../../deb_lines_new/cova/bzip2_argv.js"
import {covf_bzip2_argv as debLines_covf_bzip2_argv} from "../../deb_lines_new/covf/bzip2_argv.js"

const ChiselDebLines = debLines_chisel_bzip2_argv;
const BladeDebLines = debLines_blade_bzip2_argv;
const CovDebLines = debLines_cov_bzip2_argv;
const CovADebLines = debLines_cova_bzip2_argv;
const CovFDebLines = debLines_covf_bzip2_argv;

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
  {beginLoc: 691,name: "BZ2_decompress",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 691,name: "start",position: "bottom-left",textBaseline:"top"},
  {beginLoc: 3157,name: "end",position: "bottom-left",textBaseline:"top"},
  
  {beginLoc: 9528,name: "snocString",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 9528,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 9561,name: "end",position: "bottom-left",textBaseline:"top"},
  
];
export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
