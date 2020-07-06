function pessoa () {
  this.idade = 0

  const self = this
  setInterval(function() {
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/ ,1000)
}

new pessoa

//posso usar o .Bind para amarrar o this, ou criar como uma constate Self.