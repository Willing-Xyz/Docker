FROM mongo:4.0
COPY shardReplInitiate.js /shardReplInitiate.js
RUN apt-get update && apt-get install -y netcat # wait-for 脚本依赖nc命令
COPY wait-for /wait-for
RUN chmod +x /wait-for
CMD /wait-for shard7:27018 -t 60 && /wait-for shard8:27018 -t 60 && /wait-for shard9:27018 -t 60 -- mongo --host shard7 --port 27018 /shardReplInitiate.js
