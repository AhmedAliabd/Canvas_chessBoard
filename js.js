window.addEventListener("load", () => {
  const canvas = document.getElementById("chessboard");
  let ctx = canvas.getContext("2d");
  // Colors
  let lightCellColor = "#F7B384";
  let darkCellColor = "#6E2D00";
  // Frame
  ctx.strokeStyle = "black";
  ctx.strokeRect(250, 50, 400, 400);
  drawChessBoard();
});

function drawChessBoard() {
  for (var x = 1; x <= 8; x++) {
    for (var y = 1; y <= 8; y++) {
      if ((x + y) % 2 == 0) {
        ctx.fillStyle = darkCellColor;
      } else {
        ctx.fillStyle = lightCellColor;
      }
      ctx.fillRect(200 + x * 50, 0 + y * 50, 50, 50);
    }
  }
}
