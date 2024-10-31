import ChartUtil from "../../chartUtil.js";
import {chisel_tar_input as crashInfo_chisel_tar_input} from "../../crash_info_display/chisel/tar_input.js";
import {blade_tar_input as crashInfo_blade_tar_input} from "../../crash_info_display/blade/tar_input.js"
import {cov_tar_input as crashInfo_cov_tar_input} from "../../crash_info_display/cov/tar_input.js"
import {cova_tar_input as crashInfo_cova_tar_input} from "../../crash_info_display/cova/tar_input.js"
import {covf_tar_input as crashInfo_covf_tar_input} from "../../crash_info_display/covf/tar_input.js"

const ChiselCrashInfo = crashInfo_chisel_tar_input;
const BladeCrashInfo = crashInfo_blade_tar_input;
const CovCrashInfo = crashInfo_cov_tar_input;
const CovACrashInfo = crashInfo_cova_tar_input;
const CovFCrashInfo = crashInfo_covf_tar_input;

import {chisel_tar_input as debLines_chisel_tar_input} from "../../deb_lines_new/chisel/tar_input.js";
import {blade_tar_input as debLines_blade_tar_input} from "../../deb_lines_new/blade/tar_input.js"
import {cov_tar_input as debLines_cov_tar_input} from "../../deb_lines_new/cov/tar_input.js"
import {cova_tar_input as debLines_cova_tar_input} from "../../deb_lines_new/cova/tar_input.js"
import {covf_tar_input as debLines_covf_tar_input} from "../../deb_lines_new/covf/tar_input.js"

const ChiselDebLines = debLines_chisel_tar_input;
const BladeDebLines = debLines_blade_tar_input;
const CovDebLines = debLines_cov_tar_input;
const CovADebLines = debLines_cova_tar_input;
const CovFDebLines = debLines_covf_tar_input;

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
  {beginLoc: 12318,name: "read_header",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 12318,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 12623,name: "end",position: "bottom-left",textBaseline:"top"},

  {beginLoc: 24155,name: "add_exclude_file",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 24155,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 24317,name: "end",position: "bottom-left",textBaseline:"top"},
];

export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
