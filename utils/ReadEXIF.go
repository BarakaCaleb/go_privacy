package utils

import (
	"os"

	"github.com/rwcarlsen/goexif/exif"
	"github.com/rwcarlsen/goexif/tiff"
)

func ReadEXIF(filepth string) (map[string]string, error) {
	f, err := os.Open(filepth)
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

func (w exifWalker) Walk(name exif.FieldName, tag *tiff.Tag) error {
	w[string(name)] = tag.String()
	return nil
}
