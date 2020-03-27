FROM mongo:4.0
COPY shardReplInitiate.js /shardReplInitiate.js
RUN apt-get update && apt-get install -y netcat # wait-for 脚本依赖nc命令
COPY wait-for /wait-for
RUN chmod +x /wait-for
CMD /wait-for shard1:27018 -t 60 && /wait-for shard2:27018 -t 60 && /wait-for shard3:27018 -t 60 -- mongo --host shard1 --port 27018 /shardReplInitiate.js
