FROM mongo:4.0
COPY shardReplInitiate.js /shardReplInitiate.js
RUN apt-get update && apt-get install -y netcat # wait-for 脚本依赖nc命令
COPY wait-for /wait-for
RUN chmod +x /wait-for
CMD /wait-for shard4:27018 -t 60 && /wait-for shard5:27018 -t 60 && /wait-for shard6:27018 -t 60 -- mongo --host shard4 --port 27018 /shardReplInitiate.js
