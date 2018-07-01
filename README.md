# Data Structures

## Profiling

https://nodejs.org/en/docs/guides/simple-profiling/

```
$ NODE_ENV=production node --prof profiling-server.js

Server is running: http://localhost:3000/?profile=queue

$ ab -k -c 20 -n 250 "http://localhost:3000/?profile=queue"

…
Requests per second:    106.29 [#/sec] (mean)
Time per request:       188.171 [ms] (mean)
Time per request:       9.409 [ms] (mean, across all concurrent requests)
…
```

## WIP

- [x] Stack
- [x] Queues
  - [x] Priority Queues
  - [ ] Dequeue
- [x] Linked Lists
- [ ] Dictionaries
- [x] Hashing
- [ ] Sets
- [x] Binary Search Trees
- [ ] Graphs
