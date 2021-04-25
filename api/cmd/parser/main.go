package parser

import (
	"archive/zip"
	"bufio"
	"fmt"
	"log"
	"os"
	"path"
)

const dataset string = "datasets"

func ParseData() string {
	files, err := os.ReadDir(dataset)

	if err != nil {
		log.Fatalf("could not read folder %s: %v", dataset, err)
	}

	for _, f := range files {
		file, err := os.Open(path.Join(dataset, f.Name()))

		if err != nil {
			log.Fatalf("could open the file %s: %v", f.Name(), err)
		}

		buff := bufio.NewReader(file)

		reader := zip.Decompressor(buff)
	}

	fmt.Println(files[0].Name())
	return ""
}
