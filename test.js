var io = require('socket.io')();
io.listen(4000);


io.on('connection',(socket)=>{
  socket.on('wallet', function(data){
    console.log(data);
  });
});
app.post('/wallet', (req, res) => {
  let txid = req.body.TXID;
  let to = req.body.TO;
  let coins = req.body.COINS;
  let sig = req.body.SIG;
  let pub = req.body.PUB;
  let previd = req.body.PREVID;
  let dataid = req.body.DATAID;
  //  var temp = crypto.publicDecrypt(publicKey, Buffer.from(txSignature));
  // 인증 후
  //if(temp == txid){
  var newData = {
    TXID: txid,
    TO: to,
    COINS: coins,
    SIG: sig,
    PUB: pub,
    PREVID: previd,
    DATAID: dataid
  };
  console.log("***************************");
  console.log("Data : " + newData + "for wallet");
  console.log("***************************");
  coin.push(newData);
  console.log(coin);
  recieveTXID.push(newData["TXID"]);
  io.emit("addCoin", newData);
  res.send();
  //  }

});
