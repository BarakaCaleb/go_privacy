package main

import (
	"time"

	"goprivacy/handlers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Enable CORS
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // Frontend dev server
		AllowMethods:     []string{"POST", "GET", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		ExposeHeaders:    []string{"Content-Disposition"}, // Needed for file download names
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// Routes
	r.POST("/clean", handlers.Cleanfile)         // This endpoint handles file cleaning
	r.POST("/preview", handlers.PreviewMetadata) // This endpoint previews metadata

	r.Run(":8080") // Start server and listen on port 8080
}
