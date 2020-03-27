FROM mongo:4.0
COPY shardClusterInitiate.js /shardClusterInitiate.js
RUN apt-get update && apt-get install -y netcat # wait-for 脚本依赖nc命令
COPY wait-for /wait-for
RUN chmod +x /wait-for
CMD /wait-for mongos:27017 -t 60 && mongo --host mongos /shardClusterInitiate.js
