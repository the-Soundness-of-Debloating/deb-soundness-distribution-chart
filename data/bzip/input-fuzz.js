import ChartUtil from "../../chartUtil.js";

import {chisel_bzip2_input as crashInfo_chisel_bzip2_input} from "../../crash_info_display/chisel/bzip2_input.js";
import {blade_bzip2_input as crashInfo_blade_bzip2_input} from "../../crash_info_display/blade/bzip2_input.js"
import {cov_bzip2_input as crashInfo_cov_bzip2_input} from "../../crash_info_display/cov/bzip2_input.js"
import {covf_bzip2_input as crashInfo_covf_bzip2_input} from "../../crash_info_display/covf/bzip2_input.js"
import {cova_bzip2_input as crashInfo_cova_bzip2_input} from "../../crash_info_display/cova/bzip2_input.js"

const ChiselCrashInfo = crashInfo_chisel_bzip2_input;
const BladeCrashInfo = crashInfo_blade_bzip2_input;
const CovCrashInfo = crashInfo_cov_bzip2_input;
const CovACrashInfo = crashInfo_cova_bzip2_input;
const CovFCrashInfo = crashInfo_covf_bzip2_input;

import {chisel_bzip2_input as debLines_chisel_bzip2_input} from "../../deb_lines_new/chisel/bzip2_input.js";
import {blade_bzip2_input as debLines_blade_bzip2_input} from "../../deb_lines_new/blade/bzip2_input.js"
import {cov_bzip2_input as debLines_cov_bzip2_input} from "../../deb_lines_new/cov/bzip2_input.js"
import {cova_bzip2_input as debLines_cova_bzip2_input} from "../../deb_lines_new/cova/bzip2_input.js"
import {covf_bzip2_input as debLines_covf_bzip2_input} from "../../deb_lines_new/covf/bzip2_input.js"

const ChiselDebLines = debLines_chisel_bzip2_input;
const BladeDebLines = debLines_blade_bzip2_input;
const CovDebLines = debLines_cov_bzip2_input;
const CovADebLines = debLines_cova_bzip2_input;
const CovFDebLines = debLines_covf_bzip2_input;

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

  {beginLoc: 3385,name: "sendMTFValues",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 3385,name: "start",position: "bottom-left",textBaseline:"top"},
  {beginLoc: 4528,name: "end",position: "bottom-left",textBaseline:"top"},

  {beginLoc: 10980,name: "mainGtU",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 10980,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 11191,name: "end",position: "bottom-left",textBaseline:"top"},
];

export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
