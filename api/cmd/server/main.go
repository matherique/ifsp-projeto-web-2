package main

import (
	"fmt"

	"github.com/matherique/projeto-web2/cmd/parser"
)

func main() {
	pd := parser.ParseData()

	fmt.Println(pd)
}
