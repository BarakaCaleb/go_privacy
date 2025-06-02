package utils

import (
	"os"

	"github.com/rwcarlsen/goexif/exif"
)

func ReadEXIF(filepth string) (map[string]string, error) {
	f, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}
	defer f.Close()

	x, err := exif.Decode(f)
	if err != nil {
		return nil, err
	}

	metadata := make(map[string]string)
	x.Walk(exifWalker(metadata))
	return metadata, nil
}

//Walk through EXIF tags

type exifWalker map[string]string

func (w exifWalker) Walk(name exif.FieldName, val *exif.Tag) error {
	w[string(name)] = val.String()
	return nil
}
