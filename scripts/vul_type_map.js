import fs from 'fs';


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
    { ID: "IssueCat-32", ErrorMessage: "Nested bug in the same thread" }
];

class CrashInfo {
    constructor(crash_loc, vul_type, deb_tool) {
        this.crash_loc = crash_loc;
        this.vul_type = vul_type;
        this.deb_tool = deb_tool;
    }
}

function isSubsequence(str1, str2) {
    let i = 0, j = 0;
    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
        }
        j++;
    }
    return i === str1.length;
}

function tool2Tool(tool){
    switch(tool){
        case "cov":return "Cov";
        case "cova":return "CovA";
        case "covf":return "CovF";
        case "chisel":return "Chisel";
        case "blade":return "Blade";
    }
}

function file2newFile(tool,file,filePath,outPath){
fs.readFile(filePath, 'utf8', (err, fileContent) => {
    if (err) {
        console.error(err);
        return;
    }
    const crashData = (new Function(`return ${fileContent}`))();
    let crashInfoList = crashData.map(data => new CrashInfo(data.crash_loc, data.vul_type, data.deb_tool));

    let crashInfoList_out = [];

    crashInfoList.forEach(crashInfo => {
        if(crashInfo.vul_type === ""){
            return;
        }
        let vul_type_list = crashInfo.vul_type.split(",");
        vul_type_list.forEach(vul_type => {
            let flag = 0;
            if(vul_type === ""){
                return;
            }
            let newCrashInfo = new CrashInfo(crashInfo.crash_loc, vul_type, tool2Tool(crashInfo.deb_tool));

            let vul_type_copy = vul_type.replace(/[^a-zA-Z]/g, "");
            let vul_type_lower = vul_type_copy.toLowerCase();

            if(vul_type === "use-of-uninitialized-value"){
                newCrashInfo.vul_type = vulnerabilityData[0].ID+" "+vulnerabilityData[0].ErrorMessage;
                flag=1;
                }
            else{
                for(let i = 0; i < vulnerabilityData.length; i++){
                    let errorMessage = vulnerabilityData[i].ErrorMessage;
                    errorMessage = errorMessage.replace(/[^a-zA-Z]/g, "");
                    let errorMessage_lower = errorMessage.toLowerCase();
                    if(vul_type_lower.includes("attempting") && errorMessage_lower.includes("attempting")){
                        newCrashInfo.vul_type = vulnerabilityData[i].ID+" "+vulnerabilityData[i].ErrorMessage;
                        flag=1;
                        break;
                    }
                    else if(isSubsequence(vul_type_lower, errorMessage_lower) || isSubsequence(errorMessage_lower, vul_type_lower)){
                        newCrashInfo.vul_type = vulnerabilityData[i].ID+" "+vulnerabilityData[i].ErrorMessage;
                        flag=1;
                        break;
                    }
                }
            }
            if(newCrashInfo.crash_loc === ""){
                newCrashInfo.crash_loc = "\"\""
            }
            if(flag==1)crashInfoList_out.push(newCrashInfo); 
        });

    });

    const newFileContent = `export const ${tool}_${file} = [\n` + crashInfoList_out.map(info =>{
            let tmp = info.crash_loc;
            if(tmp == "UNRECOGNIZED_ERROR") tmp = "\"UNRECOGNIZED_ERROR\"";
            return `{ crash_loc: ${tmp}, vul_type: "${info.vul_type}", deb_tool: "${info.deb_tool}" },`
        }
    ).join('\n') + "\n];";

    fs.writeFile(outPath, newFileContent, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});
}

function main(){
    fs.readdir(work_dir, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        const debloating_tools = files.filter(file => file.isDirectory()).map(dir => dir.name);
        
        debloating_tools.forEach(tool => {
            fs.readdir(work_dir + "/" + tool, (err, files) => {
                if (err) {
                    console.error(err);
                    return;
                }
                files.forEach(file => {
                    const filePath = work_dir + "/" + tool + "/" + file;
                    const outPath = out_dir + "/" + tool + "/" + file+".js";
                    file2newFile(tool,file,filePath,outPath);
                });
            });
        })
    });
}


let nowPwd = process.cwd();
if(nowPwd.endsWith("scripts")){
    process.chdir("../");
}

let work_dir = process.cwd() + "/crash_info";
let out_dir = process.cwd() + "/crash_info_new";


main();