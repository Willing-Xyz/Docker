FROM mongo:4.0
COPY configReplInitiate.js /configReplInitiate.js
RUN apt-get update && apt-get install -y netcat # wait-for 脚本依赖nc命令
COPY wait-for /wait-for
RUN chmod +x /wait-for
CMD /wait-for config1:27019 -t 60 && /wait-for config2:27019 -t 60 && /wait-for config3:27019 -t 60 -- mongo --host config1 --port 27019 /configReplInitiate.js
