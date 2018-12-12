'use strict';

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// �������в�����ȡrootĿ¼��Ĭ���ǵ�ǰĿ¼:
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

// ����������:
var server = http.createServer(function (request, response) {
    // ���URL��path������ '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;
    // ��ö�Ӧ�ı����ļ�·�������� '/srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);
    // ��ȡ�ļ�״̬:
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // û�г������ļ�����:
            console.log('200 ' + request.url);
            // ����200��Ӧ:
            response.writeHead(200);
            // ���ļ�������response:
            fs.createReadStream(filepath).pipe(response);
        } else {
            // �����˻����ļ�������:
            console.log('404 ' + request.url);
            // ����404��Ӧ:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');