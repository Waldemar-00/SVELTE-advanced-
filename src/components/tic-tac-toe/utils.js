// @ts-nocheck
export let utils = {
  next: 'X',
  lines: [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ],
    [0, 4, 8], [2, 4, 6]
  ],
  win: 'New Game',
  reset () {
    this.win = 'New Game';
    this.next = 'X';
  },
  getWin () {
    return this.win
  },
  getWinner(sqrs) {
    this.lines.forEach( line => {
      const [ a, b, c ] = line;
      if ( sqrs[ a ] ) {
        if (sqrs[ a ] === sqrs[ b ] && sqrs[ a ] === sqrs[ c ] ) {
          this.win = `Winner: ${sqrs[ a ]}!`;
        }
      }
    })
  },
  step ( sqrs, index ) {
    if ( this.win !== 'New Game' ) return sqrs;
    if (!sqrs[ index ] && this.next === 'X'){
      sqrs[ index ] = 'X';
      this.next = 'O';
      sqrs = [ ...sqrs ]
      this.getWinner( sqrs );
      return sqrs;
    }
    else if(!sqrs[ index ] && this.next === 'O') {
      sqrs[ index ] = 'O';
      this.next = 'X';
      sqrs = [ ...sqrs ];
      this.getWinner( sqrs );
      return sqrs;
    }
    else {
      return sqrs;
    }
  }
}