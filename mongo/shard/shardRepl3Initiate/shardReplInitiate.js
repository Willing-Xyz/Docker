rs.initiate(
  {
    _id: "shardRepl3",
    members: [
      {
        _id: 0, 
        host: "shard7:27018"
      },
      {
        _id: 1, 
        host: "shard8:27018"
      },
      {
        _id: 2, 
        host: "shard9:27018"
      }
    ]
  }
)

