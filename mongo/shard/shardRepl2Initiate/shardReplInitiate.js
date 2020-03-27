rs.initiate(
  {
    _id: "shardRepl2",
    members: [
      {
        _id: 0, 
        host: "shard4:27018"
      },
      {
        _id: 1, 
        host: "shard5:27018"
      },
      {
        _id: 2, 
        host: "shard6:27018"
      }
    ]
  }
)

