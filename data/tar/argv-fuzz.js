import ChartUtil from "../../chartUtil.js";
import {chisel_tar_argv as crashInfo_chisel_tar_argv} from "../../crash_info_display/chisel/tar_argv.js";
import {blade_tar_argv as crashInfo_blade_tar_argv} from "../../crash_info_display/blade/tar_argv.js"
import {cov_tar_argv as crashInfo_cov_tar_argv} from "../../crash_info_display/cov/tar_argv.js"
import {cova_tar_argv as crashInfo_cova_tar_argv} from "../../crash_info_display/cova/tar_argv.js"
import {covf_tar_argv as crashInfo_covf_tar_argv} from "../../crash_info_display/covf/tar_argv.js"

const ChiselCrashInfo = crashInfo_chisel_tar_argv;
const BladeCrashInfo = crashInfo_blade_tar_argv;
const CovCrashInfo = crashInfo_cov_tar_argv;
const CovACrashInfo = crashInfo_cova_tar_argv;
const CovFCrashInfo = crashInfo_covf_tar_argv;

import {chisel_tar_argv as debLines_chisel_tar_argv} from "../../deb_lines_new/chisel/tar_argv.js";
import {blade_tar_argv as debLines_blade_tar_argv} from "../../deb_lines_new/blade/tar_argv.js"
import {cov_tar_argv as debLines_cov_tar_argv} from "../../deb_lines_new/cov/tar_argv.js"
import {cova_tar_argv as debLines_cova_tar_argv} from "../../deb_lines_new/cova/tar_argv.js"
import {covf_tar_argv as debLines_covf_tar_argv} from "../../deb_lines_new/covf/tar_argv.js"

const ChiselDebLines = debLines_chisel_tar_argv;
const BladeDebLines = debLines_blade_tar_argv;
const CovDebLines = debLines_cov_tar_argv;
const CovADebLines = debLines_cova_tar_argv;
const CovFDebLines = debLines_covf_tar_argv;

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
  {beginLoc: 15024,name: "chdir_do",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 15024,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 15082,name: "end",position: "bottom-left",textBaseline:"top"},

  {beginLoc: 24155,name: "add_exclude_file",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 24155,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 24317,name: "end",position: "bottom-left",textBaseline:"top"},

  {beginLoc: 21276,name: "decode_options",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 21276,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 22799,name: "end",position: "bottom-right",textBaseline:"top"},
];

export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
