package utils

import (
	"image"
	"os"

	_ "image/jpeg"
	_ "image/png"

	"github.com/disintegration/imaging"
)

// This function Reencodes the Image wuthout the metadata

// The Server returns and Encoded image free of the exif data
func RemoveEXIF(inputPath, outputPath string) error {
	file, err := os.Open(inputPath)
	if err != nil {
		return err
	}
	defer file.Close()

	img, _, err := image.Decode(file) // This drops the EXIF
	if err != nil {
		return err
	}

	out, err := os.Create(outputPath)
	if err != nil {
		return err
	}
	defer out.Close()

	return imaging.Encode(out, img, imaging.JPEG)

}
