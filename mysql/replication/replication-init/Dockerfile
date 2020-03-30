FROM mysql:5.7
RUN apt-get update && apt-get install -y netcat # wait-for 脚本依赖nc命令
COPY init.sql /init.sql
COPY wait-for /wait-for
RUN chmod +x /wait-for
CMD /wait-for master:3306 -t 60 && /wait-for slave:3306 -t 60 -- mysql -h slave -p12345 < /init.sql
