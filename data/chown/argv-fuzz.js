import ChartUtil from "../../chartUtil.js";
import {chisel_chown_argv as crashInfo_chisel_chown_argv} from "../../crash_info_display/chisel/chown_argv.js";
import {blade_chown_argv as crashInfo_blade_chown_argv} from "../../crash_info_display/blade/chown_argv.js"
import {cov_chown_argv as crashInfo_cov_chown_argv} from "../../crash_info_display/cov/chown_argv.js"
import {covf_chown_argv as crashInfo_covf_chown_argv} from "../../crash_info_display/covf/chown_argv.js"
import {cova_chown_argv as crashInfo_cova_chown_argv} from "../../crash_info_display/cova/chown_argv.js"

const ChiselCrashInfo = crashInfo_chisel_chown_argv;
const BladeCrashInfo = crashInfo_blade_chown_argv;
const CovCrashInfo = crashInfo_cov_chown_argv;
const CovACrashInfo = crashInfo_cova_chown_argv;
const CovFCrashInfo = crashInfo_covf_chown_argv;

import {chisel_chown_argv as debLines_chisel_chown_argv} from "../../deb_lines_new/chisel/chown_argv.js";
import {blade_chown_argv as debLines_blade_chown_argv} from "../../deb_lines_new/blade/chown_argv.js"
import {cov_chown_argv as debLines_cov_chown_argv} from "../../deb_lines_new/cov/chown_argv.js"
import {cova_chown_argv as debLines_cova_chown_argv} from "../../deb_lines_new/cova/chown_argv.js"
import {covf_chown_argv as debLines_covf_chown_argv} from "../../deb_lines_new/covf/chown_argv.js"

const ChiselDebLines = debLines_chisel_chown_argv;
const BladeDebLines = debLines_blade_chown_argv;
const CovDebLines = debLines_cov_chown_argv;
const CovADebLines = debLines_cova_chown_argv;
const CovFDebLines = debLines_covf_chown_argv;

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
  {beginLoc: 4559,name: "link_count_optimize_ok",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 4559,name: "start",position: "bottom-left",textBaseline:"top"},
  {beginLoc: 5023,name: "end",position: "bottom-left",textBaseline:"top"},
  
  {beginLoc: 1470,name: "parse_with_separator",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 1470,name: "start",position: "bottom-left",textBaseline:"top"},
  {beginLoc: 1624,name: "end",position: "bottom-left",textBaseline:"top"},
  
];

export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
