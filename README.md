## Windows Portfolio

This is an open source project that allows anyone to create a beautiful portfolio based on Windows Desktop UI.

## How to make it my own

First, edit data.json:

```json
{
	"Resume": "resume.pdf",
	"LinkedIn": "URL",
	"Email": "EMAIL ADDRESS",
	"GitHub": "URL",
	"AboutMe": {
		"header": "My name is BLANK",
		"content": "DESCRIPTON ABOUT YOURSELF"
	},
	"Passions": ["ARRAY OF PASSIONS"],
	"Hobbies": [
		{
			"text": "HOBBY",
			"imgURL": "HOBBY PICTURE"
		}
	],
	"Books": ["ISBN10 OF BOOKS"],
	"BooksAPIKEY": "GOOGLES API KEY",
	"OldPortfolios": [
		{
			"title": "OLD PORTFOLIO TITLE",
			"description": "SHORT DESC",
			"link": { "type": "SOURCE OR DEMO", "url": "URL" },
			"created": "DATE CREATED"
		}
	],
	"Projects": [
		{
			"title": "TITLE OF PROJECT",
			"description": "DESC OF PROJECT",
			"link": {
				"type": "SOURCE OR DEMO",
				"url": "URL"
			},
			"created": "DATE CREATED"
		}
	]
}
```

Second,

```bash
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio!

## Contributing

If you would like to contribute PLEASE make an issue first, then you can create a pull request.
