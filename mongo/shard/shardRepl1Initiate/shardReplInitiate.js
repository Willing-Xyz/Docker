rs.initiate(
  {
    _id: "shardRepl1",
    members: [
      {
        _id: 0, 
        host: "shard1:27018"
      },
      {
        _id: 1, 
        host: "shard2:27018"
      },
      {
        _id: 2, 
        host: "shard3:27018"
      }
    ]
  }
)

