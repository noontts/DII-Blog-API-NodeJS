# Blog API Endpoints

This document provides information about the various endpoints available in the Blog API.

## Get All Blogs

Endpoint: `GET http://localhost:3000/api/v1/blogs`

Use this endpoint to retrieve a list of all blogs.

## Get Each Blog

Endpoint: `GET http://localhost:3000/api/v1/blogs/1`

Use this endpoint to retrieve a specific blog by its ID. Replace `1` with the desired blog ID.

## Category Blogs

Endpoint: `GET http://localhost:3000/api/v1/blogs/?category=technology`

Use this endpoint to retrieve blogs belonging to a specific category. Replace `technology` with the desired category.

## Type Blogs

Endpoint: `GET http://localhost:3000/api/v1/blogs/?type=opinion`

Use this endpoint to search for blogs by their type. Replace `opinion` with the desired type.

## Search by Title (Keyword)

Endpoint: `GET http://localhost:3000/api/v1/blogs/?search=acc`

Use this endpoint to search for blogs by a keyword in their title. Replace `acc` with the desired keyword.

## EX. Multi-Search (Category and Title)

Endpoint: `GET http://localhost:3000/api/v1/blogs/?category=technology&search=acc`

Use this endpoint to perform a combined search by category and title keyword. Replace `technology` with the desired category and `acc` with the desired keyword.

Please make sure to replace `http://localhost:3000` with the actual base URL of your API when using these endpoints.
