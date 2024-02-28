## Benchmarks
### SSR
```shell
ab -n 100 -c 10 -H "User-Agent: google" http://localhost/
```
```
This is ApacheBench, Version 2.3 <$Revision: 1903618 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient).....done


Server Software:        nginx/1.25.1
Server Hostname:        localhost
Server Port:            80

Document Path:          /
Document Length:        5525 bytes

Concurrency Level:      10
Time taken for tests:   3.883 seconds
Complete requests:      100
Failed requests:        0
Total transferred:      582500 bytes
HTML transferred:       552500 bytes
Requests per second:    25.75 [#/sec] (mean)
Time per request:       388.286 [ms] (mean)
Time per request:       38.829 [ms] (mean, across all concurrent requests)
Transfer rate:          146.50 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    2   2.3      1      12
Processing:   157  276 181.7    212    1105
Waiting:      156  275 181.8    212    1103
Total:        158  277 181.7    213    1109

Percentage of the requests served within a certain time (ms)
  50%    213
  66%    256
  75%    271
  80%    283
  90%    592
  95%    720
  98%    993
  99%   1109
 100%   1109 (longest request)
```
### CSR
```shell
ab -n 100 -c 10 http://localhost/
```
```
This is ApacheBench, Version 2.3 <$Revision: 1903618 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient).....done


Server Software:        nginx/1.25.1
Server Hostname:        localhost
Server Port:            80

Document Path:          /
Document Length:        1146 bytes

Concurrency Level:      10
Time taken for tests:   0.163 seconds
Complete requests:      100
Failed requests:        0
Total transferred:      138000 bytes
HTML transferred:       114600 bytes
Requests per second:    613.59 [#/sec] (mean)
Time per request:       16.297 [ms] (mean)
Time per request:       1.630 [ms] (mean, across all concurrent requests)
Transfer rate:          826.91 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    4   3.8      2      13
Processing:     3   10   5.0      9      21
Waiting:        2    7   3.0      6      14
Total:          6   14   6.1     14      29

Percentage of the requests served within a certain time (ms)
  50%     14
  66%     17
  75%     19
  80%     19
  90%     22
  95%     26
  98%     29
  99%     29
 100%     29 (longest request)
```