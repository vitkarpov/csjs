# Data Structures

## Profiling

https://nodejs.org/en/docs/guides/simple-profiling/

```
$ NODE_ENV=production node --prof profiling-server.js

Server is running: http://localhost:3000/?profile=queue

$ ab -k -c 20 -n 250 "http://localhost:3000/?profile=queue"

…
Requests per second:    1.27 [#/sec] (mean)
Time per request:       15770.337 [ms] (mean)
Time per request:       788.517 [ms] (mean, across all concurrent requests)
…
```

For instance, priority queue is now implemented with inefficient way, chech out [profiling results](queue/profiling-results)

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
