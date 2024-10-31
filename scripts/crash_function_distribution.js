import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


let endPos = {};

async function get_last_function() {
    for (let fuzzFile of fuzzFiles) {
        const data = await import(`${projectDir}/deb_lines_new/blade/${fuzzFile}.js`);
        let debLines = data[`blade_${fuzzFile}`];
        endPos[fuzzFile] = debLines[debLines.length - 1];
    }
}

let fuzzFiles2FuncInfo = {};

function get_function_info() {
    for (let fuzzFile of fuzzFiles) {
        try {
            const data = fs.readFileSync(`function_lines/${fuzzFile}`, 'utf8');
            let lines = data.split('\n');
            let funcInfo = [];
            for (let line of lines) {
                if (line === "") continue;
                let tmp = line.split(" ").filter(item => item !== "");
                let funcBeginLoc = parseInt(tmp[2]);
                let funcName = tmp[0];
                funcInfo.push([funcBeginLoc, funcName]);
            }
            funcInfo.sort((a, b) => a[0] - b[0]);
            funcInfo.forEach((item, index) => {
                let endLoc = index + 1 < funcInfo.length ? funcInfo[index + 1][0] : endPos[fuzzFile];
                item.push(endLoc);
            });
            fuzzFiles2FuncInfo[fuzzFile] = funcInfo;
        } catch (err) {
            console.error('Error reading file:', err);
        }
    }
}

let file_num = 0;

function outputToFile(funcCrashCountArray, fileName) {
    file_num++;
    let output = "Function Name".padEnd(40) + "Count".padEnd(10) + "Percentage".padEnd(20) +
                 "Begin Line".padEnd(20) + "End Line".padEnd(20) + "ID".padEnd(10) + "Sum Percentage\n";

    let num = 1;
    let sum = 0.0;
    let num_50 = 0;

    for (let item of funcCrashCountArray) {
        output += item[0].padEnd(40) + item[1].toString().padEnd(10) +
                  item[2] + "%".padEnd(20) + item[3].toString().padEnd(20) +
                  item[4].toString().padEnd(20) + num.toString().padEnd(10);
        
        num++;
        sum += item[2];
        sum = Math.round(sum * 100) / 100;
        output += sum + "%\n";

        if (sum >= 50 && num_50 === 0) {
            num_50 = num - 1;
        }
    }

    fs.writeFileSync(`function_crash_info/${fileName}`, output);
    console.log(`${fileName} funcTotal:${fuzzFiles2FuncInfo[fileName].length} num_50:${num_50} percentage:${(num_50 / fuzzFiles2FuncInfo[fileName].length * 100).toFixed(2)}%`);
}

function readFile(filePath) {
    const mergedData = {};
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n').slice(1); // Skip header

    for (const line of lines) {
        if (!line) continue; // Skip empty lines
        const [name, countStr] = line.split(/\s+/);
        mergedData[name] = parseInt(countStr);
    }
    
    return mergedData;
}

function mergefuncCrashCount() {
    const files = fs.readdirSync(`${projectDir}/function_crash_info`);
    let filesNum = files.length;

    for (let fileIndex = 0; fileIndex < filesNum; fileIndex++) { 
        const file = files[fileIndex];
        if (file === "merge") continue;

        const [fileName] = file.split('_');
        if (fileIndex !== filesNum - 1 && files[fileIndex + 1].split('_')[0] === fileName) {
            const mergedData = {};
            const data1 = readFile(`${projectDir}/function_crash_info/${file}`);
            const data2 = readFile(`${projectDir}/function_crash_info/${files[fileIndex + 1]}`);

            for (const [name, data] of Object.entries(data1)) {
                mergedData[name] = data;
            }
            for (const [name, data] of Object.entries(data2)) {
                if (!mergedData[name]) {
                    mergedData[name] = data;
                } else {
                    mergedData[name] += data;
                }
            }

            const sortedMergedData = Object.entries(mergedData).sort((a, b) => b[1] - a[1]);

            const outputLines = ['Function Name                           Count     Percentage          Begin Line          End Line            ID        Sum Percentage'];
            const total = fuzzFileCrashNum[file]+fuzzFileCrashNum[files[fileIndex + 1]];
            let sum = 0,id=1;
            for (const [name, data] of sortedMergedData) {
                const percentage = data / total * 100;
                sum += percentage;
                outputLines.push(
                    `${name.padEnd(35)}${data.toString().padStart(10)}${percentage.toFixed(2).padStart(15) + '%'}`
                    +`${fuzzFiles2FuncInfo[file].find(item => item[1] === name)[0].toString().padStart(20)}`
                    +`${fuzzFiles2FuncInfo[file].find(item => item[1] === name)[2].toString().padStart(20)}`
                    +`${id.toString().padStart(10)}`
                    + `${sum.toFixed(2).padStart(15)}`
                );
                id++;
            }
            
            const outputFilePath = `${projectDir}/function_crash_info/merge/${fileName}`;
            fs.writeFileSync(outputFilePath, outputLines.join('\n'), 'utf8');
            fileIndex++;
        } else {
            const sourceFilePath = path.join(projectDir, 'function_crash_info', file);
            const destinationFilePath = path.join(projectDir, 'function_crash_info', 'merge', fileName);
            fs.copyFileSync(sourceFilePath, destinationFilePath);
        } 
    }
}
let funcCrashCount = {};
let fuzzFileCrashNum={};
async function main() {
    const tools = ["blade", "chisel", "cov", "covf", "cova"];
    for (let fuzzFile of fuzzFiles) {
        let crash_locs = [];
        for (let tool of tools) {
            try {
                fs.accessSync(`${projectDir}/crash_info_new/${tool}/${fuzzFile}.js`);
            } catch (err) {
                continue; 
            }            
            const data = await import(`${projectDir}/crash_info_new/${tool}/${fuzzFile}.js`);
            let crash_infos = data[`${tool}_${fuzzFile.split(".")[0]}`];
            for (let crash_info of crash_infos) {
                if (crash_info.crash_loc !== "UNRECOGNIZED_ERROR") crash_locs.push(crash_info.crash_loc);
            }
        }
        crash_locs.sort((a, b) => a - b);
        let funcInfo = fuzzFiles2FuncInfo[fuzzFile];
        
        let funcIndex = 0;
        let crashIndex = 0;
        funcCrashCount[fuzzFile] = {};
        while (crashIndex < crash_locs.length && funcIndex < funcInfo.length) {
            let funcBeginLoc = funcInfo[funcIndex][0];
            let funcName = funcInfo[funcIndex][1];
            let endLoc = funcInfo[funcIndex][2];
            if (crash_locs[crashIndex] < funcBeginLoc) {
                crashIndex++;
                continue;
            }
            if (crash_locs[crashIndex] > endLoc) {
                funcIndex++;
                continue;
            }
            if (!funcCrashCount[fuzzFile][funcName]) {
                funcCrashCount[fuzzFile][funcName] = 0;
            }
            funcCrashCount[fuzzFile][funcName]++;
            crashIndex++;
        }

        let funcCrashCountArray = [];
        let totalCount = crash_locs.length;
        fuzzFileCrashNum[fuzzFile]=totalCount;
        for (let [key, value] of Object.entries(funcCrashCount[fuzzFile])) {
            let tmp = Math.round(value / totalCount * 10000);
            let func = funcInfo.find(item => item[1] === key); 
            funcCrashCountArray.push([key, value, tmp / 100, func[0], func[2]]);
        }
        funcCrashCountArray.sort((a, b) => b[1] - a[1]);
        outputToFile(funcCrashCountArray, fuzzFile);
    }
    mergefuncCrashCount();
}


let nowPwd = process.cwd();
if (nowPwd.endsWith("scripts")) {
    process.chdir("../");
}

const projectDir = process.cwd();
const fuzzFiles = fs.readdirSync(`${projectDir}/crash_info/blade`);

await get_last_function();
get_function_info();
await main();
