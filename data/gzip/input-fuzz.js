import ChartUtil from "../../chartUtil.js";
import {chisel_gzip_input as crashInfo_chisel_gzip_input} from "../../crash_info_display/chisel/gzip_input.js";
import {blade_gzip_input as crashInfo_blade_gzip_input} from "../../crash_info_display/blade/gzip_input.js"
import {cov_gzip_input as crashInfo_cov_gzip_input} from "../../crash_info_display/cov/gzip_input.js"
import {covf_gzip_input as crashInfo_covf_gzip_input} from "../../crash_info_display/covf/gzip_input.js"
import {cova_gzip_input as crashInfo_cova_gzip_input} from "../../crash_info_display/cova/gzip_input.js"

const ChiselCrashInfo = crashInfo_chisel_gzip_input;
const BladeCrashInfo = crashInfo_blade_gzip_input;
const CovCrashInfo = crashInfo_cov_gzip_input;
const CovACrashInfo = crashInfo_cova_gzip_input;
const CovFCrashInfo = crashInfo_covf_gzip_input;

import {chisel_gzip_input as debLines_chisel_gzip_input} from "../../deb_lines_new/chisel/gzip_input.js";
import {blade_gzip_input as debLines_blade_gzip_input} from "../../deb_lines_new/blade/gzip_input.js"
import {cov_gzip_input as debLines_cov_gzip_input} from "../../deb_lines_new/cov/gzip_input.js"
import {cova_gzip_input as debLines_cova_gzip_input} from "../../deb_lines_new/cova/gzip_input.js"
import {covf_gzip_input as debLines_covf_gzip_input} from "../../deb_lines_new/covf/gzip_input.js"

const ChiselDebLines = debLines_chisel_gzip_input;
const BladeDebLines = debLines_blade_gzip_input;
const CovDebLines = debLines_cov_gzip_input;
const CovADebLines = debLines_cova_gzip_input;
const CovFDebLines = debLines_covf_gzip_input;

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
  {beginLoc: 2096,name: "huft_build",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 2096,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 2418,name: "end",position: "bottom-right",textBaseline:"top"},
  
  {beginLoc: 2442,name: "inflate_codes",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 2442,name: "start",position: "bottom-left",textBaseline:"top"},
  {beginLoc: 2742,name: "end",position: "bottom-left",textBaseline:"top"},

  {beginLoc: 5011,name: "ct_tally",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 5011,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 5086,name: "end",position: "bottom-left",textBaseline:"top"},
];

export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
