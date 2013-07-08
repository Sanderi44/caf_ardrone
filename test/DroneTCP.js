#!/usr/bin/env node
/*!
Copyright 2013 Hewlett-Packard Development Company, L.P.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var net = require('net');

var TCP_PORT = 5555;

var server = net.createServer(function(c) {
                                  console.log('server connected');
                                  c.on('end', function() {
                                           console.log('server disconnected');
                                       });
                                  process.stdin.resume();
                                  process.stdin.pipe(c);

                              });

server.listen(TCP_PORT, function() {
                  console.log('server bound');
              });

 
