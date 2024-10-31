import fs from 'fs';

let nowPwd = process.cwd();
if(nowPwd.endsWith("scripts")){
    process.chdir("../");
}

let work_dir = process.cwd()+"/deb_lines";
let out_dir = process.cwd()+"/deb_lines_new"


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

                let filePath = work_dir+"/" + tool + "/" + file;
                let outPath = out_dir + "/" + tool + "/" + file + ".js";
                fs.readFile(filePath, 'utf8', (err, fileContent) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    const lines = fileContent.split('\n');

                    if(lines[0].includes('reduced')) lines.shift();

                    if(!lines[0].includes('export')) lines[0] = `export const ${tool}_${file} = ` + lines[0];

                    fs.writeFile(outPath, lines.join('\n'), 'utf8', (err) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                    });
                });
            });
        })
    });
});