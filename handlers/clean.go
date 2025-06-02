// File Upload + Cleaner

package handlers

import (
	"net/http"
	"path/filepath"

	"goprivacy/utils"

	"github.com/gin-gonic/gin"
)

func Cleanfile(c *gin.Context) {
	file, err := c.FormFile("file")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No File Uploaded"})
		return
	}

	srcPath := filepath.Join("uploads", file.Filename)
	dstPath := filepath.Join("cleaned", file.Filename)

	//Save the uploaded file

	if err := c.SaveUploadedFile(file, srcPath); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Something went wrong Failed to save the uploaded file"})
		return
	}

	//Clean the exif Data

	err = utils.RemoveEXIF(srcPath, dstPath) // Pass both source and destination paths
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to strip matadata"})
		return
	}

	c.FileAttachment(dstPath, "clean_"+file.Filename)

}

func CleanFile(c *gin.Context) {
	// Example implementation
	c.String(http.StatusOK, "Congratulations File Metadata stripped successfully!")
}
