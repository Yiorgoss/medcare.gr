Repository for the website of the same name.

If there are any problems, please let me know.

Change the `homepage` field inside `package.json` to change domain.

This is needed for use with a apache backend

.htaccess
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

