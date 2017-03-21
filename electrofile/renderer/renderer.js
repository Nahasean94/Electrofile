/* eslint-disable no-console */
const fs = require('fs');
const {shell} = require('electron');
function readFolder(pth, backBtn) {
    console.log('Ok');
    if (backBtn) {
        let path = `${backBtn}../`;
        console.log(path);
        document.getElementById('backBtn').innerHTML = `<button class="btn btn-small btn-default" onclick="readFolder(this.id);" id="${path}">Back</button><br>`;
    }
    fs.readdir(pth, (err, files) => {
        'use strict';
        if (err) throw err;
        if (files[0] !== undefined) {
            document.getElementById('listed-files').innerHTML = '<ul class="list-unstyled" id="files"></ul>';
            for (let file of files) {
                let theID = `${pth}${file}/`;
                fs.stat(pth + file, (err, stats) => {
                    if (err) throw err;

                    if (stats.isDirectory()) {
                        document.getElementById('files').innerHTML += `<li id=${theID} ondblclick="readFolder(this.id,this.id);"><span class="displayed-files"  ><i class="fa fa-folder-open" aria-hidden="true"></i> ${file}</span></li><hr>`;
                    }
                    else {
                        document.getElementById('files').innerHTML += `<li id=${theID} ondblclick="openFile(this.id);"><span class="displayed-files"   ><i class="fa fa-file" aria-hidden="true" ></i> ${file}</span></li><hr>`;
                    }

                });
            }
        }
        else {
            document.getElementById('listed-files').innerHTML = 'Empty Folder';
        }
    });
}

function openFile(path) {
    'use strict';
    console.log(path);
    shell.openItem(path);
}