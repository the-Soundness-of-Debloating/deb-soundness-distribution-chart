import fs from "fs";

const vulnerabilityData = [
    { ID: "IssueCat-1", ErrorMessage: "Use of uninitialized variable" },
    { ID: "IssueCat-2", ErrorMessage: "Stack-based buffer overflow" },
    { ID: "IssueCat-3", ErrorMessage: "Heap-based buffer overflow" },
    { ID: "IssueCat-4", ErrorMessage: "Global buffer overflow" },
    { ID: "IssueCat-5", ErrorMessage: "Read memory access" },
    { ID: "IssueCat-6", ErrorMessage: "Write memory access" },
    { ID: "IssueCat-7", ErrorMessage: "Direct Leak" },
    { ID: "IssueCat-8", ErrorMessage: "Allocation size too big" },
    { ID: "IssueCat-9", ErrorMessage: "Heap use after free" },
    { ID: "IssueCat-10", ErrorMessage: "Requested allocation size exceeds maximum supported size" },
    { ID: "IssueCat-11", ErrorMessage: "Attempting free on address not malloced" },
    { ID: "IssueCat-12", ErrorMessage: "Negative size param" },
    { ID: "IssueCat-13", ErrorMessage: "Strcpy param overlap" },
    { ID: "IssueCat-14", ErrorMessage: "Memcpy param overlap" },
    { ID: "IssueCat-15", ErrorMessage: "Runtime Error" },
    { ID: "IssueCat-16", ErrorMessage: "Index out of bounds" },
    { ID: "IssueCat-17", ErrorMessage: "Load of invalid value" },
    { ID: "IssueCat-18", ErrorMessage: "Null pointer passed as argument" },
    { ID: "IssueCat-19", ErrorMessage: "Member access within misaligned address" },
    { ID: "IssueCat-20", ErrorMessage: "Applying non-zero offset to null pointer" },
    { ID: "IssueCat-21", ErrorMessage: "Signed integer overflow" },
    { ID: "IssueCat-22", ErrorMessage: "Member access within null pointer" },
    { ID: "IssueCat-23", ErrorMessage: "Store to misaligned address" },
    { ID: "IssueCat-24", ErrorMessage: "Store to null pointer" },
    { ID: "IssueCat-25", ErrorMessage: "Left shift of 1 by 31 places cannot be represented" },
    { ID: "IssueCat-26", ErrorMessage: "Negation cannot be represented" },
    { ID: "IssueCat-27", ErrorMessage: "Execution reached an unreachable program point" },
    { ID: "IssueCat-28", ErrorMessage: "Load of null pointer" },
    { ID: "IssueCat-29", ErrorMessage: "Address points to the zero page" },
    { ID: "IssueCat-30", ErrorMessage: "Dereference of a high value address" },
    { ID: "IssueCat-31", ErrorMessage: "PC points to the zero page" },
    { ID: "IssueCat-32", ErrorMessage: "Nested bug in the same thread" },
    { ID: "IssueCat-33", ErrorMessage: "Unknown" }
];

class CrashInfo {
    constructor(crash_loc, vul_type, deb_tool) {
        this.crash_loc = crash_loc;
        this.vul_type = vul_type;
        this.deb_tool = deb_tool;
    }
}


async function main(){
    const files = ["tar_argv.js"]
    const tools = ["blade", "chisel", "cov", "covf", "cova"];
    for(const file of files){
        const vulTypeCount = {};
        for(const tool of tools){
            if(!fs.existsSync(`${projectDir}/crash_info_new/${tool}/${file}`)){
                continue;
            }
            const data = await import(`file://${projectDir}/crash_info_new/${tool}/${file}`);
            let crash_infos = data[`${tool}_${file.split(".")[0]}`];
            crash_infos.forEach(element => {
                const vul_type = element.vul_type;
                if(!vulTypeCount[vul_type]){
                    vulTypeCount[vul_type] = 0
                }
                vulTypeCount[vul_type]++;
            });
        }
        let sortedIssueCatTypes = Object.entries(vulTypeCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 9);
        function getIssueCatId(vulType){
            if(vulType === "Unknown"){return 33;}
            for(const vul of vulnerabilityData){
                if(vul.ID + " "+ vul.ErrorMessage === vulType){
                    return parseInt(vul.ID.split("-")[1]);
                }
            }
        }
        sortedIssueCatTypes.sort((a, b) => {
            return getIssueCatId(a[0]) - getIssueCatId(b[0]);
        });    
        for(const tool of tools){
            if(!fs.existsSync(`${projectDir}/crash_info_new/${tool}/${file}`)){
                continue;
            }
            const data = await import(`file://${projectDir}/crash_info_new/${tool}/${file}`);
            let crash_infos = data[`${tool}_${file.split(".")[0]}`];
            let newCrashInfos = [];
            for(const vulType of sortedIssueCatTypes){
                let find = false;
                for(const crashInfo of crash_infos){
                    if(crashInfo.vul_type === vulType[0]){
                        newCrashInfos.push(crashInfo);
                        find = true;
                    }
                }
                if(!find){
                    newCrashInfos.push(new CrashInfo(0, vulType[0], tool));
                }
            }
            let content = `export const ${tool}_${file.split(".")[0]} = [\n`;
            for(const crashInfo of newCrashInfos){
                let tmp = crashInfo.crash_loc;
                if(tmp == "UNRECOGNIZED_ERROR") tmp = "\"UNRECOGNIZED_ERROR\"";
                else if(tmp == 0) tmp = "\"\"";
                content += `{ crash_loc: ${tmp}, vul_type: "${crashInfo.vul_type}", deb_tool: "${crashInfo.deb_tool}" },\n`;
            }
            content += "];";
            fs.writeFileSync(`${projectDir}/crash_info_display/${tool}/${file}`, content);
        }
        break;
    }
}



let nowPwd = process.cwd();
if(nowPwd.endsWith("scripts")){
    process.chdir("../");
}

const projectDir = process.cwd();


main();