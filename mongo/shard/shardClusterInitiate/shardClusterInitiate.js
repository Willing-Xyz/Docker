function addShard(shardRepl) {

  var count = 0;
  while (count <= 100) {
    var result = sh.addShard(shardRepl);
    if (result.ok == 0) {
      sleep(500); // 如果增加失败，则一秒后重试
      count++;
    }
    else {
      break;
    }
  }

}

addShard("shardRepl1/shard1:27018,shard2:27018,shard3:27018");
addShard("shardRepl2/shard4:27018,shard5:27018,shard6:27018");
addShard("shardRepl3/shard7:27018,shard8:27018,shard9:27018");