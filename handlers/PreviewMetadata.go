package handlers

import (
	"goprivacy/utils"
	"net/http"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

func PreviewMetadata(c *gin.Context) {
	file, err := c.FormFile("file")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No File Uploaded"})
		return
	}

	tempPath := filepath.Join("uploads", "temp_"+file.Filename)

	// Save file temporarily
	if err := c.SaveUploadedFile(file, tempPath); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save uploaded file"})
		return
	}

	// Read metadata
	metadata, err := utils.ReadEXIF(tempPath)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read metadata"})
		return
	}

	c.JSON(http.StatusOK, metadata)
}
