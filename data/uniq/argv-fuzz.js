import ChartUtil from "../../chartUtil.js";
import {chisel_uniq_argv as crashInfo_chisel_uniq_argv} from "../../crash_info_display/chisel/uniq_argv.js";
import {blade_uniq_argv as crashInfo_blade_uniq_argv} from "../../crash_info_display/blade/uniq_argv.js"
import {cov_uniq_argv as crashInfo_cov_uniq_argv} from "../../crash_info_display/cov/uniq_argv.js"
import {cova_uniq_argv as crashInfo_cova_uniq_argv} from "../../crash_info_display/cova/uniq_argv.js"
import {covf_uniq_argv as crashInfo_covf_uniq_argv} from "../../crash_info_display/covf/uniq_argv.js"

const ChiselCrashInfo = crashInfo_chisel_uniq_argv;
const BladeCrashInfo = crashInfo_blade_uniq_argv;
const CovCrashInfo = crashInfo_cov_uniq_argv;
const CovACrashInfo = crashInfo_cova_uniq_argv;
const CovFCrashInfo = crashInfo_covf_uniq_argv;

import {chisel_uniq_argv as debLines_chisel_uniq_argv} from "../../deb_lines_new/chisel/uniq_argv.js";
import {blade_uniq_argv as debLines_blade_uniq_argv} from "../../deb_lines_new/blade/uniq_argv.js"
import {cov_uniq_argv as debLines_cov_uniq_argv} from "../../deb_lines_new/cov/uniq_argv.js"
import {cova_uniq_argv as debLines_cova_uniq_argv} from "../../deb_lines_new/cova/uniq_argv.js"
import {covf_uniq_argv as debLines_covf_uniq_argv} from "../../deb_lines_new/covf/uniq_argv.js"

const ChiselDebLines = debLines_chisel_uniq_argv;
const BladeDebLines = debLines_blade_uniq_argv;
const CovDebLines = debLines_cov_uniq_argv;
const CovADebLines = debLines_cova_uniq_argv;
const CovFDebLines = debLines_covf_uniq_argv;

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
  {beginLoc: 7010,name: "main",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 7010,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 7311,name: "end",position: "bottom-left",textBaseline:"top"},

  {beginLoc: 6595,name: "find_field",position: "top-left",textBaseline:"bottom"},
  {beginLoc: 6595,name: "start",position: "bottom-right",textBaseline:"top"},
  {beginLoc: 6669,name: "end",position: "bottom-left",textBaseline:"top"},
];

export const draw = (chart) => {
  ChartUtil.renderData(chart, debLinesList, crash_info, specialFuncs);
};
